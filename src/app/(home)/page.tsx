import {
    FAQ,
    Featured,
    FinancialFuture,
    FinancilaFreedom,
    HeroSection,
    IntroSection,
    JoinSection,
    OffersSection,
  } from '@/components';
  
  export default function home() {
    return (
      <main>
        <HeroSection />
        <Featured />
        <OffersSection />
        <FinancilaFreedom />
        <FinancialFuture />
        <IntroSection />
        <JoinSection />
        <FAQ />
      </main>
    );
  }
  