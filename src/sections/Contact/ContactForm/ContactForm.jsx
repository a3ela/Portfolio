import { useState } from "react";
import "./ContactForm.scss";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // 'idle', 'sending', 'success', 'error'

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!form.name || !form.email || !form.message) {
      alert("Please fill in all fields.");
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/webwizabel@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            message: form.message,
            _subject: `New portfolio message from ${form.name}`,
          }),
        },
      );

      if (response.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="contact-form__field">
        <input
          id="cf-name"
          placeholder="Name"
          name="name"
          type="text"
          className="contact-form__input"
          value={form.name}
          onChange={handleChange}
          autoComplete="name"
        />
      </div>

      <div className="contact-form__field">
        <input
          id="cf-email"
          placeholder="Email"
          name="email"
          type="email"
          className="contact-form__input"
          value={form.email}
          onChange={handleChange}
          autoComplete="email"
        />
      </div>

      <div className="contact-form__field">
        <textarea
          id="cf-message"
          placeholder="Message"
          name="message"
          className="contact-form__textarea"
          value={form.message}
          onChange={handleChange}
          rows={7}
        />
      </div>

      <button
        type="submit"
        className="contact-form__submit"
        disabled={status === "sending"}
      >
        {status === "idle" && "Submit"}
        {status === "sending" && "Sending..."}
        {status === "success" && "Message Sent!"}
        {status === "error" && "Error Sending"}
      </button>
    </form>
  );
};

export default ContactForm;
