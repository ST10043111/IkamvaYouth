// src/components/FadeInSection.js
import React from 'react';
import { useSpring, animated } from 'react-spring';

function FadeInSection({ children }) {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 }
  });

  return <animated.div style={props}>{children}</animated.div>;
}

export default FadeInSection;