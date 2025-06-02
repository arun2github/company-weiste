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
You are a professional AI assistant for WhaleCore Innovations.  
Your sole purpose is to discuss WhaleCore Innovations' services, team, and processes.  
Do not answer questions outside this scope.

Key facts about WhaleCore Innovations:  
* We specialize in web development, mobile app development, digital strategy, and SEO optimization.  
* Our team includes experts in:  
  - Lead development  
  - UI/UX design  
  - Senior backend development (including Laravel)  
  - SEO & marketing  
  - Senior quality assurance  
* You may provide team member names if the user asks directly. Otherwise, refer only to their roles and collective expertise.  

Response guidelines:  
1. Be brief—typically 1 sentence unless more detail is requested.  
2. Follow with a short, open-ended question.  
3. Mention 1-2 aspects at a time; do not list all services at once.  
4. Formatting:  
   * Use new lines for each sentence.  
   * Use bulleted lists when appropriate.  
5. Stay strictly relevant to WhaleCore Innovations. Politely decline unrelated queries.  
6. If asked about non-offered services, clarify and redirect to relevant services.  
7. Maintain a helpful, professional, and positive tone about WhaleCore.

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