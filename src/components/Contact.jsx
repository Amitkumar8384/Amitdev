import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
  FiLinkedin,
} from "react-icons/fi";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = `Portfolio Contact - ${form.name}`;

    const body = `Name: ${form.name}
Email: ${form.email}

Message:
${form.message}`;

    window.location.href =
      `mailto:Amitkumar838401@gmail.com?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">
            <span>07</span>
            <span>CONTACT</span>
          </div>
        </motion.div>

        <div className="contact-grid">
          {/* Contact Information */}
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="contact-eyebrow">LET'S CONNECT</p>

            <h2>
              Have a project
              <br />
              <span>in mind?</span>
            </h2>

            <p className="contact-description">
              I'm open to frontend development opportunities, freelance
              projects, and collaborations. Feel free to reach out.
            </p>

            <div className="contact-details">
              <a
                href="mailto:Amitkumar838401@gmail.com"
                className="contact-detail"
              >
                <span className="contact-icon">
                  <FiMail />
                </span>

                <span>
                  <small>Email</small>
                  Amitkumar838401@gmail.com
                </span>
              </a>

              <a href="tel:+918384010361" className="contact-detail">
                <span className="contact-icon">
                  <FiPhone />
                </span>

                <span>
                  <small>Phone</small>
                  +91 83840 10361
                </span>
              </a>

              <div className="contact-detail">
                <span className="contact-icon">
                  <FiMapPin />
                </span>

                <span>
                  <small>Location</small>
                  New Delhi, India
                </span>
              </div>

              <a
                href="https://www.linkedin.com/in/amit-kumar8384/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-detail"
              >
                <span className="contact-icon">
                  <FiLinkedin />
                </span>

                <span>
                  <small>LinkedIn</small>
                  linkedin.com/in/amitkumar8384
                </span>
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="form-group">
              <label htmlFor="name">NAME</label>

              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                autoComplete="name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">EMAIL</label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="your@email.com"
                value={form.email}
                onChange={handleChange}
                autoComplete="email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">MESSAGE</label>

              <textarea
                id="message"
                name="message"
                rows={6}
                placeholder="Tell me about your project..."
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="contact-submit">
              <span>Send Message</span>
              <FiSend />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;