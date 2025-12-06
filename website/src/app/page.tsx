import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Problem from '@/components/Problem';
import Scenario from '@/components/Scenario';
import ContributionAnalysis from '@/components/ContributionAnalysis';
import PathFinder from '@/components/PathFinder';
import Products from '@/components/Products';
import Partners from '@/components/Partners';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <Scenario />
        <ContributionAnalysis />
        <PathFinder />
        <Products />
        <Partners />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
