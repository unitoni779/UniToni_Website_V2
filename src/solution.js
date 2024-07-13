// TestimonialSection.jsx
import React from 'react';
import './styles.css'; // Adjust the path to your CSS file if needed

const TestimonialSection = () => {
  return (
    <section className="bg-custom-image py-8 lg:py-16 font-figtree">
      <div className="max-w-screen-xl px-4 mx-auto text-center text-content">
        <figure className="max-w-screen-md mx-auto">
          <blockquote>
            <p className="text-3xl lg:text-4xl font-bold text-white dark:text-white font-sans leading-relaxed font-figtree ">
            <span className="highlight font-figtree" style={{color: "#112d42" }}> "We help Campuses achieve more with </span>  <span className="highlight2 font-figtree"> powerful and 
            customizable solutions for  </span><span className="highlight font-figtree" style={{color: "#112d42" }}> every aspect of their 
             university life."</span>
            </p>
          </blockquote>
        </figure>
      </div>
    </section>
  );
};

export default TestimonialSection;
