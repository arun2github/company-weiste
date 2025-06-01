"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon 
} from '@heroicons/react/24/outline';

// --- Theme Colors (Elegant Tech Minimalism) ---
const BG_PRIMARY_CONTACT = '#F9F9F9';
const TEXT_PRIMARY_CONTACT = '#222222'; // Main text on light backgrounds
const TEXT_SECONDARY_CONTACT = '#555555'; // Secondary text on light backgrounds
const ACCENT_ELEGANT_CONTACT = '#004D40'; // Deep Teal
const CARD_BG_CONTACT = '#FFFFFF'; // Standard card background (form)
const CARD_BORDER_CONTACT = '#E0E0E0';
const INPUT_BG_CONTACT = '#FFFFFF'; 
const SUCCESS_MESSAGE_COLOR = '#004D40'; 
const ERROR_MESSAGE_COLOR = '#B91C1C';

const ContactInfo = () => {
  const infoItems = [
    {
      icon: EnvelopeIcon,
      label: 'Email',
      value: 'whalecore.innovation@gmail.com',
      href: 'mailto:whalecore.innovation@gmail.com',
    },
    {
      icon: PhoneIcon,
      label: 'Phone',
      value: '+91 8882726711',
      href: 'tel:+918882726711',
    },
    {
      icon: MapPinIcon,
      label: 'Address',
      value: 'Sarjapur, Bangalore',
      href: 'https://maps.google.com/?q=Sarjapur+Bangalore',
    },
  ];

  return (
    <div 
      className="flex flex-col justify-center h-full p-8 md:p-10 rounded-xl shadow-lg"
      style={{ backgroundColor: CARD_BG_CONTACT }} // Changed to light card background
    >
      <h3 
        className="text-2xl font-semibold mb-8 text-center lg:text-left"
        style={{color: TEXT_PRIMARY_CONTACT }} // Standard dark text
      >
        Contact Information
      </h3>
      <div className="space-y-6 md:space-y-8">
        {infoItems.map((item) => {
          const IconComponent = item.icon;
          return (
            <div key={item.label} className="flex items-start">
              <IconComponent 
                className="w-7 h-7 mt-1 flex-shrink-0"
                style={{color: ACCENT_ELEGANT_CONTACT}} // Icons now use accent color on light bg
              />
              <div className="ml-4">
                <p className="text-lg font-medium" style={{color: TEXT_PRIMARY_CONTACT}}>{item.label}</p> 
                {item.href && item.href !== '#' ? (
                  <a 
                    href={item.href} 
                    target="_blank" rel="noopener noreferrer"
                    className="text-base transition-colors duration-200 ease-out hover:underline"
                    style={{color: TEXT_SECONDARY_CONTACT}}
                    onMouseEnter={(e) => e.currentTarget.style.color = ACCENT_ELEGANT_CONTACT}
                    onMouseLeave={(e) => e.currentTarget.style.color = TEXT_SECONDARY_CONTACT}
                  >
                    {item.value.split('\\n').map((line, index) => (<span key={index} className="block">{line}</span>))}
                  </a>
                ) : (
                  <p className="text-base" style={{color: TEXT_SECONDARY_CONTACT}}>
                    {item.value.split('\\n').map((line, index) => (<span key={index} className="block">{line}</span>))}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<'success' | 'error' | null>(null);
  const [submissionMessage, setSubmissionMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus(null);
    setSubmissionMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmissionStatus('success');
        setSubmissionMessage(result.message || 'Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmissionStatus('error');
        setSubmissionMessage(result.error || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error("Submission error:", error);
      setSubmissionStatus('error');
      setSubmissionMessage('An unexpected error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputBaseClasses = "w-full px-4 py-3 rounded-lg focus:outline-none transition-all duration-200 ease-out text-base";
  const inputStyle = {
    backgroundColor: INPUT_BG_CONTACT,
    borderColor: CARD_BORDER_CONTACT, // Using this for input borders
    borderWidth: '1px',
    color: TEXT_PRIMARY_CONTACT,
  };
  const inputFocusStyle = {
    borderColor: ACCENT_ELEGANT_CONTACT,
    boxShadow: `0 0 0 2px ${ACCENT_ELEGANT_CONTACT}40`,
  };

  return (
    <div 
      className="h-full p-8 md:p-10 rounded-xl shadow-xl" // Slightly stronger shadow for form card
      style={{ backgroundColor: CARD_BG_CONTACT }} 
    >
      <h3 
        className="text-2xl font-semibold mb-6 text-center lg:text-left" 
        style={{color: TEXT_PRIMARY_CONTACT}}
      >
        Send Us a Message
      </h3>
      <form onSubmit={handleSubmit} className="space-y-5">
        {submissionMessage && (
          <div
            className={`p-3 rounded-md text-sm mb-4 ${
              submissionStatus === 'success' ? 'bg-green-50' : 'bg-red-50'
            }`}
            style={{
              color: submissionStatus === 'success' ? SUCCESS_MESSAGE_COLOR : ERROR_MESSAGE_COLOR,
              borderColor: submissionStatus === 'success' ? SUCCESS_MESSAGE_COLOR : ERROR_MESSAGE_COLOR,
              borderWidth: '1px'
            }}
          >
            {submissionMessage}
          </div>
        )}
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1.5" style={{color: TEXT_SECONDARY_CONTACT}}>Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={inputBaseClasses}
            style={inputStyle}
            onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
            onBlur={(e) => Object.assign(e.target.style, {borderColor: CARD_BORDER_CONTACT, boxShadow: 'none'})}
            disabled={isSubmitting}
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1.5" style={{color: TEXT_SECONDARY_CONTACT}}>Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={inputBaseClasses}
            style={inputStyle}
            onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
            onBlur={(e) => Object.assign(e.target.style, {borderColor: CARD_BORDER_CONTACT, boxShadow: 'none'})}
            disabled={isSubmitting}
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium mb-1.5" style={{color: TEXT_SECONDARY_CONTACT}}>Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className={inputBaseClasses}
            style={inputStyle}
            onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
            onBlur={(e) => Object.assign(e.target.style, {borderColor: CARD_BORDER_CONTACT, boxShadow: 'none'})}
            disabled={isSubmitting}
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-1.5" style={{color: TEXT_SECONDARY_CONTACT}}>Your Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className={inputBaseClasses}
            style={inputStyle}
            onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
            onBlur={(e) => Object.assign(e.target.style, {borderColor: CARD_BORDER_CONTACT, boxShadow: 'none'})}
            disabled={isSubmitting}
          />
        </div>

        <button
          type="submit"
          className="w-full font-medium py-3.5 px-6 rounded-lg transition-all duration-300 ease-out text-white text-base transform hover:scale-[1.02] hover:shadow-md active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
          style={{ backgroundColor: ACCENT_ELEGANT_CONTACT }}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
}

const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32" style={{backgroundColor: BG_PRIMARY_CONTACT}}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-4"
            style={{ color: TEXT_PRIMARY_CONTACT }} // Dark text on light page bg
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Get in Touch
          </motion.h2>
          <motion.p 
            className="text-lg max-w-2xl mx-auto mt-4"
            style={{ color: TEXT_SECONDARY_CONTACT }} // Dark text on light page bg
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            Have a project in mind or just want to say hello? We&apos;d love to hear from you. Send us a message, and we&apos;ll respond as soon as possible.
          </motion.p>
          <motion.div 
            className="mt-6 h-1 w-24 mx-auto rounded-full"
            style={{backgroundColor: ACCENT_ELEGANT_CONTACT, opacity: 0.5}}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          />
        </div>

        {/* Main content area for elegant & accented panels */}
        <div className="relative max-w-6xl mx-auto">
          <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:items-center">
            {/* Left Column: Contact Info Panel */}
            <motion.div 
              className="lg:col-span-4 xl:col-span-4 relative z-10 mb-8 lg:mb-0"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            >
              <ContactInfo />
            </motion.div>
            
            {/* Right Column: Contact Form Card */}
            <motion.div 
              className="lg:col-span-8 xl:col-span-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.35 }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 