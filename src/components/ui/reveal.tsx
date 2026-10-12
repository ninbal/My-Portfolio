'use client';
import { motion, useReducedMotion } from 'motion/react';
export function Reveal({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const reduce = useReducedMotion();
  return <motion.div initial={false} whileInView={reduce ? undefined : { y: [14, 0], opacity: [0.75, 1] }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.5 }} className={className}>{children}</motion.div>;
}
