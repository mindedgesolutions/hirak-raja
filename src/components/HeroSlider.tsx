import Image from 'next/image';
import Header from './shared/Header';

const HeroSlider = () => {
  return (
    <div className="min-h-200 bg-primary-foreground relative">
      <Image
        src="/banners/banner-1.jpg"
        alt="banner 1"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      <div className="absolute inset-0 bg-card-foreground/70" />

      <div className="relative z-20">
        <Header />
      </div>
    </div>
  );
};
export default HeroSlider;
