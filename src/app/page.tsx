import {
  AboutCyberSolution,
  AboutKidsPlay,
  ClientFeedback,
  HeroSlider,
  SectionWrapper,
  ServicesSection,
  WhyUsSection,
} from '@/components';

const Home = () => {
  return (
    <>
      <HeroSlider />
      <SectionWrapper className="flex flex-col mt-24 gap-28 min-h-800">
        <AboutCyberSolution />
        <WhyUsSection />
        <ServicesSection />
        <AboutKidsPlay />
        <ClientFeedback />
      </SectionWrapper>
    </>
  );
};
export default Home;
