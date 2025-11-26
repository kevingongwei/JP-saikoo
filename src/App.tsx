import React from 'react';
import { Header } from './Components/Header.tsx';
import { Hero } from './Components/Hero.tsx';
import { CompanyProfile } from './Components/CompanyProfile.tsx';
import { Services } from './Components/Services.tsx';
import { Strengths } from './Components/Strengths.tsx';
import { CEOProfile } from './Components/CEOProfile.tsx';
import { Footer } from './Components/Footer.tsx';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col w-full overflow-x-hidden">
      <Header />
      <main className="flex-grow">
        <section id="home">
          <Hero />
        </section>
        
        <section id="about" className="py-20 bg-white">
          <CompanyProfile />
        </section>

        <section id="services" className="py-20 bg-slate-50">
          <Services />
        </section>

        <section id="strengths" className="py-20 bg-white">
          <Strengths />
        </section>

        <section id="ceo" className="py-20 bg-slate-50">
          <CEOProfile />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;