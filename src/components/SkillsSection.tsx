import { motion } from "framer-motion";
import { Code2, Cpu, Wrench, Users } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: React.ElementType;
  skills: { name: string; level: number }[];
}

const categories: SkillCategory[] = [
  {
    title: "Programming Languages",
    icon: Code2,
    skills: [
      { name: "Python", level: 75 },
      { name: "C Programming", level: 70 },
      { name: "Java", level: 60 },
      { name: "MATLAB", level: 55 },
      { name: "HTML", level: 65 },
    ],
  },
  {
    title: "Technologies",
    icon: Cpu,
    skills: [
      { name: "Artificial Intelligence", level: 70 },
      { name: "Machine Learning", level: 65 },
      { name: "Basic Web Development", level: 60 },
      { name: "Data Analysis Fundamentals", level: 55 },
    ],
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    skills: [
      { name: "VS Code", level: 80 },
      { name: "Arduino", level: 75 },
      { name: "Git", level: 65 },
      { name: "AutoCAD", level: 60 },
    ],
  },
  {
    title: "Core Skills",
    icon: Users,
    skills: [
      { name: "Problem Solving", level: 85 },
      { name: "Communication", level: 80 },
      { name: "Teamwork", level: 85 },
      { name: "Leadership", level: 75 },
      { name: "Critical Thinking", level: 80 },
      { name: "Creativity", level: 78 },
    ],
  },
];

const SkillsSection = () => (
  <section id="skills" className="py-24 relative overflow-hidden">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/3 blur-[130px]" />

    <div className="container mx-auto px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-2">Skills</p>
        <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-12">
          My <span className="text-gradient">Expertise</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {categories.map((cat, ci) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: ci * 0.1 }}
            whileHover={{ y: -4 }}
            className="card-elevated p-6 hover:glow-border transition-all group"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <cat.icon className="text-primary" size={20} />
              </div>
              <h3 className="font-heading font-bold text-lg text-primary">{cat.title}</h3>
            </div>
            <div className="space-y-4">
              {cat.skills.map((skill, si) => (
                <div key={skill.name}>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="font-medium">{skill.name}</span>
                    <motion.span
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: ci * 0.1 + si * 0.05 + 0.5 }}
                      className="text-primary text-xs font-semibold"
                    >
                      {skill.level}%
                    </motion.span>
                  </div>
                  <div className="h-2 rounded-full bg-secondary overflow-hidden relative">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: ci * 0.1 + si * 0.05, ease: "easeOut" }}
                      className="h-full rounded-full bg-gradient-to-r from-primary to-[hsl(200,100%,60%)] relative"
                    >
                      <div className="absolute right-0 top-0 w-1 h-full bg-foreground/20 rounded-full" />
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
