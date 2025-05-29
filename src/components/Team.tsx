'use client';

import { motion } from 'framer-motion';
import { AnimationProvider, AnimatedList } from './AnimationProvider';

const LinkedInIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const GitHubIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
);

const PortfolioIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20 6h-3V4c0-1.103-.897-2-2-2H9c-1.103 0-2 .897-2 2v2H4c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2zM9 4h6v2H9V4zm11 15H4V8h16v11z"/>
    <path d="M8 11h8v2H8zm0 4h8v2H8z"/>
  </svg>
);

const teamMembers = [
  {
    id: 1,
    name: 'Arun Kumar',
    role: 'CEO & Lead Developer',
    image: '/team/john-doe.jpg',
    bio: 'Full-stack developer with 3.5+ years of experience in building scalable applications.',
    accent: '#4f46e5',
    gradient: 'from-indigo-600/20 via-violet-600/20 to-purple-600/20',
    social: {
      linkedin: 'https://linkedin.com/in/johndoe',
      github: 'https://github.com/johndoe',
      instagram: 'https://instagram.com/johndoe',
      portfolio: '#'
    },
  },
  {
    id: 2,
    name: 'Anirudh Praveen',
    role: 'UI/UX Designer',
    image: '/team/jane-smith.jpg',
    bio: 'Creative designer passionate about creating beautiful and intuitive user experiences.',
    accent: '#9333ea',
    gradient: 'from-fuchsia-600/20 via-purple-600/20 to-violet-600/20',
    social: {
      linkedin: 'https://linkedin.com/in/janesmith',
      github: 'https://github.com/janesmith',
      instagram: 'https://instagram.com/janesmith',
      portfolio: '#'
    },
  },
  {
    id: 3,
    name: 'Afroj',
    role: 'Laravel Developer',
    image: '/team/mike-johnson.jpg',
    bio: 'Experienced mobile developer specializing in React Native and native app development.',
    accent: '#0891b2',
    gradient: 'from-cyan-600/20 via-blue-600/20 to-indigo-600/20',
    social: {
      linkedin: 'https://linkedin.com/in/mikejohnson',
      github: 'https://github.com/mikejohnson',
      instagram: 'https://instagram.com/mikejohnson',
      portfolio: '#'
    },
  },
  // Add more team members as needed
];

const SocialIcon = ({ icon: Icon, href }: { icon: any; href: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-600 hover:text-blue-600 transition-colors"
  >
    <Icon className="w-5 h-5" />
  </a>
);

const TeamMemberCard = ({ member, index }: { member: typeof teamMembers[0]; index: number }) => {
  return (
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
        {/* Main Card */}
        <div className="relative rounded-2xl overflow-hidden backdrop-blur-xl">
          {/* Background Pattern */}
          <div className="absolute inset-0">
            <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-80`} />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.1),rgba(255,255,255,0))]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,0,0,0.2),rgba(0,0,0,0))]" />
            <div 
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, ${member.accent} 1px, transparent 0)`,
                backgroundSize: '24px 24px'
              }}
            />
          </div>

          {/* Card Content */}
          <div className="relative p-8">
            {/* Profile Section */}
            <div className="flex flex-col items-center">
              {/* Image Container */}
              <div className="relative mb-6 group-hover:scale-105 transition-transform duration-500">
                <div className="w-32 h-32 rounded-full overflow-hidden bg-gradient-to-br from-white/10 to-white/5 p-1">
                  <div className="w-full h-full rounded-full overflow-hidden bg-black/20 flex items-center justify-center">
                    <div className="text-gray-500">[Photo]</div>
                  </div>
                </div>
                {/* Animated Border */}
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-transparent via-[var(--accent-color)] to-transparent opacity-0 group-hover:opacity-50 blur-sm transition-opacity duration-500"
                  style={{ '--accent-color': member.accent } as React.CSSProperties}
                />
              </div>

              {/* Content */}
              <div className="text-center relative">
                <h3 className="text-2xl font-bold text-white mb-1 tracking-tight">
                  {member.name}
                </h3>
                <p className="text-sm font-medium mb-4" style={{ color: member.accent }}>
                  {member.role}
                </p>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-sm">
                  {member.bio}
                </p>

                {/* Social Links */}
                <div className="flex items-center justify-center space-x-4">
                  <a 
                    href={member.social.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-300"
                    title="LinkedIn Profile"
                  >
                    <LinkedInIcon />
                  </a>
                  <a 
                    href={member.social.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-300"
                    title="GitHub Profile"
                  >
                    <GitHubIcon />
                  </a>
                  <a 
                    href={member.social.instagram} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-300"
                    title="Instagram Profile"
                  >
                    <InstagramIcon />
                  </a>
                  <a 
                    href={member.social.portfolio} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-300"
                    title="Portfolio"
                  >
                    <PortfolioIcon />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimationProvider>
  );
};

const Team = () => {
  return (
    <section id="team" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.15]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <AnimationProvider className="mb-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Meet Our Team
            </h2>
            <div className="h-0.5 w-24 mx-auto rounded-full bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600" />
          </AnimationProvider>
          <AnimationProvider
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mt-6">
              We're a group of passionate individuals dedicated to delivering exceptional digital solutions.
            </p>
          </AnimationProvider>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={member.id} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team; 