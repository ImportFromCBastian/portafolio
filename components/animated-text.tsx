'use client'

import { AnimatePresence, motion } from 'framer-motion'

const containerVariants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.02,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
}

const lineVariants = {
  initial: {
    filter: 'blur(12px)',
    y: -15,
    opacity: 0,
  },
  animate: {
    filter: 'blur(0px)',
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
  exit: {
    filter: 'blur(12px)',
    y: 15,
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
}

type AnimatedTextProps = {
  text: string
  animateKey?: string
  className?: string
  lineClassName?: string
  as?: 'span' | 'p' | 'h1' | 'h2' | 'div'
}

export function AnimatedText({
  text,
  animateKey,
  className,
  lineClassName,
}: AnimatedTextProps) {
  const lines = text.split('\n')

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.span
        key={animateKey ?? text}
        className={className}
        variants={containerVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {lines.map((line) => (
          <motion.span
            key={`${animateKey ?? text}-${line}-${line.length}`}
            className={lineClassName ?? 'block'}
            variants={lineVariants}
          >
            {line || '\u00a0'}
          </motion.span>
        ))}
      </motion.span>
    </AnimatePresence>
  )
}
