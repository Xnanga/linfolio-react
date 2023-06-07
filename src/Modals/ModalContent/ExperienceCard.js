import styles from './ExperienceCard.module.css'

const calculateJobDuration = (startDate, endDate) => {
  let endDateToUse;
  endDate ? endDateToUse = endDate : endDateToUse = new Date();

  const monthsSinceStartDate = endDateToUse.getMonth() - startDate.getMonth();
  const yearsSinceStartDate = endDateToUse.getYear() - startDate.getYear();
  const totalMonthsSinceStartDate = monthsSinceStartDate + yearsSinceStartDate * 12;

  const years = Math.floor(totalMonthsSinceStartDate / 12);
  const months = totalMonthsSinceStartDate % 12;
  
  return { years, months };
}

const ExperienceCard = (
    {companyName, logoSrc, logoAlt, startDate, endDate, positions}
  ) => {
  const {years, months} = calculateJobDuration(startDate, endDate);

  return (
    <div>
      <div>
        <img src={logoSrc} alt={logoAlt} />
        <div>
          <h3>{companyName}</h3>
          <div>
            {years >= 1 && <span>
              {years} years
            </span>}
            <span>
              {months > 0 ? months : 1} months
            </span>
          </div>
        </div>
      </div>
      { positions.map((position, idx) => {
        return(
          <div key={Math.random() + idx}>
            <div>
              LINE
            </div>
            <div>
              <h4>{position.jobTitle}</h4>
              <p>{position.jobDescription}</p>
            </div>
          </div>
        );
      }) }
    </div>
  );
}
 
export default ExperienceCard;