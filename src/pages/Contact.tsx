import { useState } from "react";
import emailjs from "@emailjs/browser";

emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

const inputClass =
  "w-full bg-transparent border-0 border-b-2 border-ink px-0 py-3 text-base placeholder:text-muted/70 focus:outline-none focus:border-accent transition-colors";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: import.meta.env.VITE_EMAILJS_TO_EMAIL,
        }
      );

      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 3000);
    } catch (err) {
      setError("Failed to send message. Please try again.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const socials = [
    {
      name: "GitHub",
      href: "https://github.com/ryanholloway",
      external: true,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/ryan-holloway-9406a0268",
      external: true,
    },
    {
      name: "Email",
      href: "mailto:hollowayrc@gmail.com",
      external: false,
    },
  ];

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 pt-12 md:pt-20 pb-24">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-x-10 gap-y-16">
        <div className="md:col-span-5">
          <h1 className="text-[clamp(3.25rem,8vw,6.5rem)] leading-[0.9]">
            Get in <span className="italic text-accent">touch</span>
          </h1>
          <p className="mt-8 text-muted leading-relaxed max-w-sm">
            I&apos;d love to hear from you. Send me a message.
          </p>

          <div className="mt-14">
            <p className="text-xs uppercase tracking-widest text-muted mb-2">
              Elsewhere
            </p>
            <ul className="border-t border-ink">
              {socials.map((s) => (
                <li key={s.name} className="border-b border-ink">
                  <a
                    href={s.href}
                    {...(s.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="group flex justify-between items-center py-4 font-display text-2xl hover:text-accent active:opacity-70 transition-colors"
                  >
                    {s.name}
                    <span
                      aria-hidden="true"
                      className="font-mono text-base translate-x-0 group-hover:translate-x-1 transition-transform"
                    >
                      {s.external ? "↗" : "→"}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="md:col-span-6 md:col-start-7 space-y-10"
        >
          <div>
            <label
              htmlFor="contact-name"
              className="block text-xs uppercase tracking-widest text-muted"
            >
              Name
            </label>
            <input
              id="contact-name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className={inputClass}
              placeholder="Your name"
            />
          </div>

          <div>
            <label
              htmlFor="contact-email"
              className="block text-xs uppercase tracking-widest text-muted"
            >
              Email
            </label>
            <input
              id="contact-email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={inputClass}
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label
              htmlFor="contact-message"
              className="block text-xs uppercase tracking-widest text-muted"
            >
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className={`${inputClass} resize-y`}
              placeholder="Your message..."
            />
          </div>

          <div className="space-y-4">
            <button
              type="submit"
              disabled={isLoading}
              className="w-full sm:w-auto bg-ink text-paper px-10 py-4 text-sm uppercase tracking-widest hover:bg-accent active:translate-y-px disabled:bg-muted disabled:cursor-not-allowed transition-colors"
            >
              {isLoading ? "Sending..." : "Send message →"}
            </button>

            {error && (
              <p role="alert" className="text-sm text-accent">
                {error}
              </p>
            )}

            {submitted && (
              <p role="status" className="text-sm">
                Thanks for reaching out. I&apos;ll get back to you soon.
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
