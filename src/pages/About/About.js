// src/pages/About.js
import React from 'react';
import Section from '../../components/Section';
import FadeInSection from '../../components/FadeInSection';

function About() {
  return (
    <div className="about">
      <Section title="Why We Exist">
        <FadeInSection>
          <p>SOUTH AFRICA'S EDUCATION SYSTEM IS IN CRISIS:...</p>
        </FadeInSection>
      </Section>
      <Section title="Our Story" className="bg-light">
        <FadeInSection>
          <p>IkamvaYouth was founded in 2003 by Joy Olivier and Makhosi Gogwana, who travelled very different paths to get to the same job, as researchers at the HSRC...</p>
        </FadeInSection>
      </Section>
      {/* Add more sections as needed */}
    </div>
  );
}

export default About;