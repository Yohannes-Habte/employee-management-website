import React from 'react';
import './ContactTools.scss';
import ReactIcons from '../../reactIcons/ReactIcons';

const ContactTools = () => {
  // Global icon
  const {
    emailIcon,
    phoneIcon,
    facebookIcon,
    instagramIcon,
    tiktokIcon,
    twitterIcon,
    locationIcon,
  } = ReactIcons();
  return (
    <aside className="fast-contact-tools">
      <h2 className="fast-contact-tools-title"> Fast Contact Tools</h2>

      <aside className="contact-tool">
        <span className="contact-tool-icon"> {phoneIcon} </span>
        <h4 className="link-container">
          <a className="link" href="tel:6031112298">
            Call us
          </a>
        </h4>
      </aside>

      <aside className="contact-tool">
        <span className="contact-tool-icon"> {emailIcon} </span>
        <h4 className="link-container">
          <a
            className="link"
            href="mailto:uhytmsb@gmail.com?cc=rai@gmail.com, lisa@gamil.com, &bcc=tim@gmail.com&subject=Mail from our Website&body=Some body text here"
          >
            Send Email
          </a>
        </h4>
      </aside>

      <aside className="contact-tool">
        <span className="contact-tool-icon"> {facebookIcon} </span>
        <h4 className="link-container">
          <a className="link" href="https://www.facebook.com/" target="_blank">
            Facebook
          </a>
        </h4>
      </aside>

      <aside className="contact-tool">
        <span className="contact-tool-icon"> {instagramIcon} </span>
        <h4 className="link-container">
          <a className="link" href="https://www.instagram.com/" target="_blank">
            Instagram
          </a>
        </h4>
      </aside>

      <aside className="contact-tool">
        <span className="contact-tool-icon"> {twitterIcon} </span>
        <h4 className="link-container">
          <a className="link" href="https://twitter.com/" target="_blank">
            Tweet us
          </a>
        </h4>
      </aside>

      <aside className="contact-tool">
        <span className="contact-tool-icon"> {tiktokIcon} </span>
        <h4 className="link-container">
          <a
            className="link"
            href="https://www.tiktok.com/explore"
            target="_blank"
          >
            Tiktok
          </a>
        </h4>
      </aside>

      <aside className="contact-tool">
        <span className="contact-tool-icon"> {locationIcon} </span>
        <h4 className="link-container">
          <a
            className="link"
            href="https://www.google.com/maps/dir/53.6543232,9.7845248/pinneberg"
            target="_blank"
          >
            Raben Straße 31, 4657 Hamburg
          </a>
        </h4>
      </aside>
    </aside>
  );
};

export default ContactTools;
