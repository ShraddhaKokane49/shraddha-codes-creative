import { useState, type FormEvent } from "react";
import { Phone, Mail, MapPin, Linkedin } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in all fields.");
      return;
    }
    toast.success("Message sent! Thank you for reaching out.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="bg-card py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl text-foreground mb-10 text-center">Let's Connect</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-3xl mx-auto">
          {/* Info */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <Phone className="text-primary" size={18} />
              <span className="font-body text-sm text-muted-foreground">+91 8369335760</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="text-primary" size={18} />
              <a
                href="mailto:shraddhakokane11@gmail.com"
                className="font-body text-sm text-primary hover:underline"
              >
                shraddhakokane11@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Linkedin className="text-primary" size={18} />
              <a
                href="https://shraddha-linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-sm text-primary hover:underline"
              >
                LinkedIn Profile
              </a>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="text-primary" size={18} />
              <span className="font-body text-sm text-muted-foreground">
                Thane, Mumbai, Maharashtra – 421301
              </span>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              maxLength={100}
              className="w-full rounded-lg border border-border bg-background px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <input
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              maxLength={255}
              className="w-full rounded-lg border border-border bg-background px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <textarea
              placeholder="Message"
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              maxLength={1000}
              className="w-full rounded-lg border border-border bg-background px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
            />
            <button
              type="submit"
              className="w-full rounded-lg bg-primary px-6 py-3 font-body font-medium text-sm text-primary-foreground hover:opacity-90 transition-opacity"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
