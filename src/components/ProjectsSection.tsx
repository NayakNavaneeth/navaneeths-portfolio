import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import robotImg from "@/assets/quadruped-robot.jpg";

const ProjectsSection = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-2">My Client</p>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-12">
            <span className="text-gradient">Projects</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto card-elevated overflow-hidden hover:glow-border transition-all"
        >
          <div className="aspect-video overflow-hidden">
            <img
              src={robotImg}
              alt="Quadruped Robot"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              loading="lazy"
              width={768}
              height={512}
            />
          </div>
          <div className="p-8">
            <h3 className="font-heading font-bold text-xl mb-2">
              Quadruped Robot using Arduino
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Designed and built a four-legged robotic system using Arduino Nano, servo motors, and Bluetooth control. The robot performs coordinated walking movements and demonstrates robotics, automation, and motion control principles.
            </p>

            <div className="flex flex-wrap gap-2 mb-5">
              {["Arduino Nano", "Servo Motors", "Robotics", "Embedded Programming"].map((t) => (
                <span key={t} className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                  {t}
                </span>
              ))}
            </div>

            <button
              onClick={() => setExpanded(!expanded)}
              className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
            >
              <ExternalLink size={16} />
              {expanded ? "Show Less" : "View Details"}
            </button>

            <AnimatePresence>
              {expanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-4 text-sm text-muted-foreground leading-relaxed"
                >
                  <p>
                    This project involved designing a quadruped (four-legged) robot capable of walking and responding to wireless Bluetooth commands. The system uses an Arduino Nano microcontroller, eight servo motors (two per leg), and a Bluetooth module (HC-05) for remote control. The mechanical structure was designed with lightweight materials and 3D-printed joints. Inverse kinematics algorithms were implemented to achieve stable gait patterns.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
