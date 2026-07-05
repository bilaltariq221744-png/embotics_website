import Hero from '../components/sections/Hero';
import ProductShowcase from '../components/sections/ProductShowcase';
import ImpactMetrics from '../components/sections/ImpactMetrics';
import EngineeringPreview from '../components/sections/EngineeringPreview';
import CTASection from '../components/sections/CTASection';

const Home = () => {
  return (
    <>
      <Hero />
      <ProductShowcase />
      <ImpactMetrics />
      <EngineeringPreview />
      <CTASection />

    </>
  );
};

export default Home;