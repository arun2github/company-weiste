'use client';

import { motion } from 'framer-motion';
import { StarIcon } from '@heroicons/react/24/solid';
import React from 'react';
import Image from 'next/image';

// --- Theme Colors (Adopted from other sections for consistency) ---
const BG_PRIMARY_CLIENTS = '#F9F9F9';
const TEXT_PRIMARY_CLIENTS = '#222222';
const TEXT_SECONDARY_CLIENTS = '#555555';
const ACCENT_ELEGANT_CLIENTS = '#004D40'; // Deep Teal
const CARD_BORDER_CLIENTS = '#E0E0E0';

// Updated featured client
const featuredClient = {
  id: 1,
  name: 'Tura Municipal Board',
  logo: '/images/turaLogo.jpeg', // Corrected logo path
  industry: 'Meghalaya Government',
  testimonial: {
    id: 1,
    name: 'A. Momin', // Placeholder, please update
    role: 'Chairperson, Tura Municipal Board', // Placeholder, please update
    content: 'Their dedication and innovative approach greatly benefited our community initiatives. A highly recommended partner for digital transformation.', // Placeholder, please update
    rating: 5,
    image: '/testimonials/tura-official.jpg', // Placeholder, please update
  }
};

// Qualitative stats or team-focused metrics
const stats = [
  { label: 'Dedicated Professionals', value: '5+' }, // Assuming 5 team members based on Team.tsx
  { label: 'Years of Combined Experience', value: '10+' }, // Example, adjust as needed
  { label: 'Focus on Innovation', value: '100%' },
  { label: 'Client-Centric Approach', value: 'Core' },
];

const FeaturedClientDisplay = ({ client }: { client: typeof featuredClient }) => (
  <div className="w-full max-w-md mx-auto bg-white p-8 rounded-xl shadow-lg border" style={{borderColor: CARD_BORDER_CLIENTS}}>
    <div className="flex flex-col items-center text-center">
      <div 
        className="w-32 h-32 md:w-36 md:h-36 bg-gray-100 rounded-full flex items-center justify-center mb-6 overflow-hidden relative ring-2 ring-offset-2"
        style={{
          borderColor: CARD_BORDER_CLIENTS, 
          // @ts-expect-error TS might complain about custom CSS var, but it works for Tailwind
          '--tw-ring-color': ACCENT_ELEGANT_CLIENTS + '33' 
        }}
      >
        {client.logo ? (
          <Image 
            src={client.logo} 
            alt={`${client.name} Logo`} 
            width={144} 
            height={144}
            className="object-contain"
          />
        ) : (
          <span className="text-gray-500">LOGO</span>
        )}
      </div>
      <h3 className="text-2xl font-semibold mb-1" style={{color: TEXT_PRIMARY_CLIENTS}}>{client.name}</h3>
      <p className="text-sm mb-4" style={{color: ACCENT_ELEGANT_CLIENTS}}>{client.industry}</p>
      <p className="text-base" style={{color: TEXT_SECONDARY_CLIENTS}}>
        We are proud to have partnered with {client.name} and are actively engaged in exciting new collaborations. Stay tuned for more success stories.
      </p>
    </div>
  </div>
);

const TestimonialCard = ({ testimonial }: { testimonial: typeof featuredClient.testimonial }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: 0.2 }}
    className="w-full max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg border relative" 
    style={{borderColor: CARD_BORDER_CLIENTS}}
  >
    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-gray-100 border-2 flex items-center justify-center overflow-hidden" style={{borderColor: ACCENT_ELEGANT_CLIENTS}}>
        {/* <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" /> */}
        <div className="text-xs text-gray-500">Photo</div>
    </div>
    <div className="flex flex-col text-center pt-8">
      <div className="mb-3">
        <div className="flex justify-center gap-1">
          {[...Array(testimonial.rating)].map((_, i) => (
            <StarIcon key={i} className="w-5 h-5" style={{color: '#FDBF2D'}} /> // Amber color for stars
          ))}
        </div>
      </div>
      <p className="italic text-base md:text-lg mb-6" style={{color: TEXT_SECONDARY_CLIENTS}}>
        &quot;{testimonial.content}&quot;
      </p>
      <h4 className="text-lg font-semibold" style={{color: TEXT_PRIMARY_CLIENTS}}>{testimonial.name}</h4>
      <p className="text-sm" style={{color: ACCENT_ELEGANT_CLIENTS}}>{testimonial.role}</p>
    </div>
  </motion.div>
);

const StatsDisplay = () => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8 mb-16 md:mb-24">
    {stats.map((stat, index) => (
      <motion.div
        key={stat.label}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="text-center p-4 bg-white rounded-lg shadow border" 
        style={{borderColor: CARD_BORDER_CLIENTS}}
      >
        <h3 className="text-2xl md:text-3xl font-semibold mb-1" style={{color: ACCENT_ELEGANT_CLIENTS}}>{stat.value}</h3>
        <p className="text-xs md:text-sm" style={{color: TEXT_SECONDARY_CLIENTS}}>{stat.label}</p>
      </motion.div>
    ))}
  </div>
);

const Clients = () => {
  return (
    <section id="clients" className="py-24 md:py-32" style={{backgroundColor: BG_PRIMARY_CLIENTS}}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-4"
            style={{ color: TEXT_PRIMARY_CLIENTS }}
          >
            Our Partnerships & Collaborations
          </h2>
          <p 
            className="text-lg max-w-2xl mx-auto mt-4"
            style={{ color: TEXT_SECONDARY_CLIENTS }}
          >
            Building strong relationships to achieve mutual success and drive innovation.
          </p>
          <div className="mt-6 h-1 w-24 mx-auto rounded-full" style={{backgroundColor: ACCENT_ELEGANT_CLIENTS, opacity: 0.5}} />
        </motion.div>

        {/* Stats Section */}
        <StatsDisplay />

        {/* Featured Client Section */}
        <div className="mb-16 md:mb-24">
          <FeaturedClientDisplay client={featuredClient} />
        </div>
        
        {/* Testimonial Section */}
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay:0.1}}
        >
          <h3 
            className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight mb-4"
            style={{ color: TEXT_PRIMARY_CLIENTS }}
          >
            From Our Partner
          </h3>
           <div className="mt-5 h-0.5 w-20 mx-auto rounded-full" style={{backgroundColor: ACCENT_ELEGANT_CLIENTS, opacity: 0.4}} />
        </motion.div>

        <TestimonialCard testimonial={featuredClient.testimonial} />

      </div>
    </section>
  );
};

export default Clients; 