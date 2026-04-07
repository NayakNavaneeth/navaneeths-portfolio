import { motion } from "framer-motion";
import { Cpu, PenTool } from "lucide-react";

const services = [
  {
    icon: Cpu,
    title: "Arduino & Robotics Projects",
    description:
      "Design and develop robotics-based systems using Arduino boards, sensors, and servo motors for automation and educational applications.",
  },
  {
    icon: PenTool,
    title: "CAD Design using AutoCAD",
    description:
      "Create precise 2D and 3D engineering drawings and models using AutoCAD for mechanical and technical designs.",
  },
];

const ServicesSection = () => (
  <section id="services" className="py-24">
    <div className="container mx-auto px-6">
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

      <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="card-elevated p-8 hover:glow-border transition-all group"
          >
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
              <s.icon className="text-primary" size={28} />
            </div>
            <h3 className="font-heading font-bold text-lg mb-3">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
