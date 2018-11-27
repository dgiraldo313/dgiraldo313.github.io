import React, { Component } from 'react';

import '../sass/pages/contact.scss'

class Contact extends Component{
  render() {
    return (
      <div className="contact-container">
        <div className="content">
          <div className="header">
            <i className="fa fa-envelope" aria-hidden="true"></i>
          </div>
          <div className="form-container">

            <form action="https://formspree.io/dgiraldo@drew.edu" method="POST">
              <div className="first-level">
                <span className="open-tag">&#60;</span>
                <span className="tag-content">Contact_Form</span>
                <span className="close-tag">&#62;</span>
              </div>
              <div className="second-level">
                <div >
                  <span className="open-tag">&#60;</span>
                  <span className="tag-content">Name</span>
                  <span className="close-tag">&#62;</span>
                </div>
                <div className="third-level">
                  <input type="text" name="name" placeholder="What's your name?" required/>
                </div>
                <div >
                  <span className="open-tag">&#60;/</span>
                  <span className="tag-content">Name</span>
                  <span className="close-tag">&#62;</span>
                </div>
              </div>
              <div className="second-level">
                <div >
                  <span className="open-tag">&#60;</span>
                  <span className="tag-content">Email</span>
                  <span className="close-tag">&#62;</span>
                </div>
                <div className="third-level">
                  <input type="email" name="_replyto" placeholder="What about your email?" required/>
                </div>
                <div >
                  <span className="open-tag">&#60;/</span>
                  <span className="tag-content">Email</span>
                  <span className="close-tag">&#62;</span>
                </div>
              </div>
              <div className="second-level">
                <div >
                  <span className="open-tag">&#60;</span>
                  <span className="tag-content">Message</span>
                  <span className="close-tag">&#62;</span>
                </div>
                <div className="third-level">
                  <textarea type="text" name="message" placeholder="What's up?" required/>
                </div>
                <div >
                  <span className="open-tag">&#60;/</span>
                  <span className="tag-content">Message</span>
                  <span className="close-tag">&#62;</span>
                </div>
              </div>
              <div className="first-level">
                <span className="open-tag">&#60;/</span>
                <span className="tag-content">Contact_Form</span>
                <span className="close-tag">&#62;</span>
              </div>
              <input type="submit" value="Send" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
