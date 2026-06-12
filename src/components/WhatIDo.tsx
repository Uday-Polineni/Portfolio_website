import { useRef } from "react";
import { useScroll } from "framer-motion";
import { whatIDo } from "../data/content";
import SectionHeading from "./SectionHeading";
import WhatIDoCard from "./WhatIDoCard";
import "./WhatIDo.css";

const WhatIDo = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section className="section whatido" id="what-i-do">
      <SectionHeading
        title="What I do"
        description="Backend systems, data layers, and full-stack delivery."
        gradient
      />

      <div ref={containerRef} className="whatido-stack">
        {whatIDo.map((item, index) => (
          <WhatIDoCard
            key={item.title}
            item={item}
            index={index}
            total={whatIDo.length}
            scrollProgress={scrollYProgress}
          />
        ))}
        <div className="whatido-stack__spacer" aria-hidden />
      </div>
    </section>
  );
};

export default WhatIDo;
