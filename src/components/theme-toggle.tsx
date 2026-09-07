'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { IoMoon, IoSunnyOutline } from 'react-icons/io5';
import { Button } from '@/components/ui/button';

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button
        size="icon-sm"
        className="hover:bg-transparent"
        aria-label="Toggle theme"
      />
    );
  }

  return (
    <Button
      size={'icon-sm'}
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className="hover:bg-transparent"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <IoMoon className="text-card" size={14} />
      ) : (
        <IoSunnyOutline className="text-card" size={14} />
      )}
    </Button>
  );
}
