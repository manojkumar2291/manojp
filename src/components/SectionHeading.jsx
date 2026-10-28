import PropTypes from "prop-types";
export default function SectionHeading({
  number,
  eyebrow,
  title,
  description,
}) {
  return (
    <div className="section-heading">
      <p className="eyebrow">
        <span>{number} /</span> {eyebrow}
      </p>
      <h2>{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}
SectionHeading.propTypes = {
  number: PropTypes.string,
  eyebrow: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
};
