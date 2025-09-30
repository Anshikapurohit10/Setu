import React from "react";

const Contact = () => {
  return (
    <section className="section contact">
      <div className="container">
        <h2>Contact Us</h2>
        <p>If you have any queries or want to get in touch, reach out to us:</p>

        <div style={{ marginTop: "20px" }}>
          <p><strong>Email:</strong> support@trisetu.com</p>
          <p><strong>Phone:</strong> +91 98765 43210</p>
          <p><strong>Location:</strong> India</p>
        </div>

        <form className="contact-form" style={{ marginTop: "30px" }}>
          <label>
            Name:
            <input type="text" placeholder="Enter your name" />
          </label>
          <label>
            Email:
            <input type="email" placeholder="Enter your email" />
          </label>
          <label>
            Message:
            <textarea placeholder="Write your message here..." />
          </label>
          <button type="submit" className="btn primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
