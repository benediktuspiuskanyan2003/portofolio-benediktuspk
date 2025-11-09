import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaWhatsapp, FaInstagram, FaLinkedin } from "react-icons/fa";

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        serviceId,
        templateId,
        form.current,
        publicKey
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        () => {
          alert("Failed to send message!");
        }
      );
  };

  return (
    <section id="contact" className="contact-section py-5 text-light">
      <div className="container">
        <h2 className="text-center fw-bold mb-4">Contact Me</h2>
        <p className="text-center mb-5">Let’s work together!</p>

        <div className="row justify-content-center align-items-center">
          {/* 🔹 Form */}
          <div className="col-md-6 mb-4">
            <form ref={form} onSubmit={sendEmail}
              className="p-4 contact-card rounded glass-card shadow-lg">
              
              <div className="mb-3">
                <input type="text" name="user_name" className="form-control" placeholder="Your Name" required />
              </div>

              <div className="mb-3">
                <input type="email" name="user_email" className="form-control" placeholder="Email Address" required />
              </div>

              <div className="mb-3">
                <textarea name="message" className="form-control" rows="4" placeholder="Message..." required></textarea>
              </div>

              <button type="submit" className="btn glow-btn w-100 py-2 fw-bold">
                Send Message
              </button>
            </form>
          </div>

          {/* 🔹 Google Maps */}
          <div className="col-md-6 mb-4 d-flex justify-content-center">
            <iframe
              title="pontianak-map"
              className="rounded shadow-lg map-card"
              width="100%"
              height="330"
              frameBorder="0"
              style={{ border: 0 }}
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.009603707491!2d109.3317329!3d-0.026330999999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e1d59f48a0d3b8f%3A0xae74cc21f0c39a0a!2sPontianak%2C%20West%20Kalimantan!5e0!3m2!1sen!2sid!4v1700000000001"
              allowFullScreen
            ></iframe>

          </div>

        </div>

        {/* 🔹 Social Icons */}
        <div className="d-flex gap-4 justify-content-center mt-3">
          <a href="https://github.com/benediktuspiuskanyan2003" target="_blank" rel="noopener noreferrer" className="contact-icon">
            <FaGithub size={30} />
          </a>
          <a href="https://wa.me/6289505642060" target="_blank" rel="noopener noreferrer" className="contact-icon">
            <FaWhatsapp size={30} />
          </a>
          <a href="https://instagram.com/bene_karafuruna_yoru.30" target="_blank" rel="noopener noreferrer" className="contact-icon">
            <FaInstagram size={30} />
          </a>
          <a href="https://www.linkedin.com/in/benediktus-pius-kanyan-506b1120b/" target="_blank" rel="noopener noreferrer" className="contact-icon">
            <FaLinkedin size={30} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
