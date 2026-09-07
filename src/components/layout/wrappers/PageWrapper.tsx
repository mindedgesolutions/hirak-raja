import { cn } from '@/lib/utils';

const PageWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn('mx-auto w-full max-w-360', className)}>{children}</div>
  );
};
export default PageWrapper;
