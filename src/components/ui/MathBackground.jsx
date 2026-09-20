import React from 'react';

export default function MathBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none bg-surface-50" aria-hidden="true">
      {/* Dual Color Animated Ambient Orbs */}
      <div className="absolute -top-32 -left-32 w-[550px] h-[550px] rounded-full bg-gradient-to-br from-sky-300/35 to-blue-400/25 blur-[90px] animate-float-slow"></div>
      <div className="absolute top-1/3 -right-28 w-[500px] h-[500px] rounded-full bg-gradient-to-bl from-indigo-300/30 to-violet-300/20 blur-[90px] animate-float-reverse"></div>
      <div className="absolute -bottom-36 left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-blue-300/25 to-sky-200/35 blur-[100px] animate-float-slow"></div>

      {/* Subtle Coordinate Grid Layer */}
      <div className="absolute inset-0 bg-math-grid opacity-65"></div>

      {/* Subtle Math Formulas / Symbols in Low Opacity */}
      <div className="absolute top-28 left-10 text-slate-900/[0.04] text-3xl font-mono hidden md:block">
        ax² + bx + c = 0
      </div>
      <div className="absolute top-1/2 right-12 text-slate-900/[0.04] text-3xl font-mono hidden lg:block">
        sin²θ + cos²θ = 1
      </div>
      <div className="absolute bottom-1/3 left-16 text-slate-900/[0.04] text-3xl font-mono hidden lg:block">
        Sₙ = n/2[2a + (n-1)d]
      </div>
      <div className="absolute bottom-20 right-20 text-slate-900/[0.04] text-2xl font-mono hidden md:block">
        D = b² - 4ac
      </div>
    </div>
  );
}
