import { useRef, type CSSProperties } from "react";
import { motion } from "framer-motion";
import { careerTimeline } from "../data/content";
import { useInView } from "../hooks/useInView";
import { useScrollProgress } from "../hooks/useScrollProgress";
import "./Experience.css";

const Experience = () => {
  const { ref, isInView } = useInView();
  const flowRef = useRef<HTMLDivElement>(null);
  const scrollProgress = useScrollProgress(flowRef);

  return (
    <section className="section experience" id="experience" ref={ref}>
      <motion.h2
        className="experience__title"
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        My career <span>&amp;</span>
        <br />
        experience
      </motion.h2>

      <div
        ref={flowRef}
        className="experience-flow"
        style={{ "--timeline-progress": scrollProgress } as CSSProperties}
      >
        <div className="experience-flow__timeline" aria-hidden>
          <div className="experience-flow__track" />
          <div className="experience-flow__line" />
          <div className="experience-flow__dot" />
        </div>

        {careerTimeline.map((item, index) => (
          <motion.article
            key={`${item.kind}-${item.organization}-${item.period}`}
            className={`experience-flow__row ${
              item.kind === "education" ? "experience-flow__row--education" : ""
            }`}
            initial={{ opacity: 0, y: 28 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 + index * 0.12 }}
          >
            <h3 className="experience-flow__year">{item.yearLabel}</h3>

            <div className="experience-flow__content">
              {item.kind === "education" && (
                <span className="experience-flow__tag">Education</span>
              )}
              <h4>{item.role}</h4>
              <h5>{item.organization}</h5>
              <span className="experience-flow__period">{item.period}</span>
              {item.kind === "work" && item.highlights && (
                <p className="experience-flow__desc">
                  {item.highlights.slice(0, 3).join(" ")}
                </p>
              )}
              {item.kind === "education" && item.detail && (
                <p className="experience-flow__desc">{item.detail}</p>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Experience;
