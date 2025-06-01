'use client';

import { motion, AnimatePresence, Target, Transition } from 'framer-motion';
import { useEffect, useState } from 'react';

export function AnimationProvider({ 
  children,
  initial = { opacity: 0, y: 20 },
  animate = { opacity: 1, y: 0 },
  transition = { duration: 0.5 },
  className = "",
}: {
  children: React.ReactNode;
  initial?: Target;
  animate?: Target;
  transition?: Transition;
  className?: string;
}) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={initial}
      animate={animate}
      transition={transition}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function AnimatedList({ 
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div layout className={className}>
      <AnimatePresence>{children}</AnimatePresence>
    </motion.div>
  );
} 