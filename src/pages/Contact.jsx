import React from "react";

const Contact = () => {
  return (
    <>
      {/* Contact Header */}
      <div className="contact-header text-center py-5">
        <h1>Contact Us</h1>
        <p>Following are the ways in which you may contact us</p>
      </div>

      {/* Contact Form Section */}
      <div className="container py-5">
        <div className="row">
          {/* Contact Info */}
          <div className="col-md-4 mb-4">
            <div className="contact-info">
              <h4>Our Office</h4>
              <p> Sasta Shopping</p>
              <p>Jaipur, Rajasthan</p>
              <p>Email: support@Sastashop.com</p>
              <p>Phone: +91 9876543210</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-md-8">
            <form className="contact-form">
              <div className="row">
                <div className="col-md-6 mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
              </div>

              <input
                type="text"
                className="form-control mb-3"
                placeholder="Subject"
              />

              <textarea
                className="form-control mb-3"
                rows="5"
                placeholder="Message"
              ></textarea>

              <div className="text-end">
                <button type="submit" className="btn btn-success px-4">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
