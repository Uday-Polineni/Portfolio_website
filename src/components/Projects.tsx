import { useCallback, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiArrowLeft, HiArrowRight, HiArrowUpRight } from "react-icons/hi2";
import { projects } from "../data/content";
import { useInView } from "../hooks/useInView";
import SectionHeading from "./SectionHeading";
import "./Projects.css";

const showcaseProjects = [...projects].sort(
  (a, b) => Number(b.highlight) - Number(a.highlight)
);

const Projects = () => {
  const { ref, isInView } = useInView();
  const [activeIndex, setActiveIndex] = useState(0);
  const project = showcaseProjects[activeIndex];

  const goTo = useCallback((index: number) => {
    const total = showcaseProjects.length;
    setActiveIndex(((index % total) + total) % total);
  }, []);

  return (
    <section className="section projects" id="projects" ref={ref}>
      <SectionHeading
        title="Selected work"
        description="Production backends and full-stack systems — with live demos where deployed."
        gradient
      />

      <motion.div
        className="projects-showcase"
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <button
          type="button"
          className="projects-showcase__nav projects-showcase__nav--prev"
          onClick={() => goTo(activeIndex - 1)}
          aria-label="Previous project"
        >
          <HiArrowLeft />
        </button>

        <AnimatePresence mode="wait">
          <motion.div
            key={project.title}
            className="projects-showcase__slide"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.35 }}
          >
            <div className="projects-showcase__info">
              <span className="projects-showcase__index">
                {String(activeIndex + 1).padStart(2, "0")}
              </span>

              <h3 className="projects-showcase__title">{project.title}</h3>
              <p className="projects-showcase__subtitle">{project.subtitle}</p>

              <p className="projects-showcase__label">Tools &amp; features</p>
              <p className="projects-showcase__tech">{project.tech.join(", ")}</p>

              <ul className="projects-showcase__bullets">
                {project.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>

              <div className="projects-showcase__actions">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn--primary projects-showcase__btn"
                  >
                    Live demo
                    <HiArrowUpRight />
                  </a>
                )}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn--ghost projects-showcase__btn"
                >
                  GitHub
                  <HiArrowUpRight />
                </a>
              </div>
            </div>

            <div className="projects-showcase__preview">
              <div className="browser-frame">
                <div className="browser-frame__bar">
                  <span className="browser-frame__dot browser-frame__dot--red" />
                  <span className="browser-frame__dot browser-frame__dot--yellow" />
                  <span className="browser-frame__dot browser-frame__dot--green" />
                  <span className="browser-frame__url">
                    {project.demoUrl ?? project.link.replace("https://", "")}
                  </span>
                </div>

                <div className="browser-frame__screen">
                  {project.previewImage ? (
                    <>
                      <img
                        src={project.previewImage}
                        alt={`${project.title} preview`}
                        className="browser-frame__shot"
                        loading="lazy"
                      />
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="browser-frame__overlay"
                          aria-label={`Open ${project.title} live demo`}
                        />
                      )}
                    </>
                  ) : (
                    <div className="browser-frame__fallback">
                      <span>{project.title}</span>
                      <p>Source on GitHub</p>
                    </div>
                  )}
                </div>

                <div className="browser-frame__stand" aria-hidden />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <button
          type="button"
          className="projects-showcase__nav projects-showcase__nav--next"
          onClick={() => goTo(activeIndex + 1)}
          aria-label="Next project"
        >
          <HiArrowRight />
        </button>

        <div className="projects-showcase__dots">
          {showcaseProjects.map((item, index) => (
            <button
              key={item.title}
              type="button"
              className={`projects-showcase__dot${
                index === activeIndex ? " projects-showcase__dot--active" : ""
              }`}
              onClick={() => goTo(index)}
              aria-label={`Show ${item.title}`}
              aria-current={index === activeIndex ? "true" : undefined}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
