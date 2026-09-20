import React from 'react';

export default function MathBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none" aria-hidden="true">
      {/* Subtle Coordinate Grid Layer */}
      <div className="absolute inset-0 bg-math-grid opacity-60"></div>

      {/* Ambient Blue Radial Glows */}
      <div className="absolute -top-40 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/3 -right-20 w-80 h-80 bg-blue-500/8 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl"></div>

      {/* Subtle Math Formulas / Symbols in Low Opacity */}
      <div className="absolute top-24 left-8 text-blue-400/10 text-4xl font-mono hidden md:block">
        ax² + bx + c = 0
      </div>
      <div className="absolute top-1/2 right-12 text-blue-400/10 text-3xl font-mono hidden lg:block">
        sin²θ + cos²θ = 1
      </div>
      <div className="absolute bottom-1/3 left-16 text-blue-400/10 text-3xl font-mono hidden lg:block">
        Sₙ = n/2[2a + (n-1)d]
      </div>
      <div className="absolute bottom-16 right-24 text-blue-400/10 text-3xl font-mono hidden md:block">
        D = b² - 4ac
      </div>
    </div>
  );
}
