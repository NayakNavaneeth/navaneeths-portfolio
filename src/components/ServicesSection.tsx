import { motion } from "framer-motion";
import { Cpu, PenTool, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Cpu,
    title: "Arduino & Robotics Projects",
    description:
      "Design and develop robotics-based systems using Arduino boards, sensors, and servo motors for automation and educational applications.",
    tags: ["Arduino", "Sensors", "Servo Motors", "Automation"],
  },
  {
    icon: PenTool,
    title: "CAD Design using AutoCAD",
    description:
      "Create precise 2D and 3D engineering drawings and models using AutoCAD for mechanical and technical designs.",
    tags: ["AutoCAD", "2D/3D Models", "Engineering Drawings"],
  },
];

const ServicesSection = () => (
  <section id="services" className="py-24 relative overflow-hidden">
    <div className="absolute top-0 left-0 w-[300px] h-[300px] rounded-full bg-accent/3 blur-[100px]" />

    <div className="container mx-auto px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-2">Services</p>
        <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-12">
          What I <span className="text-gradient">Offer</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            whileHover={{ y: -6 }}
            className="card-elevated p-8 hover:glow-border transition-all group relative overflow-hidden"
          >
            {/* Subtle gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="relative z-10">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-5 group-hover:from-primary/30 group-hover:to-primary/10 transition-all">
                <s.icon className="text-primary" size={28} />
              </div>
              <h3 className="font-heading font-bold text-lg mb-3">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">{s.description}</p>

              <div className="flex flex-wrap gap-2 mb-5">
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] px-2.5 py-1 rounded-full bg-primary/8 text-primary/80 border border-primary/15"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-1 text-sm text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more <ArrowRight size={14} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
