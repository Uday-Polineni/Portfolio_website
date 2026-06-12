import { motion } from "framer-motion";
import { about, education, profile } from "../data/content";
import RequestFlowSimulator from "./RequestFlowSimulator";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero" id="top">
      <div className="hero__grid">
        <motion.div
          className="hero__content"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="hero__eyebrow">{profile.tagline}</p>
          <p className="hero__greeting">Hi, I&apos;m</p>
          <h1 className="hero-heading">{profile.shortName}</h1>
          <p className="hero__family-name">
            {profile.name.replace(profile.shortName, "").trim()}
          </p>
          {education[0].heroLine && (
            <p className="hero__credential">{education[0].heroLine}</p>
          )}
          <p className="hero__intro">{about}</p>
        </motion.div>

        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <RequestFlowSimulator />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
