import { skillMap } from "../data/content";
import "./SkillsMarquee.css";

const allSkills = [...new Set(skillMap.flatMap((g) => g.skills))];
const marqueeItems = [...allSkills, ...allSkills];

const SkillsMarquee = () => (
  <section className="skills-marquee" aria-label="Technologies">
    <div className="skills-marquee__track">
      {marqueeItems.map((skill, i) => (
        <span key={`${skill}-${i}`} className="skills-marquee__item">
          {skill}
          <span className="skills-marquee__dot" aria-hidden>
            ✦
          </span>
        </span>
      ))}
    </div>
  </section>
);

export default SkillsMarquee;
