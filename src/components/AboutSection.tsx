import { motion } from "framer-motion";
import { Bot, Brain, Lightbulb, BookOpen } from "lucide-react";

const highlights = [
  { icon: Bot, text: "Passionate about AI & Robotics" },
  { icon: Brain, text: "Strong interest in Machine Learning" },
  { icon: Lightbulb, text: "Focused on innovation and creativity" },
  { icon: BookOpen, text: "Dedicated to continuous learning" },
];

const AboutSection = () => (
  <section id="about" className="py-24">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-8">About Me</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl"
      >
        <p className="text-muted-foreground leading-relaxed mb-4">
          Navaneeth Nayak is a motivated engineering student specializing in Artificial Intelligence and Machine Learning. He enjoys working on innovative robotics systems and exploring new technologies.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-8">
          He is highly interested in building intelligent systems, solving real-world problems, and learning advanced computational techniques. His passion for continuous learning drives him to experiment with robotics, AI applications, and technical projects that strengthen his engineering skills.
        </p>

        <div className="grid sm:grid-cols-2 gap-4">
          {highlights.map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-3 card-elevated p-4 hover:glow-border transition-all">
              <Icon className="text-primary shrink-0" size={20} />
              <span className="text-sm">{text}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
