"use client";

import { motion } from 'framer-motion';
import { 
  DevicePhoneMobileIcon, 
  ComputerDesktopIcon, 
  MegaphoneIcon, 
  CodeBracketIcon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  RocketLaunchIcon,
  CursorArrowRaysIcon
} from '@heroicons/react/24/outline';
import { AnimationProvider } from './AnimationProvider';

const services = [
  {
    title: 'Web Development',
    description: 'Custom web applications built with cutting-edge technologies to meet your specific business needs.',
    icon: ComputerDesktopIcon,
    gradient: 'from-[#2563eb] to-[#4f46e5]',
    features: ['React/Next.js/Flutter', 'Node.js/Express/Laravel', 'Database Design', 'API Integration'],
  },
  {
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile apps that deliver exceptional user experiences.',
    icon: DevicePhoneMobileIcon,
    gradient: 'from-[#7c3aed] to-[#6366f1]',
    features: ['iOS/Android',  'Flutter', 'App Store Deploy'],
  },
  {
    title: 'Digital Marketing',
    description: 'Strategic digital marketing solutions to boost your online presence and drive growth.',
    icon: MegaphoneIcon,
    gradient: 'from-[#0ea5e9] to-[#3b82f6]',
    features: ['Social Media', 'Content Strategy', 'Email Marketing', 'Analytics'],
  },
  {
    title: 'WordPress Development',
    description: 'Custom WordPress solutions, themes, and plugins for your content management needs.',
    icon: CodeBracketIcon,
    gradient: 'from-[#2563eb] to-[#4f46e5]',
    features: ['Custom Themes', 'Plugin Development', 'WooCommerce', 'Security'],
  },
  {
    title: 'Quality Assurance',
    description: 'Comprehensive testing and QA services to ensure your software meets the highest standards.',
    icon: CursorArrowRaysIcon,
    gradient: 'from-[#7c3aed] to-[#6366f1]',
    features: ['Automated Testing', 'Manual Testing', 'Performance', 'Security Audit'],
  },
  {
    title: 'SEO Optimization',
    description: 'Optimize your website for search engines to improve your online visibility and drive more traffic.',
    icon: MagnifyingGlassIcon,
    gradient: 'from-[#0ea5e9] to-[#3b82f6]',
    features: ['Keyword Research', 'On-Page SEO', 'Technical SEO', 'Link Building'],
  },
  {
    title: 'Advertising',
    description: 'Advertising services to help your business grow and reach your target audience.',
    icon: RocketLaunchIcon,
    gradient: 'from-[#2563eb] to-[#4f46e5]',
    features: ['PPC Campaigns', 'Social Ads', 'Display Ads', 'Analytics'],
  },
  {
    title: 'Shopify Development',
    description: 'Custom Shopify solutions, themes, and plugins for your content management needs.',
    icon: ShoppingBagIcon,
    gradient: 'from-[#7c3aed] to-[#6366f1]',
    features: ['Custom Themes', 'App Development', 'Store Setup', 'Optimization'],
  },
];

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  return (
    <AnimationProvider
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative group h-full"
    >
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="w-full h-full"
      >
        <div className="service-card h-full flex flex-col">
          {/* Icon Section */}
          <div className="relative mb-6">
            <div className={`w-16 h-16 rounded-xl flex items-center justify-center bg-gradient-to-r ${service.gradient} shadow-lg transform -rotate-6 group-hover:rotate-0 transition-transform duration-300`}>
              <service.icon className="w-8 h-8 text-white" />
            </div>
            <div className={`absolute top-0 left-0 w-16 h-16 rounded-xl bg-gradient-to-r ${service.gradient} opacity-20 blur-xl`} />
          </div>

          {/* Content Section */}
          <div className="flex-grow">
            <h3 className="text-xl font-semibold text-white/90 mb-3">
              {service.title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              {service.description}
            </p>

            {/* Features List */}
            <div className="space-y-2.5">
              {service.features.map((feature, i) => (
                <div key={i} className="flex items-center space-x-2.5">
                  <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient}`} />
                  <span className="text-sm text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </AnimationProvider>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.15]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <AnimationProvider className="mb-4">
            <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-6">
              Our Services
            </h2>
            <div className="section-underline" />
          </AnimationProvider>
          <AnimationProvider
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mt-6">
              We offer a comprehensive range of digital services to help your business thrive in the modern world.
            </p>
          </AnimationProvider>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 