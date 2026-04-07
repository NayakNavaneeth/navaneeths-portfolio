import { ArrowUp } from "lucide-react";

const Footer = () => (
  <footer className="py-8 border-t border-border">
    <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Navaneeth Nayak. All rights reserved.
      </p>
      <div className="flex items-center gap-6 text-sm text-muted-foreground">
        {["About", "Skills", "Projects", "Contact"].map((l) => (
          <a key={l} href={`#${l.toLowerCase()}`} className="hover:text-primary transition-colors">
            {l}
          </a>
        ))}
      </div>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center hover:bg-primary/20 transition-colors"
        aria-label="Scroll to top"
      >
        <ArrowUp className="text-primary" size={18} />
      </button>
    </div>
  </footer>
);

export default Footer;
