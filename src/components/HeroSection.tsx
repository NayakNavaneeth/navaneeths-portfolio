import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Sparkles, Code2, Cpu } from "lucide-react";
import profileImg from "@/assets/profile.jpg";
import heroIllustration from "@/assets/hero-illustration.png";

const roles = ["Artificial Intelligence", "Machine Learning", "Robotics", "Innovation"];

const floatingIcons = [
  { icon: Sparkles, x: "10%", y: "20%", delay: 0, size: 18 },
  { icon: Code2, x: "85%", y: "15%", delay: 1, size: 16 },
  { icon: Cpu, x: "75%", y: "75%", delay: 2, size: 20 },
  { icon: Sparkles, x: "15%", y: "70%", delay: 0.5, size: 14 },
];

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = roles[roleIndex];
    if (typing) {
      if (displayed.length < current.length) {
        const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 70);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 1800);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
        return () => clearTimeout(t);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, roleIndex]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Animated background orbs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        className="absolute top-1/4 -left-40 w-[500px] h-[500px] rounded-full bg-primary blur-[120px]"
      />
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.04, 0.08, 0.04] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-1/4 -right-40 w-[400px] h-[400px] rounded-full bg-accent blur-[100px]"
      />
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.03, 0.06, 0.03] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut", delay: 4 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary blur-[150px]"
      />

      {/* Floating ambient icons */}
      {floatingIcons.map(({ icon: Icon, x, y, delay, size }, i) => (
        <motion.div
          key={i}
          className="absolute text-primary/15"
          style={{ left: x, top: y }}
          animate={{ y: [-12, 12, -12], rotate: [0, 10, -10, 0] }}
          transition={{ repeat: Infinity, duration: 5 + i, delay, ease: "easeInOut" }}
        >
          <Icon size={size} />
        </motion.div>
      ))}

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: "radial-gradient(circle, hsl(187 100% 50%) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left content */}
        <motion.div variants={staggerChildren} initial="hidden" animate="visible">
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-primary text-xs font-semibold uppercase tracking-wider">
              Available for opportunities
            </span>
          </motion.div>

          <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl lg:text-7xl font-heading font-black leading-[1.1] mb-4">
            Hello, I'm
            <br />
            <span className="text-gradient">Navaneeth</span>
            <br />
            <span className="text-gradient">Nayak</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="text-lg text-muted-foreground mb-3 font-medium">
            AI & ML Enthusiast • Robotics Developer • Engineering Student
          </motion.p>

          <motion.div variants={fadeUp} className="h-9 mb-6 flex items-center gap-2">
            <span className="text-xs uppercase tracking-widest text-muted-foreground/60">I love</span>
            <span className="text-primary font-heading font-bold text-xl">
              {displayed}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="inline-block ml-0.5 w-0.5 h-5 bg-primary align-middle"
              />
            </span>
          </motion.div>

          <motion.p variants={fadeUp} className="text-muted-foreground max-w-lg mb-8 leading-relaxed">
            Second-year undergraduate pursuing B.E. in Computer Science & Engineering (AI & ML) at Mangalore Institute of Technology and Engineering. Passionate about intelligent automation, robotics, and technology-driven solutions.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group relative px-7 py-3.5 rounded-xl bg-primary text-primary-foreground font-bold overflow-hidden transition-all hover:shadow-[0_0_30px_-5px_hsl(187_100%_50%/0.5)]"
            >
              <span className="relative z-10">View Projects</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-[hsl(200,100%,60%)] opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a
              href="#contact"
              className="px-7 py-3.5 rounded-xl border border-primary/30 text-primary font-bold hover:bg-primary/10 hover:border-primary/50 transition-all"
            >
              Contact Me
            </a>
          </motion.div>

          {/* Stats strip */}
          <motion.div variants={fadeUp} className="flex gap-8 mt-10 pt-8 border-t border-border/50">
            {[
              { value: "2+", label: "Projects" },
              { value: "5+", label: "Skills" },
              { value: "2024", label: "Since" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-heading font-bold text-gradient">{stat.value}</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right - Profile image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="relative flex justify-center"
        >
          <div className="relative">
            {/* Rotating ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              className="absolute -inset-4 rounded-full border border-dashed border-primary/20"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
              className="absolute -inset-10 rounded-full border border-dashed border-primary/10"
            />

            {/* Profile circle */}
            <div className="w-72 h-72 lg:w-[380px] lg:h-[380px] rounded-full overflow-hidden glow-border relative">
              <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent z-10 pointer-events-none" />
              <img src={profileImg} alt="Navaneeth Nayak" className="w-full h-full object-cover" width={512} height={512} />
            </div>

            {/* Floating illustration */}
            <motion.img
              src={heroIllustration}
              alt="Developer illustration"
              className="absolute -bottom-6 -right-6 w-28 h-28 lg:w-36 lg:h-36 drop-shadow-2xl"
              animate={{ y: [-8, 8, -8], rotate: [-3, 3, -3] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              width={512}
              height={512}
              loading="lazy"
            />

            {/* Tech badge */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ repeat: Infinity, duration: 3, delay: 1, ease: "easeInOut" }}
              className="absolute -left-4 top-1/2 card-elevated px-3 py-2 rounded-lg glow-border"
            >
              <span className="text-xs font-semibold text-primary">⚡ AI & ML</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest text-muted-foreground/50">Scroll</span>
        <ArrowDown className="text-primary" size={20} />
      </motion.div>
    </section>
  );
};

export default HeroSection;
