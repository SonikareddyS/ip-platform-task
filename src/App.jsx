import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyIPStore from './components/WhyIPStore';
import IPSolutions from './components/IPSolutions';
import HowItWorks from './components/HowItWorks';
import Audience from './components/Audience';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import Modal from './components/Modal';

export default function App() {
  const [modalState, setModalState] = useState({
    isOpen: false,
    type: 'get-started', // 'get-started' | 'support' | 'legal'
    initialSolution: 'ipv4',
  });

  const openGetStarted = (solution = 'ipv4') => {
    setModalState({
      isOpen: true,
      type: 'get-started',
      initialSolution: solution,
    });
  };

  const openSupport = () => {
    setModalState({
      isOpen: true,
      type: 'support',
      initialSolution: 'ipv4',
    });
  };

  const openLegal = () => {
    setModalState({
      isOpen: true,
      type: 'legal',
      initialSolution: 'ipv4',
    });
  };

  const closeModal = () => {
    setModalState((prev) => ({ ...prev, isOpen: false }));
  };

  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const topOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-emerald-100 selection:text-emerald-950">
      {/* 1. Navigation Bar */}
      <Navbar 
        onOpenGetStarted={() => openGetStarted('ipv4')} 
        onOpenSupport={openSupport} 
      />

      <main className="flex-grow">
        {/* 2. Hero Section */}
        <Hero 
          onGetStarted={() => openGetStarted('ipv4')}
          onExploreFeatures={() => scrollToSection('why-ip-store')}
        />

        {/* 3. Why IP Store (Features & Value Proposition) */}
        <WhyIPStore 
          onLearnMore={() => scrollToSection('how-it-works')}
        />

        {/* 4. IP Solutions (IPv4 & IPv6 Cards) */}
        <IPSolutions 
          onSelectSolution={(solution) => openGetStarted(solution)}
        />

        {/* 5. How It Works (Five-Step Process) */}
        <HowItWorks 
          onGetStarted={() => openGetStarted('ipv4')}
        />

        {/* 6. Who Can Use IP Store (Audience Cards) */}
        <Audience 
          onExploreSetup={() => scrollToSection('ip-solutions')}
        />

        {/* 7. FAQ (Interactive Accordion) */}
        <FAQ 
          onOpenSupport={openSupport}
        />

        {/* 8. Final Call to Action */}
        <FinalCTA 
          onGetStarted={() => openGetStarted('ipv4')}
          onContactSupport={openSupport}
        />
      </main>

      {/* 9. Footer */}
      <Footer 
        onOpenSupport={openSupport}
        onOpenLegal={openLegal}
      />

      {/* Reusable Functional Modal */}
      <Modal 
        isOpen={modalState.isOpen}
        type={modalState.type}
        initialSolution={modalState.initialSolution}
        onClose={closeModal}
      />
    </div>
  );
}
