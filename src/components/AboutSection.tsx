import { motion } from "framer-motion";
import { Bot, Brain, Lightbulb, BookOpen, Zap, Target } from "lucide-react";

const highlights = [
  { icon: Bot, text: "Passionate about AI & Robotics", color: "from-primary to-[hsl(200,100%,60%)]" },
  { icon: Brain, text: "Strong interest in Machine Learning", color: "from-primary to-[hsl(160,80%,50%)]" },
  { icon: Lightbulb, text: "Focused on innovation and creativity", color: "from-accent to-[hsl(45,100%,60%)]" },
  { icon: BookOpen, text: "Dedicated to continuous learning", color: "from-primary to-[hsl(220,80%,60%)]" },
  { icon: Zap, text: "Quick learner and problem solver", color: "from-accent to-[hsl(30,100%,55%)]" },
  { icon: Target, text: "Goal-oriented and disciplined", color: "from-primary to-[hsl(180,80%,50%)]" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4 } },
};

const AboutSection = () => (
  <section id="about" className="py-24 relative overflow-hidden">
    {/* Background accent */}
    <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-primary/3 blur-[120px]" />

    <div className="container mx-auto px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-8">About Me</p>
      </motion.div>

      <div className="grid lg:grid-cols-5 gap-12">
        {/* Bio text - takes 3 cols */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-3"
        >
          <p className="text-lg text-foreground/90 leading-relaxed mb-4 font-medium">
            Navaneeth Nayak is a motivated engineering student specializing in{" "}
            <span className="text-gradient font-semibold">Artificial Intelligence</span> and{" "}
            <span className="text-gradient font-semibold">Machine Learning</span>.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            He enjoys working on innovative robotics systems and exploring new technologies. He is highly interested in building intelligent systems, solving real-world problems, and learning advanced computational techniques.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            His passion for continuous learning drives him to experiment with robotics, AI applications, and technical projects that strengthen his engineering skills.
          </p>
        </motion.div>

        {/* Highlights - takes 2 cols */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3"
        >
          {highlights.map(({ icon: Icon, text, color }) => (
            <motion.div
              key={text}
              variants={itemVariants}
              whileHover={{ x: 6, scale: 1.02 }}
              className="flex items-center gap-3 card-elevated p-4 hover:glow-border transition-all cursor-default group"
            >
              <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${color} flex items-center justify-center shrink-0 opacity-80 group-hover:opacity-100 transition-opacity`}>
                <Icon className="text-primary-foreground" size={16} />
              </div>
              <span className="text-sm">{text}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
