import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import profileImg from "@/assets/profile.jpg";
import heroIllustration from "@/assets/hero-illustration.png";

const roles = ["AI", "Machine Learning", "Robotics", "Innovation"];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = roles[roleIndex];
    if (typing) {
      if (displayed.length < current.length) {
        const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 1500);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
        return () => clearTimeout(t);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, roleIndex]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background accents */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-accent/5 blur-3xl" />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-primary font-semibold mb-4 tracking-wider text-sm uppercase">
            Welcome to my portfolio
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-heading font-bold leading-tight mb-4">
            Hello, I'm
            <br />
            <span className="text-gradient">Navaneeth</span>
            <br />
            <span className="text-gradient">Nayak</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-2">
            AI & ML Enthusiast | Robotics Developer | Engineering Student
          </p>
          <div className="h-8 mb-6">
            <span className="text-primary font-heading font-semibold text-xl">
              {displayed}
              <span className="animate-pulse">|</span>
            </span>
          </div>
          <p className="text-muted-foreground max-w-lg mb-8 leading-relaxed">
            Second-year undergraduate pursuing B.E. in Computer Science & Engineering (AI & ML) at Mangalore Institute of Technology and Engineering. Passionate about intelligent automation, robotics, and technology-driven solutions.
          </p>
          <div className="flex gap-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-lg border border-primary/30 text-primary font-semibold hover:bg-primary/10 transition-colors"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative flex justify-center"
        >
          <div className="relative">
            <div className="w-72 h-72 lg:w-96 lg:h-96 rounded-full overflow-hidden glow-border animate-pulse-glow">
              <img src={profileImg} alt="Navaneeth Nayak" className="w-full h-full object-cover" width={512} height={512} />
            </div>
            <img
              src={heroIllustration}
              alt="Developer illustration"
              className="absolute -bottom-8 -right-8 w-32 h-32 animate-float"
              width={512}
              height={512}
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ArrowDown className="text-primary" size={24} />
      </motion.div>
    </section>
  );
};

export default HeroSection;
