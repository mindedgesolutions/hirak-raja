import {
  AboutCyberSolution,
  HeroSlider,
  SectionWrapper,
  ServicesSection,
  WhyUsSection,
} from '@/components';

const Home = () => {
  return (
    <>
      <HeroSlider />
      <SectionWrapper className="flex flex-col mt-24 gap-28 min-h-600">
        <AboutCyberSolution />
        <WhyUsSection />
        <ServicesSection />
      </SectionWrapper>
    </>
  );
};
export default Home;
