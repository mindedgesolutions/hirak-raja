import { AboutUsSection, HeroSlider, SectionWrapper } from '@/components';

const Home = () => {
  return (
    <>
      <HeroSlider />
      {/* about us starts */}
      <SectionWrapper className="mt-20">
        <AboutUsSection />
      </SectionWrapper>
      {/* about us ends */}

      <div className="font-inter">Welcome to NextJS</div>
    </>
  );
};
export default Home;
