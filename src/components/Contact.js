import React from 'react';
import { useForm } from 'react-hook-form';
import { FaEnvelope, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa'; // Importing icons
import './Contact.css'; // Import CSS for styling

function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    alert('Form submitted successfully');
    console.log(data);
  };

  return (
    <section className="contact">
      <div className="contact-container">
        <div className="contact-info-left">
          <h2>Let’s connect and create something great together!</h2>
          <p>Feel free to reach out for any collaborations, opportunities, or questions.</p>
          
          <div className="contact-links">
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <a href="mailto:katyayanim55@gmail.com">katyayanim55@gmail.com</a>
            </div>
            <div className="contact-item">
              <FaLinkedin className="contact-icon" />
              <a href="https://www.linkedin.com/in/katyayanim12" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
            <div className="contact-item">
              <FaInstagram className="contact-icon" />
              <a href="https://www.instagram.com/katyayanimishra_12?igsh=MzVnZHBrZjdqM2I5" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
            <div className="contact-item">
              <FaGithub className="contact-icon" />
              <a href="https://github.com/Katyayani1875" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
        </div>

        <div className="contact-form-right">
          <h3>Send Me a Message</h3>
          <form onSubmit={handleSubmit(onSubmit)} className="form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                {...register('name', { required: 'Name is required' })}
                placeholder="Your Name"
              />
              {errors.name && <span className="error">{errors.name.message}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                {...register('email', { required: 'Email is required' })}
                placeholder="Your Email"
              />
              {errors.email && <span className="error">{errors.email.message}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                {...register('message', { required: 'Message is required' })}
                placeholder="Your Message"
              />
              {errors.message && <span className="error">{errors.message.message}</span>}
            </div>

            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
