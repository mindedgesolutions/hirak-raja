import Image from 'next/image';
import Link from 'next/link';
import { SectionTitleWrapper, SubmitBtn, TextWrapper } from '@/components';
import { webIcons } from '@/constants';

const AboutUsSection = () => {
  return (
    <section id="about-us" className="flex gap-8">
      <div className="flex flex-col gap-12 p-4">
        <SectionTitleWrapper
          prefix="about cyber solution"
          title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
            nihil!"
        />
        <TextWrapper>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
          consequatur asperiores unde maxime perferendis ipsum aliquid facilis
          vero quasi pariatur, accusamus, corrupti, soluta impedit voluptatem
          quaerat. Illo cupiditate eos nam?
        </TextWrapper>
        <div className="grid grid-cols-2 gap-x-16 gap-y-4">
          <div className="flex justify-start items-center gap-4">
            <webIcons.check className="text-section-title w-4 h-4" />
            <span className="text-section-desc font-semibold text-base font-inter">
              Lorem, ipsum dolor
            </span>
          </div>
          <div className="flex justify-start items-center gap-4">
            <webIcons.check className="text-section-title w-4 h-4" />
            <span className="text-section-desc font-semibold text-base font-inter">
              Lorem ipsum dolor sit
            </span>
          </div>
          <div className="flex justify-start items-center gap-4">
            <webIcons.check className="text-section-title w-4 h-4" />
            <span className="text-section-desc font-semibold text-base font-inter">
              Quos dignissimos maiores
            </span>
          </div>
          <div className="flex justify-start items-center gap-4">
            <webIcons.check className="text-section-title w-4 h-4" />
            <span className="text-section-desc font-semibold text-base font-inter">
              Cupiditate temporibus
            </span>
          </div>
        </div>
        <div className="flex justify-start items-center -mt-4 gap-4">
          <span className="bg-section-title p-6">
            <webIcons.phone className="text-card w-8 h-8" />
          </span>
          <div className="flex flex-col gap-2">
            <span className="font-inter text-muted-foreground font-medium">
              Call to ask any question
            </span>
            <span className="font-space-mono text-section-title text-2xl font-bold">
              +91-9876543210
            </span>
          </div>
        </div>
        <Link href={`/products/cyber-solution`}>
          <SubmitBtn label="Read More" />
        </Link>
      </div>
      <div className="relative aspect-video w-150 h-150">
        <Image
          src={`/banners/banner-1.jpg`}
          alt="Cyber solutions"
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
};
export default AboutUsSection;
