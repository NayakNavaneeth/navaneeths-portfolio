import { motion } from "framer-motion";
import { GraduationCap, Calendar, Award } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Engineering",
    field: "Computer Science & Engineering (AI & ML)",
    institution: "Mangalore Institute of Technology and Engineering",
    period: "2024 – 2028 (Expected)",
    current: true,
  },
  {
    degree: "Pre-University Course",
    field: "Shree Durga Parameshwari PU College",
    institution: "Kateel, Mangalore",
    period: "Completed in 2024",
    current: false,
  },
];

const EducationSection = () => (
  <section id="education" className="py-24 relative overflow-hidden">
    <div className="absolute bottom-0 left-0 w-[350px] h-[350px] rounded-full bg-accent/3 blur-[100px]" />

    <div className="container mx-auto px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-2">Education</p>
        <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-12">
          Academic <span className="text-gradient">Journey</span>
        </h2>
      </motion.div>

      <div className="max-w-2xl mx-auto">
        <div className="relative pl-8 border-l-2 border-primary/30 space-y-10">
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative"
            >
              <div className="absolute -left-[21px] top-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                {edu.current ? (
                  <div className="relative">
                    <GraduationCap size={14} className="text-primary-foreground" />
                    <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-accent animate-pulse" />
                  </div>
                ) : (
                  <Award size={14} className="text-primary-foreground" />
                )}
              </div>
              <motion.div
                whileHover={{ scale: 1.02, x: 4 }}
                className="card-elevated p-6 hover:glow-border transition-all"
              >
                {edu.current && (
                  <span className="inline-block text-[10px] uppercase tracking-wider font-bold text-accent bg-accent/10 px-2 py-0.5 rounded-full mb-3 border border-accent/20">
                    Currently Pursuing
                  </span>
                )}
                <h3 className="font-heading font-bold text-lg mb-1">{edu.degree}</h3>
                <p className="text-primary text-sm font-semibold mb-2">{edu.field}</p>
                <p className="text-muted-foreground text-sm mb-3">{edu.institution}</p>
                <div className="flex items-center gap-2 text-muted-foreground text-xs">
                  <Calendar size={14} className="text-primary/60" />
                  <span>{edu.period}</span>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default EducationSection;
