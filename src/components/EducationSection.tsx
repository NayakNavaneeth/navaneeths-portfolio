import { motion } from "framer-motion";
import { GraduationCap, Calendar } from "lucide-react";

const EducationSection = () => (
  <section id="education" className="py-24">
    <div className="container mx-auto px-6">
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

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto"
      >
        <div className="relative pl-8 border-l-2 border-primary/30 space-y-10">
          {/* B.E. */}
          <div className="relative">
            <div className="absolute -left-[21px] top-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
              <GraduationCap size={14} className="text-primary-foreground" />
            </div>
            <div className="card-elevated p-6 hover:glow-border transition-all">
              <h3 className="font-heading font-bold text-lg mb-1">
                Bachelor of Engineering
              </h3>
              <p className="text-primary text-sm font-semibold mb-2">
                Computer Science & Engineering (AI & ML)
              </p>
              <p className="text-muted-foreground text-sm mb-3">
                Mangalore Institute of Technology and Engineering
              </p>
              <div className="flex items-center gap-2 text-muted-foreground text-xs">
                <Calendar size={14} />
                <span>2024 – 2028 (Expected)</span>
              </div>
            </div>
          </div>

          {/* PUC */}
          <div className="relative">
            <div className="absolute -left-[21px] top-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
              <GraduationCap size={14} className="text-primary-foreground" />
            </div>
            <div className="card-elevated p-6 hover:glow-border transition-all">
              <h3 className="font-heading font-bold text-lg mb-1">
                Pre-University Course
              </h3>
              <p className="text-primary text-sm font-semibold mb-2">
                Shree Durga Parameshwari PU College
              </p>
              <p className="text-muted-foreground text-sm mb-3">
                Kateel, Mangalore
              </p>
              <div className="flex items-center gap-2 text-muted-foreground text-xs">
                <Calendar size={14} />
                <span>Completed in 2024</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default EducationSection;
