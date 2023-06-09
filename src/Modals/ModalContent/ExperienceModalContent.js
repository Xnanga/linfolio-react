import ExperienceCard from './ExperienceCard';
import experienceData from '../../Data/experience-data';

const ExperienceModalContent = () => {
  return (
    <section>
      <h1>Experience</h1>
      <p>
        Here are some of the companies I've worked with in tech to date.
      </p>
      {experienceData.map((entry, idx) => {
        return(
          <ExperienceCard
            key={Math.random() + idx}
            companyName={entry.companyName}
            logoSrc={entry.logoSrc}
            logoAlt={entry.logoAlt}
            startDate={entry.startDate}
            endDate={entry.endDate}
            positions={entry.positions}
          />
        )
      })}
    </section>
  );
}
 
export default ExperienceModalContent;