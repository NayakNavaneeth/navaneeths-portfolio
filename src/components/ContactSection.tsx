import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github, Send, ArrowUpRight } from "lucide-react";

const contactInfo = [
  { icon: Mail, label: "Email", value: "nayaknavaneeth111@gmail.com", href: "mailto:nayaknavaneeth111@gmail.com" },
  { icon: Phone, label: "Phone", value: "8660194856", href: "tel:8660194856" },
  { icon: MapPin, label: "Location", value: "Mulki, Mangalore, Karnataka", href: "#" },
  { icon: Linkedin, label: "LinkedIn", value: "Navaneeth Nayak", href: "https://www.linkedin.com/in/navaneeth-nayak-910994362" },
  { icon: Github, label: "GitHub", value: "NayakNavaneeth", href: "https://github.com/NayakNavaneeth" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
};

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:nayaknavaneeth111@gmail.com?subject=Contact from ${form.name}&body=${form.message}%0A%0AFrom: ${form.email}`;
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full bg-primary/3 blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-2">Get in Touch</p>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">
            <span className="text-gradient">Contact</span> Me
          </h2>
          <p className="text-muted-foreground mb-12 max-w-lg">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-3"
          >
            {contactInfo.map(({ icon: Icon, label, value, href }) => (
              <motion.a
                key={label}
                variants={itemVariants}
                whileHover={{ x: 6 }}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-4 card-elevated p-4 hover:glow-border transition-all group"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center group-hover:from-primary/30 transition-all">
                  <Icon className="text-primary" size={20} />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-muted-foreground">{label}</p>
                  <p className="text-sm font-medium">{value}</p>
                </div>
                {href !== "#" && (
                  <ArrowUpRight size={16} className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                )}
              </motion.a>
            ))}
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="card-elevated p-8 space-y-5 hover:glow-border transition-all"
          >
            {[
              { name: "name", label: "Name", type: "text" },
              { name: "email", label: "Email", type: "email" },
            ].map((field) => (
              <div key={field.name} className="relative">
                <label
                  className={`text-sm mb-1.5 block transition-colors ${
                    focused === field.name ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {field.label}
                </label>
                <input
                  type={field.type}
                  required
                  value={form[field.name as keyof typeof form]}
                  onChange={(e) => setForm({ ...form, [field.name]: e.target.value })}
                  onFocus={() => setFocused(field.name)}
                  onBlur={() => setFocused(null)}
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                />
              </div>
            ))}
            <div>
              <label
                className={`text-sm mb-1.5 block transition-colors ${
                  focused === "message" ? "text-primary" : "text-muted-foreground"
                }`}
              >
                Message
              </label>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                onFocus={() => setFocused("message")}
                onBlur={() => setFocused(null)}
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all resize-none"
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3.5 rounded-xl bg-primary text-primary-foreground font-bold flex items-center justify-center gap-2 hover:shadow-[0_0_30px_-5px_hsl(187_100%_50%/0.4)] transition-all"
            >
              <Send size={16} />
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
