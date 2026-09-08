'use client';

import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import TypewriterText from '../smoothui/typewriter-text';

const firstText = 'Lorem ipsum dolor sit';
const firstSpeed = 50;

const images = [
  { id: 'banner-1', path: '/banners/banner-1.jpg' },
  { id: 'banner-2', path: '/banners/banner-2.jpg' },
  { id: 'banner-3', path: '/banners/banner-3.jpg' },
];

const HeroSection = () => {
  const textDelay = firstText.length * firstSpeed;
  const [show, setShow] = useState(false);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.plugins().autoplay?.play();
  }, [emblaApi]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(true);
    }, textDelay);

    return () => clearTimeout(timeout);
  }, [textDelay]);

  return (
    <div className="w-full flex bg-card/5 mt-20">
      <div className="w-1/2 cursor-grab relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {images.map((image) => (
              <div key={image.id} className="min-w-0 flex-[0_0_100%]">
                <div className="relative aspect-video w-full h-100">
                  <Image
                    src={image.path}
                    alt={image.id}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute inset-0 bg-card-foreground/20" />
      </div>

      <div className="flex w-1/2 min-h-50 flex-col items-center justify-center space-y-8">
        <div className="text-left px-8">
          <div className="mb-4 text-card font-bold font-inter text-2xl tracking-wider leading-relaxed">
            <TypewriterText speed={firstSpeed}>{firstText}</TypewriterText>
          </div>
          <div className="space-y-8">
            {show && (
              <div className="text-base text-card font-inter tracking-wider leading-relaxed">
                <TypewriterText speed={50}>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Magnam praesentium sed eaque neque
                </TypewriterText>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroSection;
