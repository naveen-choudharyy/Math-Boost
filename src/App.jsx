import React from 'react';
import MathBackground from './components/ui/MathBackground';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import FloatingCTA from './components/layout/FloatingCTA';

// Section components in clean, logical order
import Hero from './components/sections/Hero';
import ProfileSummary from './components/sections/ProfileSummary';
import ProgramPlan from './components/sections/ProgramPlan';
import TeachingMethod from './components/sections/TeachingMethod';
import ChapterCoverage from './components/sections/ChapterCoverage';
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
          {/* 1. Introduction */}
          <Hero />

          {/* 2. Profile Summary with Big Photo on Left & All Details on Right */}
          <ProfileSummary />

          {/* 3. Batch Details & 3-Month Plan */}
          <ProgramPlan />

          {/* 4. Teaching Method & Key Inclusions */}
          <TeachingMethod />

          {/* 5. 14-Chapter Syllabus Overview */}
          <ChapterCoverage />

          {/* 6. FAQ Accordion */}
          <FAQ />

          {/* 7. Final Clean WhatsApp Conversion */}
          <FinalCTA />
        </main>

        <Footer />
        <FloatingCTA />
      </div>
    </div>
  );
}
