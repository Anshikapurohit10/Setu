// import React, { useState, useEffect } from "react"; 
// import {Link, useNavigate } from "react-router-dom"; 
// import "./home.css";

// const Home = () => {
  
//     const navigate = useNavigate();
//   const slides = [
//     {
//       bg: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1600&auto=format&fit=crop",
//       img: "https://images.unsplash.com/photo-1555949963-aa79dcee981d?q=80&w=800&auto=format&fit=crop",
//       heading: "Smart Student Hub",
//       text: "A verified ecosystem for students, faculty & institutions",
//     },
//     {
//       bg: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop",
//       img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
//       heading: "Smart Student Hub",
//       text: "A verified ecosystem for students, faculty & institutions",
//     },
//   ];

//   const [index, setIndex] = useState(0);
// useEffect(() => {
//     const timer = setInterval(() => {
//       setIndex((prev) => (prev + 1) % slides.length);
//     }, 4000);
//     return () => clearInterval(timer);
//   }, [slides.length]);

 
//   return (
//     <>
//       {/* HEADER */}
//       <header className="site-header">
//         <div className="container header-inner">
//           <div className="logo">
//             <img src="/logo2.jpg" alt="logo" />
//             <span>
//               <h1>Trisetu</h1>
//             </span>
//           </div>
//           <nav className="nav">
//            <Link to="/">Home</Link>
//   <Link to="/about">About</Link>
//   <Link to="/features">Features</Link>

//   <Link to="/contact">Contact</Link>
//              {/* 👇 Buttons to navigate */}
//             <button className="btn ghost" onClick={() => navigate("/login")}>
//               Login
//             </button>
//             <button className="btn primary" onClick={() => navigate("/login")}>
//               Sign Up
//             </button>
          
//           </nav>
//         </div>
//       </header>

//       {/* HERO */}
//       <section id="home" className="hero">
//         <div className="carousel">
//           {slides.map((s, i) => (
//             <div
//               key={i}
//               className="slide"
//               style={{
//                 backgroundImage: `url(${s.bg})`,
//                 opacity: index === i ? 1 : 0,
//                 transition: "opacity 0.6s ease",
//               }}
//             >
//               <div className="hero-inner container">
//                 <div className="hero-copy">
//                   <h1>{s.heading}</h1>
//                   <p className="lead">{s.text}</p>
//                   <div className="cta-row">
//                     <a className="btn primary" href="#features">
//                       Explore Dashboard
//                     </a>
//                     <a className="btn ghost" href="#portfolio">
//                       Build Your Portfolio
//                     </a>
//                   </div>
//                 </div>
//                 <div className="hero-art">
//                   <img src={s.img} alt="illustration" />
//                 </div>
//               </div>
//             </div>
//           ))}
//           <div className="dots">
//             {slides.map((_, i) => (
//               <button
//                 key={i}
//                 className={i === index ? "active" : ""}
//                 onClick={() => setIndex(i)}
//               />
//             ))}
//           </div>
//         </div>
//       </section>

      

//       {/* ALUMNI */}
//       <section id="alumni" className="section alumni">
//         <div className="container">
//           <h2>Connect with Alumni</h2>
//           <ul className="alumni-list">
//             <li>Searchable alumni directory</li>
//             <li>Verified profiles with skills & experience</li>
//             <li>Chat & mentorship requests</li>
//             <li>Domain-specific group discussions</li>
//           </ul>
//           <img
//             className="alumni-visual"
//             src="Screenshot 2025-09-19 163935.png"
//             alt="alumni"
//           />
//         </div>
//       </section>

//       {/* WELLNESS */}
//       <section id="wellness" className="section wellness">
//         <div className="container">
//           <h2>Beyond Academics</h2>
//           <div className="well-grid">
//             <div className="well-card">
//               <h3>Wellness Tracking</h3>
//               <p>
//                 Track participation in yoga, counselling sessions, workshops,
//                 and other wellness activities
//               </p>
//             </div>
//             <div className="well-card">
//               <h3>Wellness Analytics</h3>
//               <p>
//                 Heatmaps and insights showing the balance between academics,
//                 extracurriculars, and wellness
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* GAMIFICATION */}
//       <section id="gamification" className="section gamification">
//         <div className="container">
//           <h2>Engage & Compete</h2>
//           <div className="game-grid">
//             <div className="game-card">
//               <h3>Progress Tracker</h3>
//               <p>
//                 Parents track progress, governments plan better, employers trust
//                 verified portfolios
//               </p>
//             </div>
//             <div className="game-card">
//               <h3>Leaderboards & Rankings</h3>
//               <p>
//                 Track class rank, skill rank, and performance with motivating
//                 leaderboards
//               </p>
//             </div>
//             <div className="game-card">
//               <h3>Badges & Gamification</h3>
//               <p>
//                 Encourage participation through skill-based badges and digital
//                 recognitions
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* IMPACT */}
//       <section id="impact" className="section impact">
//         <div className="container">
//           <h2>Why Choose Trisetu?</h2>
//           <div className="impact-grid">
//             <div>🌱 <strong>For Students:</strong> career-ready portfolios, mentorship, growth</div>
//             <div>🏫 <strong>For Institutions:</strong> hassle-free accreditation, real-time analytics</div>
//             <div>🌍 <strong>For Society:</strong> inclusive, digital, NEP 2020 aligned ecosystem</div>
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section id="contact" className="section cta-section">
//         <div className="container">
//           <h2>Ready to Experience Smart Growth?</h2>
//           <div className="cta-row">
//             <a className="btn primary" href="#">
//               Get Started Now
//             </a>
//             <a className="btn ghost" href="#">
//               Request a Demo
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* FOOTER */}
//       <footer style={{ backgroundColor: "#fefefe", color: "#090808", padding: "40px 0" }}>
//         <div style={{ maxWidth: "1200px", margin: "auto", display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
//           <div style={{ flex: 1, minWidth: "250px", marginBottom: "20px" }}>
//             <h3>Contact Me</h3>
//             <p>
//               Email: <a href="mailto:xxxxxxxxx@gmail.com" style={{ color: "#0a0808" }}>xxxxxxxxx@gmail.com</a>
//             </p>
//             <p>Location: India</p>
//           </div>
//           <div style={{ flex: 1, minWidth: "250px", marginBottom: "20px" }}>
//             <h3>Quick Links</h3>
//             <ul style={{ listStyle: "none", padding: 0 }}>
//               <li><a href="/home" style={{ color: "#080404", textDecoration: "none" }}>Home</a></li>
//               <li><a href="/about" style={{ color: "#0c0808", textDecoration: "none" }}>About</a></li>
//               <li><a href="/enquiry" style={{ color: "#0b0707", textDecoration: "none" }}>Enquiry</a></li>
//             </ul>
//           </div>
//           <div style={{ flex: 1, minWidth: "250px", marginBottom: "20px" }}>
//             <h3>About This Site</h3>
//             <p>
//               Smart Student Hub is designed to empower students, teachers, and
//               alumni with verified records and mentorship tools.
//             </p>
//           </div>
//         </div>
//         <div style={{ textAlign: "center", paddingTop: "20px", borderTop: "1px solid #f4ecec" }}>
//           <p>© 2025 <strong>Trisetu</strong> — Designed & Developed by <strong>Narayanastra</strong></p>
//         </div>
//       </footer>
//     </>
//   );
// }

// export default Home;
// src/App.js

// import React, { useState, useEffect } from 'react';
// import './home.css'; 

// // Header Component
// const Header = () => (
//   <header className="site-header">
//     <div className="header-inner">
//       <div className="logo">
//         <img src="/logo2.jpg" alt="logo" />
//         <span><h1>Trisetu</h1></span>
//       </div>
//       <nav className="nav">
//         <a href="#home">Home</a>
//         <a href="#about">About</a>
//         <a href="#features">Features</a>
//         <a href="#dashboards">Dashboards</a>
//         <a href="#alumni">Contact</a>
//         <a href="#contact">Sign Up</a>
//       </nav>
//     </div>
//   </header>
// );

// // Hero Carousel Component
// const HeroCarousel = () => {
//   const slides = [
//     {
//       backgroundImage: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1200&auto=format&fit=crop',
//       title: 'Trisetu — Smart Student Hub',
//       lead: 'Your all-in-one platform for academic, extracurricular, and wellness management.',
//       link: '#about',
//       linkText: 'Learn More',
//       image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop',
//     },
//     {
//       backgroundImage: 'https://images.unsplash.com/photo-1579783902671-9c869e95669b?q=80&w=1200&auto=format&fit=crop',
//       title: 'Centralized Dashboards',
//       lead: 'Access all your academic records, assignments, and alerts in one place.',
//       link: '#dashboards',
//       linkText: 'View Dashboards',
//       image: 'https://images.unsplash.com/photo-1557804506-6644400a9446?q=80&w=800&auto=format&fit=crop',
//     },
//     {
//       backgroundImage: 'https://images.unsplash.com/photo-1522204523234-87293e38734e?q=80&w=1200&auto=format&fit=crop',
//       title: 'Connect with Alumni',
//       lead: 'Find mentors, get career advice, and join professional groups.',
//       link: '#alumni',
//       linkText: 'Explore Alumni Network',
//       image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop',
//     },
//   ];

//   const [currentSlide, setCurrentSlide] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
//     }, 4000);

//     return () => clearInterval(timer);
//   }, [slides.length]);

//   const goToSlide = (index) => {
//     setCurrentSlide(index);
//   };

//   return (
//     <section id="hero" className="hero">
//       <div className="carousel">
//         {slides.map((slide, index) => (
//           <div
//             key={index}
//             className="slide"
//             style={{
//               backgroundImage: `url('${slide.backgroundImage}')`,
//               opacity: index === currentSlide ? 1 : 0,
//               pointerEvents: index === currentSlide ? 'auto' : 'none',
//               transition: 'opacity 600ms ease',
//               position: 'absolute',
//               inset: 0,
//             }}
//           >
//             <div className="hero-inner">
//               <div className="hero-copy">
//                 <h1>{slide.title}</h1>
//                 <p className="lead">{slide.lead}</p>
//                 <a href={slide.link} className="btn primary">{slide.linkText}</a>
//               </div>
//               <div className="hero-art">
//                 <img src={slide.image} alt="hero art" />
//               </div>
//             </div>
//           </div>
//         ))}

//         <button className="carousel-btn prev" onClick={() => goToSlide(currentSlide - 1)}>
//           <i className="fa fa-chevron-left"></i>
//         </button>
//         <button className="carousel-btn next" onClick={() => goToSlide(currentSlide + 1)}>
//           <i className="fa fa-chevron-right"></i>
//         </button>
//         <div id="dots" className="dots">
//           {slides.map((_, index) => (
//             <button
//               key={index}
//               className={index === currentSlide ? 'active' : ''}
//               onClick={() => goToSlide(index)}
//             ></button>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// // Section Component
// const Section = ({ id, title, children }) => (
//   <section id={id} className={`section ${id}`}>
//     <div className="container">
//       {title && <h2>{title}</h2>}
//       {children}
//     </div>
//   </section>
// );

// // Footer Component
// const Footer = () => (
//   <footer style={{ backgroundColor: '#fefefe', color: '#090808', padding: '40px 0', fontFamily: 'Poppins, sans-serif' }}>
//     <div style={{ maxWidth: '1200px', margin: 'auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
//       <div style={{ flex: 1, minWidth: '250px', marginBottom: '20px' }}>
//         <h3>Contact Me</h3>
//         <p>Email: <a href="mailto:xxxxxxxxx@gmail.com" style={{ color: '#0a0808' }}>xxxxxxxxx@gmail.com</a></p>
//         <p>Location: India</p>
//       </div>
//       <div style={{ flex: 1, minWidth: '250px', marginBottom: '20px' }}>
//         <h3>Quick Links</h3>
//         <ul style={{ listStyle: 'none', padding: 0 }}>
//           <li><a href="/home" style={{ color: '#080404', textDecoration: 'none' }}>Home</a></li>
//           <li><a href="/about" style={{ color: '#0c0808', textDecoration: 'none' }}>About</a></li>
//           <li><a href="/enquiry" style={{ color: '#0b0707', textDecoration: 'none' }}>Enquiry</a></li>
//         </ul>
//       </div>
//       <div style={{ flex: 1, minWidth: '250px', marginBottom: '20px' }}>
//         <h3>About This Site</h3>
//         <p>Smart Student Hub is designed to empower students, teachers, and alumni with verified records and mentorship tools.</p>
//       </div>
//     </div>
//     <div style={{ textAlign: 'center', paddingTop: '20px', borderTop: '1px solid #f4ecec' }}>
//       <p>© 2025 <strong>Trisetu</strong> — Designed & Developed by <strong>Narayanastra</strong></p>
//     </div>
//   </footer>
// );

// // Main App Component
// const App = () => {
//   return (
//     <>
//       <Header />
//       <HeroCarousel />
//       <Section id="about" title="What is Trisetu?">
//         <div className="about-grid">
//           <div>
//             <p>Trisetu is a web + mobile platform that centralizes student achievements, academics, and wellness into one place. With AI-powered dashboards, verified records, and alumni mentorship, we simplify growth for students and compliance for institutions.</p>
//           </div>
//           <div>
//             <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=0d5f7c6e8a9b1c2d3e4f5a6b7c8d9e0f" alt="about image" />
//           </div>
//         </div>
//       </Section>

//       <Section id="features" title="Core Features">
//         <div className="features-grid">
//           <div className="card">
//             <div className="icon">📊</div>
//             <h3>Student Dashboard</h3>
//             <p>Marks,Attendance, Assignments,Ranks,Alerts ,AI ChatBox</p>
//           </div>
//           <div className="card">
//             <div className="icon">📝</div>
//             <h3>Alumni mentor Connect</h3>
//             <p>one-to-one + group Mentorship</p>
//           </div>
//           <div className="card">
//             <div className="icon">🏆</div>
//             <h3>Achievements & Activities</h3>
//             <p>Seminar, certifications, internships, volunteering.</p>
//           </div>
//           <div className="card">
//             <div className="icon">✅</div>
//             <h3>Verified Portfolio</h3>
//             <p>Auto-generated CVs & sharable digital records.</p>
//           </div>
//           <div className="card">
//             <div className="icon">📈</div>
//             <h3>Smart faculty dashboard</h3>
//             <p>Heatmaps,Alerts,Quiz/task generator</p>
//           </div>
//           <div className="card">
//             <div className="icon">🔗</div>
//             <h3>Gamified Leaderboards</h3>
//             <p>Badges,Ranks,Skills recognisation</p>
//           </div>
//         </div>
//       </Section>

//       <Section id="dashboards" title="Dashboards for Everyone">
//         <div className="dash-grid">
//           <div className="dash-card"><i className="fa fa-user-graduate"></i>
//             <h3>Students</h3>
//             <p>Acadmic + non acadmic records , Assignment & deadlines</p>
//           </div>
//           <div className="dash-card"><i className="fa fa-chalkboard-teacher"></i>
//             <h3>Teachers</h3>
//             <p>Assign tasks, upload marks, generate reports.</p>
//           </div>
//           <div className="dash-card"><i className="fa fa-university"></i>
//             <h3>Admins</h3>
//             <p>Manage users, ranking system control, competitions, analytics.</p>
//           </div>
//         </div>
//         <div className="mockups">
//           <img src="dash.jpg" alt="dashboard mockup" />
//           <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=3a4d5b6c7e8f9a0b1c2d3e4f5a6b7c8d" alt="dashboard mockup" />
//         </div>
//       </Section>

//       <Section id="alumni" title="Connect with Alumni">
//         <ul className="alumni-list">
//           <li>Searchable alumni directory</li>
//           <li>Verified profiles with skills & experience</li>
//           <li>Chat & mentorship requests</li>
//           <li>Domain-specific group discussions</li>
//         </ul>
//         <img className="alumni-visual" src="Screenshot 2025-09-19 163935.png" width="550px" height="650px" alt="alumni" />
//       </Section>

//       <Section id="wellness" title="Beyond Academics">
//         <div className="well-grid">
//           <div className="well-card">
//             <h3>Wellness Tracking</h3>
//             <p>Track participation in yoga, counselling sessions, workshops, and other wellness activities to ensure overall growth.</p>
//           </div>
//           <div className="well-card">
//             <h3>Wellness Analytics</h3>
//             <p>Heatmaps and visual insights showing the balance between academics, extracurriculars, and wellness engagement.</p>
//           </div>
//         </div>
//       </Section>

//       <Section id="gamification" title="Engage & Compete">
//         <div className="game-grid">
//           <div className="game-card">
//             <h3>Progress Tracker</h3>
//             <p>Parents track progress, goverments plans better , and employers trust verified student portfolios for oppotunities .</p>
//           </div>
//           <div className="game-card">
//             <h3>Leaderboards & Rankings</h3>
//             <p>Track class rank, skill rank, and performance with competitive, motivating leaderboards.</p>
//           </div>
//           <div className="game-card">
//             <h3>Badges & Gamification</h3>
//             <p>Encourage participation through skill-based badges and digital recognitions.</p>
//           </div>
//         </div>
//       </Section>

//       <Section id="impact" title="Why Choose Trisetu?">
//         <div className="impact-grid">
//           <div>🌱 <strong>For Students:</strong> career-ready portfolios, mentorship, growth.</div>
//           <div>🏫 <strong>For Institutions:</strong> hassle-free accreditation, real-time analytics.</div>
//           <div>🌍 <strong>For Society:</strong> inclusive, digital, NEP 2020 aligned ecosystem.</div>
//         </div>
//       </Section>

//       <section id="contact" className="section cta-section">
//         <div className="container">
//           <h2>Ready to Experience Smart Growth?</h2>
//           <div className="cta-row">
//             <a className="btn primary" href="#">Get Started Now</a>
//             <a className="btn ghost" href="#">Request a Demo</a>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </>
//   );
// };

// export default Home;
