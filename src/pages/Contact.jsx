import { Navbar, Footer, SectionHero } from "../components";
import { ContactForm, SocialLinks } from "../sections/Contact";
import GridOverlay from "../components/GridOverlay/GridOverlay";
import "./Contact.scss";

const Contact = () => {
  return (
    <div className="contact-page">
      <Navbar />
      <SectionHero
        title="say hello"
        description="let's collaborate. feel free to drop me a line about your project or follow me on social networks"
      />
      <div className="contact-body">
        <GridOverlay />
        <div className="contact-body__form">
          <ContactForm />
        </div>
        <div className="contact-body__social">
          <SocialLinks />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
