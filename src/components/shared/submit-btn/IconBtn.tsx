'use client';

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

const IconBtn = ({ icon: Icon }: { icon: React.ReactNode }) => {
  return (
    <main className={cn(styles.stage)}>
      <motion.button
        type="button"
        initial="rest"
        whileHover="active"
        className={cn(
          'cursor-pointer text-sm capitalize tracking-wider font-space-mono bg-section-title hover:bg-section-title/90 text-card',
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
            {Icon}
          </motion.span>

          <motion.span
            className={cn(styles.labelCopy, styles.labelCopyIncoming)}
            variants={incomingVariants}
            transition={transition}
          >
            {Icon}
          </motion.span>
        </span>
      </motion.button>
    </main>
  );
};
export default IconBtn;
