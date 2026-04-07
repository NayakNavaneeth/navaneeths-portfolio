import { motion } from "framer-motion";

interface SkillCategory {
  title: string;
  skills: { name: string; level: number }[];
}

const categories: SkillCategory[] = [
  {
    title: "Programming Languages",
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
    skills: [
      { name: "Artificial Intelligence", level: 70 },
      { name: "Machine Learning", level: 65 },
      { name: "Basic Web Development", level: 60 },
      { name: "Data Analysis Fundamentals", level: 55 },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "VS Code", level: 80 },
      { name: "Arduino", level: 75 },
      { name: "Git", level: 65 },
      { name: "AutoCAD", level: 60 },
    ],
  },
  {
    title: "Core Skills",
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
  <section id="skills" className="py-24">
    <div className="container mx-auto px-6">
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
            className="card-elevated p-6 hover:glow-border transition-all"
          >
            <h3 className="font-heading font-bold text-lg mb-5 text-primary">{cat.title}</h3>
            <div className="space-y-4">
              {cat.skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between text-sm mb-1">
                    <span>{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-secondary overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="h-full rounded-full bg-primary"
                    />
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
