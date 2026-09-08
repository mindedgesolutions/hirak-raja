import { HeroSlider, PageWrapper } from '@/components';

const Home = () => {
  return (
    <>
      <HeroSlider />
      <PageWrapper className="min-h-400">
        <div className="font-manrope text-3xl">This is a Heading</div>
        <div className="font-inter">Welcome to NextJS</div>
      </PageWrapper>
    </>
  );
};
export default Home;
