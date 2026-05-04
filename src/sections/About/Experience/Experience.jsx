import GridOverlay from "../../../components/GridOverlay/GridOverlay";
import "./Experience.scss";

const experiences = [
  {
    id: 1,
    year: "2024 — Now",
    company: "MMCY Tech",
    site: "www.mmcy.com/",
    role: "~~Intern~~ Junior Developer",
    desc: "I develop websites and web applications for clients ranging from small businesses to large enterprises.",
  },
];

const Experience = () => {
  const parseStrikethrough = (text) => {
    const parts = text.split(/(~~.*?~~)/g);
    return parts.map((part, index) => {
      if (part.startsWith("~~") && part.endsWith("~~")) {
        return (
          <s key={index} className="experience__role-scratched">
            {part.slice(2, -2)}
          </s>
        );
      }
      return part;
    });
  };

  return (
    <section className="experience" id="experience">
      <GridOverlay />

      <div className="experience__container">
        <div className="experience__header">
          <span className="experience__label">.work experience</span>
          <div className="experience__header-line">
            <div className="experience__circle" />
          </div>
        </div>

        {/* Experience List */}
        <div className="experience__list">
          {experiences.map((exp) => (
            <div className="experience__item" key={exp.id}>
              <div className="experience__col-year">
                <span className="experience__year">{exp.year}</span>
              </div>

              <div className="experience__col-info">
                <a href={`https://${exp.site}`} target="_blank">
                  <h3 className="experience__company-name">{exp.company}</h3>
                </a>
                <span className="experience__company-role">
                  {parseStrikethrough(exp.role)}
                </span>
              </div>

              <div className="experience__col-desc">
                <p className="experience__description">{exp.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
