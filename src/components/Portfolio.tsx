"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { AnimationProvider, AnimatedList } from './AnimationProvider';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'App Development',
    image: '/portfolio/ecommerce.jpg',
    description: 'A full-featured e-commerce platform with advanced filtering and payment integration.',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    id: 2,
    title: 'Fitness Tracking App',
    category: 'Mobile Development',
    image: '/portfolio/fitness.jpg',
    description: 'Cross-platform mobile app for tracking workouts and nutrition.',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    id: 3,
    title: 'Digital Marketing Campaign',
    category: 'Digital Marketing',
    image: '/portfolio/marketing.jpg',
    description: 'Successful marketing campaign that increased client conversion by 150%.',
    gradient: 'from-orange-500 to-red-500',
  },
  {
    id: 4,
    title: 'News Portal',
    category: 'WordPress',
    image: '/portfolio/news.jpg',
    description: 'Custom WordPress theme and plugins for a major news organization.',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    id: 5,
    title: 'Banking Software QA',
    category: 'Quality Assurance',
    image: '/portfolio/banking.jpg',
    description: 'Comprehensive testing suite for a banking software system.',
    gradient: 'from-indigo-500 to-purple-500',
  },
];

const categories = ['All', 'App Development', 'Mobile Development', 'Digital Marketing', 'WordPress', 'Quality Assurance'];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="portfolio" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.15]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <AnimationProvider className="mb-4">
            <h2 className="text-4xl sm:text-5xl font-bold gradient-text">
              Our Portfolio
            </h2>
          </AnimationProvider>
          <AnimationProvider
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our latest projects and see how we've helped businesses achieve their goals.
            </p>
          </AnimationProvider>
        </div>

        <AnimationProvider
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 
                ${selectedCategory === category
                  ? 'gradient-primary text-white scale-105'
                  : 'glass-effect text-gray-600 hover:bg-white/90'
                }`}
            >
              {category}
            </button>
          ))}
        </AnimationProvider>

        <AnimatedList className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <AnimationProvider
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative group"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                onHoverStart={() => setHoveredId(project.id)}
                onHoverEnd={() => setHoveredId(null)}
                className="w-full"
              >
                <div 
                  className={`absolute inset-0 bg-gradient-to-r rounded-xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300 ${project.gradient}`}
                />
                <div className="relative card-glass rounded-xl overflow-hidden card-hover">
                  <div className="relative h-48 bg-gray-100 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                      [Project Image]
                    </div>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredId === project.id ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  <div className="p-6">
                    <span className={`text-sm font-medium bg-gradient-to-r ${project.gradient} text-white px-3 py-1 rounded-full`}>
                      {project.category}
                    </span>
                    <h3 className="text-xl font-semibold text-gray-900 mt-2">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-gray-600">
                      {project.description}
                    </p>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: hoveredId === project.id ? 1 : 0, y: hoveredId === project.id ? 0 : 10 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4"
                    >
                      <button className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors group">
                        View Project
                        <span className="inline-block transition-transform group-hover:translate-x-1 ml-1">
                          →
                        </span>
                      </button>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimationProvider>
          ))}
        </AnimatedList>
      </div>
    </section>
  );
};

export default Portfolio; 