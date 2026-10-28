import { useState } from "react";
import {
  FiArrowUpRight,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiSend,
} from "react-icons/fi";
import { profile } from "../portfolioData";
import SectionHeading from "./SectionHeading";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState("");
  const config = {
    service: import.meta.env.VITE_EMAILJS_SERVICE_ID,
    template: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  };
  const configured = Boolean(
    config.service && config.template && config.publicKey,
  );
  const change = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
    setStatus("");
  };
  const submit = async (event) => {
    event.preventDefault();
    if (!form.name.trim() || !form.message.trim()) {
      setStatus("Please enter your name and a message using more than spaces.");
      return;
    }
    if (!configured) {
      setStatus(
        "The contact form is currently unavailable. Please contact me using the email address shown.",
      );
      return;
    }
    setSending(true);
    setStatus("");
    try {
      const { default: emailjs } = await import("emailjs-com");
      const result = await emailjs.send(
        config.service,
        config.template,
        {
          name: form.name.trim(),
          email: form.email.trim(),
          message: form.message.trim(),
          reply_to: form.email.trim(),
        },
        config.publicKey,
      );
      if (result.status !== 200) throw new Error("Delivery failed");
      setStatus("Thank you! Your message has been sent.");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus(
        "Your message could not be delivered. Please try again later or contact me using the email address shown.",
      );
    } finally {
      setSending(false);
    }
  };
  return (
    <section id="contact" className="section container">
      <SectionHeading
        number="06"
        eyebrow="LET’S CONNECT"
        title="Have something in mind? Let’s build it."
      />
      <div className="contact-layout">
        <div className="contact-copy">
          <p className="lead">Good software starts with a conversation.</p>
          <p>
            Let&apos;s talk about AI / GenAI opportunities, full-stack
            development, or a practical problem worth solving.
          </p>
          <a className="contact-email" href={"mailto:" + profile.email}>
            {profile.email}
            <FiArrowUpRight aria-hidden="true" />
          </a>
          <div className="contact-socials">
            <a
              className="button button-secondary"
              href={profile.github}
              target="_blank"
              rel="noreferrer"
            >
              <FiGithub aria-hidden="true" /> GitHub
            </a>
            <a
              className="button button-secondary"
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <FiLinkedin aria-hidden="true" /> LinkedIn
            </a>
          </div>
          <div className="contact-note">
            <FiMail aria-hidden="true" />
            <p>
              {configured
                ? "Send a message here, or reach out directly by email."
                : "The contact form is currently unavailable. Please reach out directly by email."}
            </p>
          </div>
        </div>
        <form className="contact-form panel" onSubmit={submit}>
          <div className="form-row">
            <div>
              <label htmlFor="contact-name">Your name</label>
              <input
                id="contact-name"
                name="name"
                autoComplete="name"
                placeholder="How should I call you?"
                value={form.name}
                onChange={change}
                minLength={2}
                maxLength={100}
                required
              />
            </div>
            <div>
              <label htmlFor="contact-email">Email address</label>
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={change}
                maxLength={254}
                required
              />
            </div>
          </div>
          <label htmlFor="contact-message">Your message</label>
          <textarea
            id="contact-message"
            name="message"
            rows={5}
            placeholder="Tell me about the opportunity or your idea..."
            value={form.message}
            onChange={change}
            minLength={10}
            maxLength={4000}
            required
          />
          <button
            className="button button-primary"
            type="submit"
            disabled={sending || !configured}
          >
            {sending ? "Sending…" : "Send Message"}
            <FiSend aria-hidden="true" />
          </button>
          <p className="form-status" role="status">
            {status}
          </p>
        </form>
      </div>
    </section>
  );
}
