// src/components/Section.js
import React from 'react';

function Section({ title, children, className = '' }) {
  return (
    <section className={`custom-section ${className}`}>
      <div className="container">
        {title && <h2 className="section-title">{title}</h2>}
        {children}
      </div>
    </section>
  );
}

export default Section;