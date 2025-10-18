'use client';
import { motion } from 'framer-motion';
import { useMantineColorScheme } from '@mantine/core';

interface SectionBackgroundProps {
  sectionId: string;
  variant?: 'primary' | 'secondary';
}

export function SectionBackground({ sectionId, variant = 'primary' }: SectionBackgroundProps) {
  const { colorScheme } = useMantineColorScheme();
  
  const isSecondary = variant === 'secondary';
  const baseOffset = sectionId === 'home' ? 0 : 
                   sectionId === 'about' ? 100 : 
                   sectionId === 'skills' ? 200 : 
                   sectionId === 'projects' ? 300 : 400;

  return (
    <>
      {/* Grid Pattern */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: colorScheme === 'dark'
            ? `linear-gradient(rgba(168, 85, 247, 0.02) 1px, transparent 1px),
               linear-gradient(90deg, rgba(168, 85, 247, 0.02) 1px, transparent 1px)`
            : `linear-gradient(rgba(168, 85, 247, 0.015) 1px, transparent 1px),
               linear-gradient(90deg, rgba(168, 85, 247, 0.015) 1px, transparent 1px)`,
          backgroundSize: '30px 30px',
          opacity: 0.3,
          zIndex: -1,
        }}
      />

      {/* Floating Bubbles */}
      {[
        { size: 80, top: `${15 + baseOffset}%`, left: '2%', delay: 0, color: isSecondary ? 'cyan' : 'violet' },
        { size: 60, top: `${70 + baseOffset}%`, left: '4%', delay: 2, color: isSecondary ? 'violet' : 'cyan' },
        { size: 90, top: `${25 + baseOffset}%`, right: '2%', delay: 1, color: isSecondary ? 'violet' : 'cyan' },
        { size: 50, top: `${80 + baseOffset}%`, right: '4%', delay: 3, color: isSecondary ? 'cyan' : 'violet' },
      ].map((bubble, index) => (
        <motion.div
          key={`${sectionId}-bubble-${index}`}
          style={{
            position: 'absolute',
            [bubble.left ? 'left' : 'right']: bubble.left || bubble.right,
            top: bubble.top,
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            background: colorScheme === 'dark'
              ? `radial-gradient(circle, rgba(${bubble.color === 'violet' ? '168, 85, 247' : '6, 182, 212'}, 0.08), transparent 70%)`
              : `radial-gradient(circle, rgba(${bubble.color === 'violet' ? '168, 85, 247' : '6, 182, 212'}, 0.04), transparent 70%)`,
            borderRadius: '50%',
            filter: 'blur(15px)',
            zIndex: -1,
          }}
          animate={{
            y: [0, -15, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 5 + bubble.delay,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: bubble.delay,
          }}
        />
      ))}

      {/* Geometric Shapes */}
      {[
        { size: 40, top: `${20 + baseOffset}%`, left: '6%', delay: 0, shape: 'circle' },
        { size: 30, top: `${60 + baseOffset}%`, left: '1%', delay: 2, shape: 'square' },
        { size: 50, top: `${40 + baseOffset}%`, right: '3%', delay: 1, shape: 'triangle' },
        { size: 35, top: `${75 + baseOffset}%`, right: '8%', delay: 3, shape: 'square' },
      ].map((shape, index) => (
        <motion.div
          key={`${sectionId}-shape-${index}`}
          style={{
            position: 'absolute',
            [shape.left ? 'left' : 'right']: shape.left || shape.right,
            top: shape.top,
            width: `${shape.size}px`,
            height: `${shape.size}px`,
            background: colorScheme === 'dark'
              ? 'linear-gradient(135deg, rgba(168, 85, 247, 0.06), rgba(6, 182, 212, 0.06))'
              : 'linear-gradient(135deg, rgba(168, 85, 247, 0.03), rgba(6, 182, 212, 0.03))',
            border: `1px solid ${colorScheme === 'dark' 
              ? 'rgba(168, 85, 247, 0.1)' 
              : 'rgba(168, 85, 247, 0.05)'}`,
            borderRadius: shape.shape === 'circle' ? '50%' : shape.shape === 'square' ? '8px' : '0',
            clipPath: shape.shape === 'triangle' ? 'polygon(50% 0%, 0% 100%, 100% 100%)' : 'none',
            zIndex: -1,
          }}
          animate={{
            rotate: [0, 360],
            y: [0, -10, 0],
          }}
          transition={{
            rotate: { duration: 15, repeat: Infinity, ease: 'linear' },
            y: { duration: 3 + shape.delay, repeat: Infinity, ease: 'easeInOut', delay: shape.delay },
          }}
        />
      ))}

      {/* Floating Dots */}
      {Array.from({ length: 4 }).map((_, index) => (
        <motion.div
          key={`${sectionId}-dot-${index}`}
          style={{
            position: 'absolute',
            left: `${8 + (index % 2) * 80}%`,
            top: `${30 + Math.floor(index / 2) * 40 + baseOffset}%`,
            width: '4px',
            height: '4px',
            borderRadius: '50%',
            background: colorScheme === 'dark'
              ? 'rgba(168, 85, 247, 0.3)'
              : 'rgba(168, 85, 247, 0.2)',
            zIndex: -1,
          }}
          animate={{
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            delay: index * 0.4,
            ease: 'easeInOut',
          }}
        />
      ))}
    </>
  );
}