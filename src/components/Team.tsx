'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import React from 'react';
import Image from 'next/image';

// --- Theme Colors (Elegant Tech Minimalism) ---
const BG_PRIMARY_TEAM = '#F9F9F9';
const TEXT_PRIMARY_TEAM = '#222222';
const TEXT_SECONDARY_TEAM = '#555555';
const ACCENT_ELEGANT_TEAM = '#004D40'; // Deep Teal
const CARD_BORDER_TEAM = '#E0E0E0'; // Light gray for subtle borders
const SOCIAL_ICON_HOVER_BG = '#E6F3F1'; // Very light teal for social icon hover background

const LinkedInIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const GitHubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
);

const PortfolioIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M20 6h-3V4c0-1.103-.897-2-2-2H9c-1.103 0-2 .897-2 2v2H4c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2zM9 4h6v2H9V4zm11 15H4V8h16v11z"/>
    <path d="M8 11h8v2H8zm0 4h8v2H8z"/>
  </svg>
);

const teamMembers = [
  {
    id: 1,
    name: 'Arun Kumar',
    role: 'Lead Developer',
    image: '/images/Arun.jpg',
    bio: 'Full-stack developer with 4+ years of experience in building scalable and innovative applications.',
    social: {
      linkedin: 'https://linkedin.com/in/arunkumar',
      github: 'https://github.com/arunkumar',
      instagram: 'https://instagram.com/arunkumar',
      portfolio: 'https://aruntechfolio.netlify.app/'
    },
  },
  {
    id: 2,
    name: 'Anirudh Praveen',
    role: 'UI/UX Design ',
    image: '/images/placeholder-avatar.svg',
    bio: 'Creative designer passionate about crafting beautiful, intuitive, and user-centered digital experiences.',
    social: {
      linkedin: 'https://linkedin.com/in/anirudhpraveen',
      github: 'https://github.com/anirudhpraveen',
      instagram: 'https://www.instagram.com/appy.1620?igsh=MTQwZDVvbG93dnhi',
      portfolio: '#'
    },
  },
  {
    id: 3,
    name: 'Afroj Alam',
    role: 'Senior Backend Developer',
    image: '/images/afroj.jpeg',
    bio: 'Experienced backend developer specializing in Laravel, building robust and efficient server-side solutions.',
    social: {
      linkedin: 'https://www.linkedin.com/in/afroj-satwilkar-7aaa20193/',
      github: 'https://github.com/AfrojSatwilkar',
      instagram: 'https://www.instagram.com/mr_afroz01?igsh=bGdrNDhlYnpvZzFk&utm_source=qr',
      portfolio: '#'
    },
  },
  {
    id: 4,
    name: 'Ashish Kumar',
    role: 'SEO & Marketing Lead',
    image: '/images/ashish.jpeg',
    bio: 'Strategic marketer with a knack for storytelling and driving brand growth in the digital landscape.',
    social: {
      linkedin: 'https://linkedin.com/in/priyasharma',
      github: '#',
      instagram: 'https://www.instagram.com/ashish_purushottamm?igsh=Mmp1dm9waGQwMDR3',
      portfolio: '#'
    },
  },
  {
    id: 5,
    name: 'Rahul Kumar',
    role: 'Senior QA',
    image: '/images/rahul.jpeg',
    bio: 'Meticulous QA Lead dedicated to ensuring software quality, performance, and exceptional user experiences through comprehensive testing strategies and attention to detail.',
    social: {
      linkedin: 'https://linkedin.com/in/https://www.linkedin.com/in/rahul-kambale-136055162?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      github: '#',
      instagram: 'https://www.instagram.com/rahul.k18?igsh=azljZms3MXJkc2hj',
      portfolio: '#'
    },
  },
  // Add more team members as needed
];

const SocialLink = ({ href, icon: Icon, title }: { href: string; icon: React.ElementType; title: string }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title={title}
      className="p-2.5 rounded-lg group flex items-center justify-center transition-colors duration-200 ease-out focus:outline-none"
      style={{ backgroundColor: isHovered ? SOCIAL_ICON_HOVER_BG : 'transparent' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Icon 
        className="w-5 h-5 transition-all duration-200 ease-out group-hover:scale-110"
        style={{ color: isHovered ? ACCENT_ELEGANT_TEAM : TEXT_SECONDARY_TEAM }}
      />
    </a>
  );
};

const TeamMemberCard = ({ member, index }: { member: typeof teamMembers[0]; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 80, damping: 15, delay: index * 0.12 }}
      className="h-full"
    >
      <motion.div
        whileHover={{ 
          scale: 1.03,
          boxShadow: '0px 10px 25px -10px rgba(0,0,0,0.08), 0px 4px 6px -2px rgba(0,0,0,0.04)',
        }}
        className="flex flex-col text-center h-full bg-white p-8 rounded-xl shadow-md transition-all duration-300 ease-out group"
        style={{ borderColor: CARD_BORDER_TEAM, borderWidth: '1px'}}
      >
        <div className="mb-5 relative self-center">
          <div 
            className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden bg-gray-100 border-2 transition-all duration-300 ease-out group-hover:border-[ACCENT_ELEGANT_TEAM]"
            style={{ borderColor: ACCENT_ELEGANT_TEAM + 'CC' }}
            onMouseEnter={(e) => e.currentTarget.style.borderColor = ACCENT_ELEGANT_TEAM}
            onMouseLeave={(e) => e.currentTarget.style.borderColor = ACCENT_ELEGANT_TEAM + 'CC'}
          >
            <Image 
              src={member.image} 
              alt={`${member.name} - ${member.role}`} 
              width={128}
              height={128}
              className="w-full h-full object-cover" 
              priority={index < 3}
            />
          </div>
        </div>

        <h3 
          className="text-xl font-semibold mb-1 tracking-tight"
          style={{ color: TEXT_PRIMARY_TEAM }}
        >
          {member.name}
        </h3>
        <p 
          className="text-sm font-medium mb-3"
          style={{ color: ACCENT_ELEGANT_TEAM }}
        >
          {member.role}
        </p>
        <p 
          className="text-xs leading-relaxed mb-6 flex-grow mx-auto max-w-xs"
          style={{ color: TEXT_SECONDARY_TEAM }}
        >
          {member.bio}
        </p>

        <div className="flex items-center justify-center space-x-3 mt-auto">
          <SocialLink href={member.social.linkedin} icon={LinkedInIcon} title={`${member.name} on LinkedIn`} />
          {!['Ashish Kumar', 'Anirudh Praveen', 'Rahul Kumar'].includes(member.name) && member.social.github && member.social.github !== '#' && (
            <SocialLink href={member.social.github} icon={GitHubIcon} title={`${member.name} on GitHub`} />
          )}
          <SocialLink href={member.social.instagram} icon={InstagramIcon} title={`${member.name} on Instagram`} />
          {member.social.portfolio && member.social.portfolio !== '#' && (
            <SocialLink href={member.social.portfolio} icon={PortfolioIcon} title={`${member.name}'s Portfolio`} />
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

const Team = () => {
  const teamMembersWithOriginalIndex = teamMembers.map((member, index) => ({
    ...member,
    originalIndex: index,
  }));

  return (
    <section id="team" className="py-24 md:py-32" style={{ backgroundColor: BG_PRIMARY_TEAM }}>
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
            style={{ color: TEXT_PRIMARY_TEAM }}
          >
            Meet Our Talented Team
          </h2>
          <p 
            className="text-lg max-w-2xl mx-auto mt-4"
            style={{ color: TEXT_SECONDARY_TEAM }}
          >
            We are a collective of passionate strategists, creative designers, and expert developers dedicated to delivering digital excellence and impactful solutions.
          </p>
          <div className="mt-6 h-1 w-24 mx-auto rounded-full" style={{backgroundColor: ACCENT_ELEGANT_TEAM, opacity: 0.5}} />
        </motion.div>
        
        <div className="w-full">
          {/* Mobile Layout (1 column) */}
          <div className="flex flex-col items-center space-y-8 sm:hidden">
            {teamMembersWithOriginalIndex.map((member) => (
              <div key={member.id} className="w-full max-w-sm">
                <TeamMemberCard member={member} index={member.originalIndex} />
              </div>
            ))}
          </div>

          {/* Tablet Layout (sm: 2 columns) */}
          <div className="hidden sm:block lg:hidden">
            <div className="flex flex-col space-y-8">
              {/* Row 1 (2 cards) */}
              <div className="flex justify-center gap-8 w-full">
                {teamMembersWithOriginalIndex.slice(0, 2).map((member) => (
                  <div key={member.id} className="w-full sm:w-1/2 max-w-sm">
                    <TeamMemberCard member={member} index={member.originalIndex} />
                  </div>
                ))}
              </div>
              {/* Row 2 (2 cards) */}
              {teamMembersWithOriginalIndex.length > 2 && (
                <div className="flex justify-center gap-8 w-full">
                  {teamMembersWithOriginalIndex.slice(2, 4).map((member) => (
                    <div key={member.id} className="w-full sm:w-1/2 max-w-sm">
                      <TeamMemberCard member={member} index={member.originalIndex} />
                    </div>
                  ))}
                </div>
              )}
              {/* Row 3 (1 card, centered) */}
              {teamMembersWithOriginalIndex.length > 4 && (
                <div className="flex justify-center gap-8 w-full">
                    {teamMembersWithOriginalIndex.slice(4, 5).map((member) => (
                    <div key={member.id} className="w-full sm:w-1/2 max-w-sm">
                        <TeamMemberCard member={member} index={member.originalIndex} />
                    </div>
                    ))}
                </div>
              )}
            </div>
          </div>

          {/* Desktop Layout (lg: 3 columns) */}
          <div className="hidden lg:block">
            <div className="flex flex-col space-y-8">
              {/* Row 1 (3 cards) */}
              <div className="flex justify-center gap-8 w-full">
                {teamMembersWithOriginalIndex.slice(0, 3).map((member) => (
                  <div key={member.id} className="w-full lg:w-1/3 max-w-sm">
                    <TeamMemberCard member={member} index={member.originalIndex} />
                  </div>
                ))}
              </div>
              {/* Row 2 (2 cards, centered) */}
              {teamMembersWithOriginalIndex.length > 3 && (
                  <div className="flex justify-center gap-8 w-full">
                  {teamMembersWithOriginalIndex.slice(3, 5).map((member) => (
                      <div key={member.id} className="w-full lg:w-1/3 max-w-sm">
                      <TeamMemberCard member={member} index={member.originalIndex} />
                      </div>
                  ))}
                  </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team; 