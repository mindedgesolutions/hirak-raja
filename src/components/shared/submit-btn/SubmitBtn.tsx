'use client';

import { ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';
import styles from './SubmitBtn.module.css';

const outgoingVariants = {
  rest: { transform: 'translateY(0%)' },
  active: { transform: 'translateY(100%)' },
};

const incomingVariants = {
  rest: { transform: 'translateY(-100%)' },
  active: { transform: 'translateY(0%)' },
};

const transition = {
  duration: 0.3,
  ease: [0.338, 0.015, 0.395, 0.959] as const,
};

type SubmitBtnProps = {
  label: string;
  icon?: React.ReactNode | undefined;
};

export default function SubmitBtn({ label, icon: Icon }: SubmitBtnProps) {
  return (
    <main className={styles.stage}>
      <motion.button
        type="button"
        initial="rest"
        whileHover="active"
        className={cn(
          'cursor-pointer text-sm capitalize tracking-wider font-space-mono bg-primary hover:bg-primary/90 text-card',
          'px-6 py-4',
          'inline-flex items-center gap-2',
        )}
      >
        <span className={styles.labelWindow}>
          <motion.span
            className={styles.labelCopy}
            variants={outgoingVariants}
            transition={transition}
          >
            {label}
          </motion.span>

          <motion.span
            className={cn(styles.labelCopy, styles.labelCopyIncoming)}
            variants={incomingVariants}
            transition={transition}
          >
            {label}
          </motion.span>
        </span>

        {Icon ?? <ChevronRight size={18} strokeWidth={2} aria-hidden="true" />}
      </motion.button>
    </main>
  );
}
