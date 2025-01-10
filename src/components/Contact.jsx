import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import "../styles/Contact.css";

function Contact() {
  const form = useRef();
  const [messageStatus, setMessageStatus] = useState(''); // For feedback message

  const sendEmail = (e) => {
    e.preventDefault();

    // Display message immediately
    setMessageStatus('Sending your message...');

    emailjs
      .sendForm('service_u8zkz0l', 'template_b1d0qte', form.current, {
        publicKey: 'BuW-Cmio_1I2j2Dxb',
      })
      .then(
        () => {
          setMessageStatus('Message sent successfully! 😊'); // Update feedback
        },
        (error) => {
          console.error('FAILED...', error.text);
          setMessageStatus('Failed to send your message. Please try again. 😞'); // Handle error
        },
      );
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <form ref={form} onSubmit={sendEmail}>
        <input 
          type="text" 
          placeholder="Your Name" 
          name="from_name" 
          required 
        />
        <input 
          type="email" 
          placeholder="Your Email" 
          name="from_email" 
          required 
        />
        <textarea 
          placeholder="Your Message" 
          name="message"  
          required
        ></textarea>
        <button type="submit">Send Message</button>
      </form>

      {/* Feedback Message */}
      {messageStatus && (
        <p className="message-status" style={{ textAlign: 'center',color: '#007bff', marginTop: '20px', paddingTop:"10px" , fontWeight: "bold"}}>
          {messageStatus}
        </p>
      )}
    </section>
  );
}

export default Contact;
