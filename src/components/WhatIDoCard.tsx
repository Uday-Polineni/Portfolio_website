import { motion, useTransform, type MotionValue } from "framer-motion";
import { whatIDo } from "../data/content";

type WhatIDoItem = (typeof whatIDo)[number];

type WhatIDoCardProps = {
  item: WhatIDoItem;
  index: number;
  total: number;
  scrollProgress: MotionValue<number>;
};

const WhatIDoCard = ({
  item,
  index,
  total,
  scrollProgress,
}: WhatIDoCardProps) => {
  const sliceStart = index / total;
  const sliceEnd = Math.min((index + 1) / total, 1);
  const targetScale = 1 - (total - index - 1) * 0.04;

  const scale = useTransform(
    scrollProgress,
    [sliceStart, sliceEnd],
    [1, targetScale]
  );

  return (
    <div className="whatido-sticky-slot" style={{ zIndex: index + 1 }}>
      <motion.div className="whatido-sticky-inner" style={{ scale }}>
        <article className="whatido-panel">
          <div className="whatido-panel__title-row whatido-panel__title-row--active">
            <h3>{item.title}</h3>
          </div>

          <div className="whatido-panel__detail">
            <div className="whatido-panel__detail-inner">
              <span className="whatido-panel__dot" aria-hidden />
              <div className="whatido-panel__copy">
                <p>{item.description}</p>
                <ul>
                  {item.bullets.map((bullet, bulletIndex) => (
                    <li key={bullet}>
                      <span>{String(bulletIndex + 1).padStart(2, "0")}</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </article>
      </motion.div>
    </div>
  );
};

export default WhatIDoCard;
