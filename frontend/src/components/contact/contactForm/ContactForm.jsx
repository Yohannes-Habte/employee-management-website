import React, { useState } from 'react';
import './ContactForm.scss';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import ReactIcons from '../../reactIcons/ReactIcons.jsx';

// Initial State
const initialSate = {
  fullName: '',
  email: '',
  message: '',
};
const ContactForm = () => {
  const navigate = useNavigate();
  // Global react icons
  const { userIcon, emailIcon, messageIcon } = ReactIcons();

  // Local state variables
  const [testimonies, setTestimonies] = useState(initialSate);
  const [agree, setAgree] = useState(false);

  // Distructure the initial values
  const { fullName, email, message } = testimonies;

  // Function that handle input change
  const handleChange = (event) => {
    const { name, value } = event.target;
    setTestimonies({ ...testimonies, [name]: value });
  };

  // reste the variables into initial state
  const reset = () => {
    setTestimonies({
      firstName: '',
      lastName: '',
      message: '',
    });
    setAgree(false);
  };

  // Submit user testimonial or comment

  return (
    <article className="form-container">
      <h3 className="contact-form-title"> Drop us a message below </h3>

      <form className="contact-form">
        <div className="inputs-wrapper">
          <div className="input-container">
            <span className="input-icon"> {userIcon} </span>
            <input
              type="text"
              name={'fullName'}
              id={'fullName'}
              value={fullName}
              onChange={handleChange}
              placeholder="Enter Full Name"
              className="input-field"
            />

            <label htmlFor={'fullName'} className="input-label">
              Full Name
            </label>
            <span className="input-highlight"></span>
          </div>

          <div className="input-container">
            <span className="input-icon"> {emailIcon} </span>
            <input
              type="email"
              name={'email'}
              id={'email'}
              value={email}
              onChange={handleChange}
              placeholder="Enter Email Address"
              className="input-field"
            />

            <label htmlFor={'email'} className="input-label">
              Email Address
            </label>
            <span className="input-highlight"></span>
          </div>
        </div>

        <div className="text-message-container">
          <span className="input-icon"> {messageIcon} </span>
          <textarea
            name="message"
            id="message"
            value={message}
            onChange={handleChange}
            rows="7"
            placeholder="Enter text message"
            className="text-area-input-field"
          />

          <label htmlFor={'message'} className="input-label">
            Text Message
          </label>
          <span className="input-highlight"></span>
        </div>

        {/* Consent */}
        <div className="input-consent">
          <input
            type="checkbox"
            name="agree"
            id="agree"
            checked={agree}
            onChange={() => setAgree(!agree)}
            className="checkbox"
          />
          <label htmlFor="agree" className="accept">
            I accept
          </label>

          <Link className={'terms-of-user'}> Terms of Use</Link>
        </div>

        <button className="contact-form-btn">Submit</button>
      </form>
    </article>
  );
};

export default ContactForm;
