import { motion } from "framer-motion";
import { ArrowUp, Heart, Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/NayakNavaneeth", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/navaneeth-nayak-910994362", label: "LinkedIn" },
  { icon: Mail, href: "mailto:nayaknavaneeth111@gmail.com", label: "Email" },
];

const Footer = () => (
  <footer className="py-10 border-t border-border relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-t from-primary/2 to-transparent" />

    <div className="container mx-auto px-6 relative z-10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="text-xl font-heading font-bold text-gradient">NN</span>
        </div>

        {/* Nav */}
        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          {["About", "Skills", "Projects", "Contact"].map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="hover:text-primary transition-colors">
              {l}
            </a>
          ))}
        </div>

        {/* Social + scroll top */}
        <div className="flex items-center gap-3">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-9 h-9 rounded-lg bg-secondary border border-border flex items-center justify-center hover:bg-primary/10 hover:border-primary/30 hover:text-primary transition-all text-muted-foreground"
            >
              <Icon size={16} />
            </a>
          ))}
          <div className="w-px h-6 bg-border mx-1" />
          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center hover:bg-primary/20 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="text-primary" size={16} />
          </motion.button>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-border/50 text-center">
        <p className="text-xs text-muted-foreground/60">
          © {new Date().getFullYear()} Navaneeth Nayak. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
