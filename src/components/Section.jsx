import React from 'react';

export function Section({ children, className = "" }) {
  return (
    <section className={`py-32 px-6 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
}
