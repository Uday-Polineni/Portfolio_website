import { useInView } from "../hooks/useInView";
import SkillsHashmap from "./SkillsHashmap";
import SectionHeading from "./SectionHeading";

const Skills = () => {
  const { ref, isInView } = useInView();

  return (
    <section className="section skills" id="skills" ref={ref}>
      <SectionHeading
        title="Tools I work with"
        description="Languages, platforms, and patterns across the backend and cloud stack."
        gradient
      />

      <SkillsHashmap active={isInView} />
    </section>
  );
};

export default Skills;
