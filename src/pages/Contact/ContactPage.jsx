// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import "./ContactPage.scss";
import { Navbar, Footer } from "../../components/index";

const Contact = () => {
  const directContactDetails = [
    {
      platform: "Email",
      handle: "webwizabel@gmail.com",
      icon: <FaEnvelope />,
    },
    {
      platform: "Phone",
      handle: "+27 64 515 7876",
      icon: <FaPhone />,
    },
  ];

  const socialLinks = [
    {
      platform: "linkedin",
      handle: "/in/stfnco",
      icon: <FaLinkedinIn />,
    },
    {
      platform: "github",
      handle: "@stfnco",
      icon: <FaGithub />,
    },
    {
      platform: "instagram",
      handle: "@stfnco",
      icon: <FaInstagram />,
    },
    {
      platform: "facebook",
      handle: "@stfnco",
      icon: <FaFacebookF />,
    },
  ];

  return (
    <>
      <Navbar />
      <div id="contact" className="app__contact">
        {/* 1. Reused Grid Overlay */}
        <div className="grid-overlay">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="grid-line" />
          ))}
        </div>

        <div className="contact-container">
          {/* Top Header Area */}
          <motion.div
            className="contact-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="title">say hello</h2>
            <p className="subtitle">
              let's collaborate. feel free to drop
              <br />
              me a line about your project or
              <br />
              me on social networks
            </p>
          </motion.div>

          {/* Bottom Split Area */}
          <motion.div
            className="contact-body"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Form */}
            <div className="form-area">
              <form onSubmit={(e) => e.preventDefault()}>
                <input type="text" placeholder="Name" className="form-input" />
                <input
                  type="email"
                  placeholder="Email"
                  className="form-input"
                />
                <textarea placeholder="Message" className="form-textarea" />
                <button type="submit" className="submit-btn">
                  Submit
                </button>
              </form>
            </div>

            {/* Socials */}
            <div className="socials-area">
              {socialLinks.map((item, index) => (
                <div className="social-item" key={index}>
                  <div className="icon-box">{item.icon}</div>
                  <div className="social-text">
                    <span className="platform">{item.platform}</span>
                    <span className="handle">{item.handle}</span>
                  </div>

                  <div className="social-crosshair">
                    <div className="crosshair-h-line" />
                    <div className="crosshair-circle" />
                  </div>
                </div>
              ))}

              <div className="direct-contact">
                {directContactDetails.map((item, index) => (
                  <div className="contact-item" key={index}>
                    <div className="icon-box">{item.icon}</div>
                    <div className="contact-text">
                      <span className="platform">{item.platform}</span>
                      <span className="handle">{item.handle}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
