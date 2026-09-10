import { cn } from '@/lib/utils';

type SectionTitleProps = {
  prefix?: string;
  title: string;
  className?: string;
  prefixClass?: string;
  titleClass?: string;
};

const SectionTitleWrapper = ({
  prefix,
  title,
  className,
  prefixClass,
  titleClass,
}: SectionTitleProps) => {
  return (
    <div className={cn('flex flex-col gap-2', className)}>
      {prefix && (
        <header
          className={cn(
            'font-space-mono uppercase text-section-title text-lg font-extrabold tracking-wider',
            prefixClass,
          )}
        >
          {prefix}
        </header>
      )}
      <header
        className={cn(
          'font-manrope text-primary text-3xl font-extrabold leading-normal',
          titleClass,
        )}
      >
        {title}
      </header>
    </div>
  );
};
export default SectionTitleWrapper;
