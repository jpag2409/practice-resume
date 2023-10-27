import React, { useEffect } from 'react';
import Typed from 'typed.js';

function MultiHeadline() {
  useEffect(() => {
    const typed = new Typed(".multi-headline", {
      strings: ["Cybersecurity Analyst", "Fullstack Developer", "Mathematician", "Freelancer"],
      typeSpeed: 80,
      backSpeed: 80,
      backDelay: 1000,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <h3 id='text_animation'>
      And I'm a <span className="multi-headline"></span>
    </h3>
  );
}

export default MultiHeadline;
