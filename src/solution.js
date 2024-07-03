import React from 'react';
import './styles.css'; // Adjust the path to your CSS file if needed

const TestimonialSection = () => {
  return (
    <section className="bg-custom-image py-8 lg:py-16">
      <div className="max-w-screen-xl px-4 mx-auto text-center text-content">
        <figure className="max-w-screen-md mx-auto">
          <blockquote>
            <p className="text-3xl lg:text-4xl font-bold text-white dark:text-white font-sans leading-relaxed text-shadow">
              "We help Campuses achieve more with powerful and customizable solutions for
              every aspect of their university life."
            </p>
          </blockquote>
        </figure>
      </div>
    </section>
  );
};

export default TestimonialSection;
