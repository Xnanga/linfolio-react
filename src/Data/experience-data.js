const experienceData = [
  {
    companyName: 'British Broadcasting Corporation',
    logoSrc: './icons/bbc-logo.jpg',
    logoAlt: 'The BBC Logo',
    startDate: new Date('2022-07-01'),
    endDate: null,
    positions: [
      {
        jobTitle: 'Software Engineer',
        jobDescription: <>
          <p>Building on my previous role in the BBC's Content Publishing division, I continue working as a full-stack developer
            with additional responsibilities to the ones I had as a junior engineer. These include:
            <ul>
              <li>Leading engineering works for particular features and stories</li>
              <li>Holding various team ceremonies e.g. standups, tech feasibilities, retros</li>
              <li>Carrying out interviews and technical tests as part of recruitment of new engineers</li>
              <li>Onboarding new engineers into the team</li>
              <li>Mentoring and supporting more junior members of the department</li>
              <li>Engaging with consumers and stakeholders on current and future development works</li>
              <li>Increased contributions to architectural and data modelling decisions</li>
            </ul>
          </p>
        </>,
        jobStartDate: new Date('2023-11-01'),
        jobEndDate: null,
      },
      {
        jobTitle: 'Junior Software Engineer',
        jobDescription: <>
          <p>Working as a full-stack developer in the BBC's Content Publishing division, 
            I help maintain a plethora of tools and services that editorial staff rely on to 
            curate their content across the BBC website. This content includes news and sports articles, 
            iPlayer episodes, Sounds podcasts, weather information, and Bitesize resources.</p>
          <p>I contribute to the efforts of a dedicated team of software engineers, QA testers, UX designers, 
            technical architects, business analysts, and product managers. This role has me working mostly
             with the following technologies: React, Scala, Node.js, GraphQL, and MongoDB.</p>
          <p>As a junior member of the team, my responsibilities include:</p>
          <ul>
            <li>Contributing to architectural decisions and technical feasibility discussions</li>
            <li>Engineering scalable and efficient code solutions for new features</li>
            <li>Maintaining our codebases and fixing bugs in our applications</li>
            <li>Reviewing the code of other software engineers and providing feedback</li>
            <li>Creating and updating internal documentation</li>
            <li>Testing the implementations of other software engineers</li>
            <li>Supporting and mentoring newly hired software engineers</li>
          </ul>
          <p>Outside of the regular day-to-day tasks, I also:</p>
          <ul>
            <li>Champion accessibility in terms of UI design and implementation</li>
            <li>Give internal presentations and courses on areas I have expertise in</li>
            <li>Use study/innovation days to learn new technologies</li>
          </ul>
        </>,
        jobStartDate: new Date('2022-07-01'),
        jobEndDate: new Date('2023-11-01'),
      },
    ],
  },
];

export default experienceData;
