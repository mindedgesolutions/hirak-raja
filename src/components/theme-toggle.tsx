'use client';

import { useTheme } from 'next-themes';
import { IoMoon, IoSunnyOutline } from 'react-icons/io5';
import { Button } from '@/components/ui/button';

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      size={'icon-sm'}
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className="hover:bg-transparent"
    >
      {theme === 'light' ? (
        <IoMoon className="text-card" size={14} />
      ) : (
        <IoSunnyOutline className="text-card" size={14} />
      )}
    </Button>
  );
}
