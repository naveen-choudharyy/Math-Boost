import React from 'react';
import MathBackground from './components/ui/MathBackground';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import FloatingCTA from './components/layout/FloatingCTA';

// Section components
import Hero from './components/sections/Hero';
import BatchStatus from './components/sections/BatchStatus';
import PainPoints from './components/sections/PainPoints';
import Timeline from './components/sections/Timeline';
import Deliverables from './components/sections/Deliverables';
import TeachingMethod from './components/sections/TeachingMethod';
import ExamSystem from './components/sections/ExamSystem';
import ChapterCoverage from './components/sections/ChapterCoverage';
import TeacherJourney from './components/sections/TeacherJourney';
import ForParents from './components/sections/ForParents';
import DemoIntro from './components/sections/DemoIntro';
import FAQ from './components/sections/FAQ';
import Contact from './components/sections/Contact';
import FinalCTA from './components/sections/FinalCTA';

export default function App() {
  return (
    <div className="min-h-screen bg-navy-950 text-slate-100 relative selection:bg-brand-blue selection:text-white">
      {/* Background Math Grids & Ambient Glows */}
      <MathBackground />

      {/* Main Content Tree */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow">
          <Hero />
          <BatchStatus />
          <PainPoints />
          <Timeline />
          <Deliverables />
          <TeachingMethod />
          <ExamSystem />
          <ChapterCoverage />
          <TeacherJourney />
          <ForParents />
          <DemoIntro />
          <FAQ />
          <Contact />
          <FinalCTA />
        </main>

        <Footer />
        <FloatingCTA />
      </div>
    </div>
  );
}
