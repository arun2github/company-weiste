'use client';

import { motion } from 'framer-motion';
import { AnimationProvider, AnimatedList } from './AnimationProvider';
import { StarIcon } from '@heroicons/react/24/solid';

const clients = [
  {
    id: 1,
    name: 'TechCorp Solutions',
    logo: '/clients/techcorp.png',
    industry: 'Technology',
  },
  {
    id: 2,
    name: 'Global Finance',
    logo: '/clients/globalfinance.png',
    industry: 'Finance',
  },
  {
    id: 3,
    name: 'HealthCare Plus',
    logo: '/clients/healthcare.png',
    industry: 'Healthcare',
  },
  {
    id: 4,
    name: 'EduTech Systems',
    logo: '/clients/edutech.png',
    industry: 'Education',
  },
  {
    id: 5,
    name: 'Retail Connect',
    logo: '/clients/retail.png',
    industry: 'Retail',
  },
  {
    id: 6,
    name: 'Media Masters',
    logo: '/clients/media.png',
    industry: 'Media',
  },
];

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CTO at TechCorp Solutions',
    content: 'Working with this team has been an absolute pleasure. Their technical expertise and commitment to quality are unmatched.',
    rating: 5,
    image: '/testimonials/sarah.jpg',
    gradient: 'from-[#2563eb] to-[#4f46e5]',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Product Manager at Global Finance',
    content: 'They delivered our project on time and exceeded our expectations. Their attention to detail and innovative solutions made all the difference.',
    rating: 5,
    image: '/testimonials/michael.jpg',
    gradient: 'from-[#7c3aed] to-[#6366f1]',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Director of Innovation at HealthCare Plus',
    content: 'The team understanding of our industry-specific needs and their ability to deliver cutting-edge solutions has been impressive.',
    rating: 5,
    image: '/testimonials/emily.jpg',
    gradient: 'from-[#0ea5e9] to-[#3b82f6]',
  },
];

const ClientLogo = ({ client }: { client: typeof clients[0] }) => (
  <div className="p-6 bg-white/[0.02] backdrop-blur-lg rounded-lg border border-white/[0.05] flex items-center justify-center h-32 transition-all duration-300 hover:bg-white/[0.05]">
    <div className="text-center">
      <div className="text-gray-500 mb-2">[Logo]</div>
      <p className="text-sm font-medium text-white/80">{client.name}</p>
      <p className="text-xs text-gray-400">{client.industry}</p>
    </div>
  </div>
);

const TestimonialCard = ({ testimonial, index }: { testimonial: typeof testimonials[0]; index: number }) => (
  <AnimationProvider
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="relative group"
  >
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="w-full"
    >
      <div 
        className={`absolute inset-0 bg-gradient-to-r rounded-xl blur-lg opacity-30 group-hover:opacity-40 transition-opacity duration-300 ${testimonial.gradient}`}
      />
      <div className="relative bg-white/[0.02] backdrop-blur-lg rounded-xl p-6 border border-white/[0.05] overflow-hidden">
        <div className="flex flex-col">
          <div className="flex items-center mb-4">
            <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-800 border border-gray-700 mr-4">
              <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                [Photo]
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white/90">{testimonial.name}</h4>
              <p className={`text-sm bg-gradient-to-r ${testimonial.gradient} text-transparent bg-clip-text`}>
                {testimonial.role}
              </p>
            </div>
          </div>
          <div className="mb-4">
            <div className="flex gap-1">
              {[...Array(testimonial.rating)].map((_, i) => (
                <StarIcon key={i} className="w-5 h-5 text-amber-400" />
              ))}
            </div>
          </div>
          <p className="text-gray-400 italic text-sm">{testimonial.content}</p>
        </div>
      </div>
    </motion.div>
  </AnimationProvider>
);

const Stats = () => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
    {[
      { label: 'Happy Clients', value: '100+' },
      { label: 'Projects Completed', value: '250+' },
      { label: 'Years Experience', value: '10+' },
      { label: 'Awards Won', value: '15+' },
    ].map((stat, index) => (
      <AnimationProvider
        key={stat.label}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        <div className="text-center">
          <h3 className="text-3xl font-bold text-white mb-2">{stat.value}</h3>
          <p className="text-gray-400">{stat.label}</p>
        </div>
      </AnimationProvider>
    ))}
  </div>
);

const Clients = () => {
  return (
    <section id="clients" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.15]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <AnimationProvider className="mb-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Our Clients
            </h2>
            <div className="h-1 w-24 mx-auto rounded-full bg-gradient-to-r from-[#2563eb] to-[#4f46e5]" />
          </AnimationProvider>
          <AnimationProvider
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mt-6">
              Trusted by leading companies across various industries
            </p>
          </AnimationProvider>
        </div>

        <Stats />
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-20">
          {clients.map((client) => (
            <motion.div
              key={client.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <ClientLogo client={client} />
            </motion.div>
          ))}
        </div>

        <div className="text-center mb-12">
          <AnimationProvider className="mb-4">
            <h3 className="text-3xl font-bold text-white mb-6">
              What Our Clients Say
            </h3>
            <div className="h-1 w-24 mx-auto rounded-full bg-gradient-to-r from-[#2563eb] to-[#4f46e5]" />
          </AnimationProvider>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={testimonial.id} 
              testimonial={testimonial} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients; 