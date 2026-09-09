import { cn } from '@/lib/utils';

const TextWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        'text-base text-muted-foreground font-inter tracking-wider leading-relaxed',
        className,
      )}
    >
      {children}
    </div>
  );
};
export default TextWrapper;
