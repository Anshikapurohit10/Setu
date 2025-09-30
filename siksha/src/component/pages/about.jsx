import React from "react";
import "./about.css"; 
const About = () => {
  return (
    <section className="section about">
      <div className="container about-grid">
        <div>
          <h2>What is Trisetu?</h2>
          <p>
            Trisetu is a web + mobile platform that centralizes student
            achievements, academics, and wellness into one place. With
            AI-powered dashboards, verified records, and alumni mentorship, we
            simplify growth for students and compliance for institutions.
          </p>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop"
            alt="about"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
