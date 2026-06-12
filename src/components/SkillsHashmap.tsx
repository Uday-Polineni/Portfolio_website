import { motion } from "framer-motion";
import { skillMap } from "../data/content";
import "./SkillsHashmap.css";

type SkillsHashmapProps = {
  active: boolean;
};

const SkillsHashmap = ({ active }: SkillsHashmapProps) => (
  <div className="skills-hashmap">
    <motion.span
      className="skills-hashmap__brace"
      initial={{ opacity: 0 }}
      animate={active ? { opacity: 1 } : {}}
      transition={{ duration: 0.35 }}
    >
      {"{"}
    </motion.span>

    <div className="skills-hashmap__body">
      {skillMap.map((entry, index) => (
        <motion.div
          key={entry.category}
          className="skills-hashmap__entry"
          initial={{ opacity: 0, x: -12 }}
          animate={active ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.08 + index * 0.06 }}
        >
          <span className="skills-hashmap__key">&quot;{entry.category}&quot;</span>
          <span className="skills-hashmap__colon">:</span>
          <span className="skills-hashmap__bracket">[</span>
          <span className="skills-hashmap__list">
            {entry.skills.map((skill, skillIndex) => (
              <span key={skill} className="skills-hashmap__skill">
                &quot;{skill}&quot;
                {skillIndex < entry.skills.length - 1 && (
                  <span className="skills-hashmap__comma">, </span>
                )}
              </span>
            ))}
          </span>
          <span className="skills-hashmap__bracket">]</span>
          {index < skillMap.length - 1 && (
            <span className="skills-hashmap__comma">,</span>
          )}
        </motion.div>
      ))}
    </div>

    <motion.span
      className="skills-hashmap__brace"
      initial={{ opacity: 0 }}
      animate={active ? { opacity: 1 } : {}}
      transition={{ duration: 0.35, delay: 0.5 }}
    >
      {"}"}
    </motion.span>
  </div>
);

export default SkillsHashmap;
