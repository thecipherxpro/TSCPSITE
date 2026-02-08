import { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AddictionTreatmentSection from './components/AddictionTreatmentSection';
import MentalHealthSection from './components/MentalHealthSection';
import AboutSection from './components/AboutSection';
import CTASection from './components/CTASection';
import SkillsSection from './components/SkillsSection';
import CaseStudySection from './components/CaseStudySection';
import FAQSection from './components/TestimonialsSection';
import NewsSection from './components/NewsSection';
import AppointmentSection from './components/AppointmentSection';
import Footer from './components/Footer';

export default function HomePage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header scrolled={scrolled} />
      <main>
        <HeroSection />
        <AddictionTreatmentSection />
        <MentalHealthSection />
        <AboutSection />
        <CTASection />
        <SkillsSection />
        <CaseStudySection />
        <FAQSection />
        <NewsSection />
        <AppointmentSection />
      </main>
      <Footer />
    </div>
  );
}
