
import React, { useState, useEffect } from 'react';

const PHRASES = [
  "you witness Anti-Black profiling?",
  "someone dismisses Anti-Black racism?",
  "a friend makes an Anti-Black joke?",
  "you see Anti-Black hate speech?",
  "silence feels like complicity?"
];

export const TypewriterSection: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = PHRASES[phraseIndex];
    
    // Timing configuration (ms)
    const typeSpeed = 60; 
    const deleteSpeed = 30;
    const pauseAfterPhrase = 2000;
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (displayText.length < currentPhrase.length) {
          setDisplayText(currentPhrase.substring(0, displayText.length + 1));
        } else {
          // Finished typing, wait then delete
          setTimeout(() => setIsDeleting(true), pauseAfterPhrase);
        }
      } else {
        // Deleting
        if (displayText.length > 0) {
          setDisplayText(displayText.substring(0, displayText.length - 1));
        } else {
          // Finished deleting, move to next phrase
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % PHRASES.length);
        }
      }
    }, isDeleting ? deleteSpeed : typeSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, phraseIndex]);

  return (
    <section id="typewriter-mission" className="py-20 md:py-32 bg-white flex flex-col items-center justify-center text-center px-6 border-b border-gray-100">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif font-bold text-black mb-6 md:mb-10 tracking-tight leading-tight">
          What do you say when ...
        </h2>
        <div className="min-h-[100px] md:min-h-[120px] flex items-start md:items-center justify-center">
          <p className="text-xl sm:text-2xl md:text-4xl text-gray-500 font-light flex items-center max-w-sm sm:max-w-none leading-snug">
            {displayText}
            <span className="ml-1 w-0.5 h-7 md:h-12 bg-black animate-blink flex-shrink-0"></span>
          </p>
        </div>
      </div>
    </section>
  );
};
