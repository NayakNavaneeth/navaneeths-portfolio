import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ChevronDown, Layers } from "lucide-react";
import robotImg from "@/assets/quadruped-robot.jpg";

const techs = ["Arduino Nano", "Servo Motors", "Robotics", "Embedded Programming"];

const ProjectsSection = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-primary/3 blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-2">Portfolio</p>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-12">
            <span className="text-gradient">Projects</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="card-elevated overflow-hidden hover:glow-border transition-all group">
            {/* Image with overlay */}
            <div className="aspect-video overflow-hidden relative">
              <img
                src={robotImg}
                alt="Quadruped Robot"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
                width={768}
                height={512}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-4 left-6 flex items-center gap-2">
                <Layers size={14} className="text-primary" />
                <span className="text-xs text-foreground/80 font-medium">Featured Project</span>
              </div>
            </div>

            <div className="p-8">
              <h3 className="font-heading font-bold text-xl mb-2">
                Quadruped Robot using Arduino
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                Designed and built a four-legged robotic system using Arduino Nano, servo motors, and Bluetooth control. The robot performs coordinated walking movements and demonstrates robotics, automation, and motion control principles.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {techs.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <button
                onClick={() => setExpanded(!expanded)}
                className="inline-flex items-center gap-2 text-sm text-primary font-medium hover:underline group/btn"
              >
                <ExternalLink size={16} />
                {expanded ? "Show Less" : "View Details"}
                <motion.div animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.3 }}>
                  <ChevronDown size={14} />
                </motion.div>
              </button>

              <AnimatePresence>
                {expanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-5 pt-5 border-t border-border text-sm text-muted-foreground leading-relaxed space-y-3">
                      <p>
                        This project involved designing a quadruped (four-legged) robot capable of walking and responding to wireless Bluetooth commands. The system uses an Arduino Nano microcontroller, eight servo motors (two per leg), and a Bluetooth module (HC-05) for remote control.
                      </p>
                      <p>
                        The mechanical structure was designed with lightweight materials and 3D-printed joints. Inverse kinematics algorithms were implemented to achieve stable gait patterns.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
