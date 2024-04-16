import React from 'react';
import './ContactPage.scss';
import ContactForm from '../../components/contact/contactForm/ContactForm';
import ContactTools from '../../components/contact/contactTools/ContactTools';

const ContactPage = () => {
  return (
    <main className="contact-page">

      <article className="contact-page-container">
        <h1 className="contact-page-title"> contact Us </h1>
        <div className="contact-box">
          <ContactTools />
          <ContactForm />
        </div>
      </article>
      
    </main>
  );
};

export default ContactPage;
