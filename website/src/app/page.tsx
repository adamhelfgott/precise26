import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Problem from '@/components/Problem';
import Advocate from '@/components/Advocate';
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
        <Advocate />
        <Products />
        <Partners />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
