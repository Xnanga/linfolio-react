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

  return (
    <div className={styles['experience-card']}>
      <img className={styles['experience-card__img']} src={logoSrc} alt={logoAlt} />
      <div className={styles['experience-card__company-details']}>
        <h3>{companyName}</h3>
        <div>
          <span className={styles['experience-card__duration-text']}>
            {`${startDate.toLocaleString('default', { month: 'long'})} ${startDate.getFullYear()} - `}
          </span>
          <span className={styles['experience-card__duration-text']}>
          { endDate
            ? `${endDate.toLocaleString('default', { month: 'long'})} ${endDate.getFullYear()}`
            : 'Present'
          }
          </span>
          { positions.map((position, idx) => {
            const {years: jobYears, months: jobMonths} = 
              calculateJobDuration(position.jobStartDate, position.jobEndDate);
              
            return(
              <div key={Math.random() + idx} className={styles['experience-card__positions']}>
                <div>
                  <div>
                    <h4>{position.jobTitle}</h4>
                    {jobYears >= 1 && <span className={styles['experience-card__duration-text']}>
                      {`${jobYears} ${jobYears > 1 ? 'years' : 'year'} `}
                    </span>}
                    <span className={styles['experience-card__duration-text']}>
                    {`${jobMonths} ${jobMonths > 1 ? 'months' : 'month'}`}
                    </span>
                  </div>
                  <p>{position.jobDescription}</p>
                </div>
              </div>
            );
        }) }
        </div>
      </div>
    </div>
  );
}
 
export default ExperienceCard;