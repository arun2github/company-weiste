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
  CursorArrowRaysIcon,
  CheckBadgeIcon
} from '@heroicons/react/24/outline';

// Re-using theme colors (ideally, import from a central theme file)
const BG_PRIMARY_SERVICES = '#F9F9F9';
const TEXT_PRIMARY_SERVICES = '#222222';
const TEXT_SECONDARY_SERVICES = '#555555';
const ACCENT_ELEGANT_SERVICES = '#004D40'; // Deep Teal
const CARD_BORDER_SERVICES = '#E0E0E0';

const services = [
  {
    title: 'Web Development',
    description: 'Crafting responsive, high-performance web applications with modern architectures and scalable solutions that drive user engagement.',
    icon: ComputerDesktopIcon,
    features: ['React/Next.js', 'Node.js/Express', 'API Design & Integration', 'Database Architecture'],
  },
  {
    title: 'Mobile App Development',
    description: 'Building intuitive and engaging native or cross-platform mobile apps that deliver seamless user experiences on iOS and Android.',
    icon: DevicePhoneMobileIcon,
    features: ['iOS (Flutter)', 'Android (Kotlin/Java/Flutter)', 'Flutter/React Native', 'App Store Deployment'],
  },
  {
    title: 'Digital Strategy & Marketing',
    description: 'Developing data-driven digital marketing strategies to enhance your online presence, reach target audiences, and achieve growth.',
    icon: MegaphoneIcon,
    features: ['SEO & SEM', 'Content Marketing', 'Social Media Management', 'Analytics & Reporting'],
  },
  {
    title: 'CMS & WordPress Solutions',
    description: 'Custom WordPress themes, plugin development, and CMS solutions tailored for optimal content management and performance.',
    icon: CodeBracketIcon,
    features: ['Custom Theme Design', 'Plugin Development', 'WooCommerce Integration', 'Performance Optimization'],
  },
  {
    title: 'Quality Assurance & Testing',
    description: 'Ensuring software reliability and performance through comprehensive QA, including automated and manual testing methodologies.',
    icon: CursorArrowRaysIcon,
    features: ['Automated Test Suites', 'Manual & Exploratory Testing', 'Performance & Load Testing', 'Security Audits'],
  },
  {
    title: 'SEO Optimization Services',
    description: 'Improving your website search engine ranking and online visibility through technical SEO, content strategy, and ethical link building.',
    icon: MagnifyingGlassIcon,
    features: ['Keyword Strategy', 'On-Page & Off-Page SEO', 'Technical SEO Audits', 'Local SEO'],
  },
  {
    title: 'Digital Advertising Campaigns',
    description: 'Managing targeted digital advertising campaigns across various platforms to maximize ROI and connect with your ideal customers.',
    icon: RocketLaunchIcon,
    features: ['PPC (Google Ads, Bing)', 'Social Media Advertising', 'Display & Programmatic Ads', 'Campaign Analytics'],
  },
  {
    title: 'E-commerce Platform Development',
    description: 'Building robust and scalable e-commerce solutions, from custom platforms to Shopify and WooCommerce store development.',
    icon: ShoppingBagIcon,
    features: ['Shopify Development', 'WooCommerce Solutions', 'Custom E-commerce Builds', 'Payment Gateway Integration'],
  },
];

// AnimationProvider might need to be adjusted if its styles conflict, or not used if direct Framer Motion is preferred.
// For now, assuming AnimationProvider handles basic staggering well.

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const IconComponent = service.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 80, damping: 15, delay: index * 0.1 }}
      className="h-full"
    >
      <motion.div
        whileHover={{ 
          scale: 1.03,
          boxShadow: '0px 10px 25px -10px rgba(0,0,0,0.1)', // More pronounced shadow on hover
        }}
        className="flex flex-col h-full bg-white p-8 rounded-xl shadow-md transition-all duration-300 ease-out group"
        style={{ borderColor: CARD_BORDER_SERVICES, borderWidth: '1px'}}
      >
        <div className="mb-6">
          <IconComponent 
            className="w-10 h-10 transition-colors duration-300 ease-out group-hover:stroke-2"
            style={{ color: ACCENT_ELEGANT_SERVICES }} 
          />
        </div>

        <h3 
          className="text-xl font-semibold mb-3 transition-colors duration-300 ease-out"
          style={{ color: TEXT_PRIMARY_SERVICES }}
        >
          {service.title}
        </h3>
        <p 
          className="text-sm leading-relaxed mb-6 flex-grow"
          style={{ color: TEXT_SECONDARY_SERVICES }}
        >
          {service.description}
        </p>

        <div className="space-y-2.5 pt-auto">
          {service.features.map((feature, i) => (
            <div key={i} className="flex items-center space-x-2.5">
              <CheckBadgeIcon 
                className="w-5 h-5 flex-shrink-0"
                style={{color: ACCENT_ELEGANT_SERVICES, opacity: 0.8}}
              />
              <span className="text-xs" style={{ color: TEXT_SECONDARY_SERVICES }}>{feature}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-24 md:py-32" style={{ backgroundColor: BG_PRIMARY_SERVICES }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-4"
            style={{ color: TEXT_PRIMARY_SERVICES }}
          >
            Our Comprehensive Services
          </h2>
          <p 
            className="text-lg text-gray-600 max-w-2xl mx-auto mt-4"
            style={{ color: TEXT_SECONDARY_SERVICES }}
          >
            We offer a tailored suite of expert services designed to elevate your digital presence and empower your business for sustained growth and innovation.
          </p>
           <div className="mt-6 h-1 w-24 mx-auto rounded-full" style={{backgroundColor: ACCENT_ELEGANT_SERVICES, opacity: 0.5}} />
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 