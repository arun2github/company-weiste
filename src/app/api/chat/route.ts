import { NextRequest, NextResponse } from 'next/server';
import Groq from 'groq-sdk';

// Ensure your Groq API key is set in your .env.local file
if (!process.env.GROQ_API_KEY) {
  throw new Error('GROQ_API_KEY is not set in environment variables.');
}

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

const CHATBOT_MODEL = 'llama3-8b-8192';

const SYSTEM_PROMPT = `
You are a friendly and helpful AI assistant for WhaleCore Innovations.
Your role is to have a natural, peer-to-peer conversation with users about WhaleCore Innovations' services (like web development, mobile app development, digital strategy, SEO optimization), our team, and our processes.

Key facts about WhaleCore Innovations to use in your responses:
*   **Team**: We have a dedicated core team of 5 specialists. Their expertise covers lead development, UI/UX design, senior backend development (including Laravel), SEO & marketing, and senior quality assurance.
*   **Developer Names**: Do not list individual team member names. You can mention roles and the collective expertise of our experienced team, which is led by seasoned technical leaders.

Key instructions for your responses:
1.  **Be Brief**: Keep your answers very concise, typically 1-3 sentences initially unless the user explicitly asks for more detail.
2.  **Conversational Flow**: After providing a brief piece of information, ask a simple, open-ended follow-up question. Examples: "Does that sound like what you're looking for?", "What specific features are you interested in?"
3.  **One Point at a Time**: When asked about a service, mention one or two key aspects. Don't list all at once. Wait for the user to ask for more.
4.  **Clarity and Formatting**:
    *   **Newlines**: Start a new line after each complete sentence or question to ensure readability. Avoid large blocks of text.
    *   **Bulleted Lists**: When presenting multiple related items (e.g., features, benefits, steps, types of services), proactively use a bulleted list. Each bullet point should start on a new line and begin with '*' or '-'.
5.  **Relevance**: Only include useful and relevant information. Avoid filler.
6.  **Honesty**: If a user asks about services WhaleCore Innovations doesn't provide, politely say so and guide them back to relevant offerings. Use the provided Key Facts about WhaleCore Innovations.
7.  **Positive Representation**: Always aim to be helpful and represent WhaleCore Innovations positively.
`;


interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const messages: ChatMessage[] = body.messages;

    if (!messages || messages.length === 0) {
      return NextResponse.json({ error: 'Messages are required' }, { status: 400 });
    }

    // Add the system prompt to the beginning of the messages array if not already present
    // Or, ensure it's always the first message in a new session on the client-side
    const messagesWithSystemPrompt: ChatMessage[] = [
      { role: 'system', content: SYSTEM_PROMPT },
      ...messages.filter(msg => msg.role !== 'system') // Remove any client-sent system messages
    ];

    const chatCompletion = await groq.chat.completions.create({
      messages: messagesWithSystemPrompt,
      model: CHATBOT_MODEL,
      temperature: 0.7, // Adjust for creativity vs. factuality. Lower is more factual.
      max_tokens: 1024, // Adjust as needed for response length
      // stream: true, // Consider streaming for better UX later
    });

    const assistantResponse = chatCompletion.choices[0]?.message?.content || 'Sorry, I couldn\'t generate a response.';

    return NextResponse.json({ reply: assistantResponse });

  } catch (error) {
    console.error('Error in /api/chat:', error);
    let errorMessage = 'An unexpected error occurred.';
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    // It's good practice to not expose raw Groq API errors directly to the client for security reasons.
    // Log the detailed error server-side and return a generic error to the client.
    return NextResponse.json({ error: 'Failed to get response from AI assistant.', details: errorMessage }, { status: 500 });
  }
} 