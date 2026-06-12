type SectionHeadingProps = {
  title: string;
  description?: string;
  gradient?: boolean;
};

const SectionHeading = ({
  title,
  description,
  gradient,
}: SectionHeadingProps) => (
  <div className="section-heading">
    <h2 className={gradient ? "section-heading--gradient" : undefined}>{title}</h2>
    {description && <p className="section-heading__desc">{description}</p>}
  </div>
);

export default SectionHeading;
