import React from 'react';
import MathBackground from './components/ui/MathBackground';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import FloatingCTA from './components/layout/FloatingCTA';

// Streamlined Section components
import Hero from './components/sections/Hero';
import BatchStatus from './components/sections/BatchStatus';
import Timeline from './components/sections/Timeline';
import TeachingMethod from './components/sections/TeachingMethod';
import Deliverables from './components/sections/Deliverables';
import ChapterCoverage from './components/sections/ChapterCoverage';
import TeacherJourney from './components/sections/TeacherJourney';
import FAQ from './components/sections/FAQ';
import FinalCTA from './components/sections/FinalCTA';

export default function App() {
  return (
    <div className="min-h-screen text-slate-900 relative selection:bg-blue-600 selection:text-white">
      {/* Dual Color Animated White Glass Background */}
      <MathBackground />

      {/* Main Content Layout */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow">
          <Hero />
          <BatchStatus />
          <Timeline />
          <TeachingMethod />
          <Deliverables />
          <ChapterCoverage />
          <TeacherJourney />
          <FAQ />
          <FinalCTA />
        </main>

        <Footer />
        <FloatingCTA />
      </div>
    </div>
  );
}
