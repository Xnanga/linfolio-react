import ModalButton from '../ModalUI/ModalButton';

import styles from './BioModalContent.module.css';

const BioModalContent = (props) => {
  const openLink = (url) => {
    window.open(url);
  };

  const buttonClickHandler = (e) => {
    props.openModal(e.target.id);
  };

  return (
    <section>
      <h1>Hi there! 👋 I'm Jamie Peutherer</h1>
      <p>
        I work as a{' '}
        <span className="highlighted-text">
          Junior Software Engineer at{' '}
          <a href="https://www.bbc.co.uk/" target="_blank" rel="noreferrer">
            the BBC
          </a>
        </span>{' '}
        in Glasgow. I'm a budding <span className="highlighted-text">full-stack developer</span>
        , mainly working with React, NodeJS, Scala, and MongoDB.
      </p>
      <p>
        As a junior engineer I'm continuing to <span className="highlighted-text">improve my skills and knowledge</span> every day, both in my
        day job and in my free time when I can. These days I'm spending my time working on my <span className="highlighted-text">Scala
        skills</span> and experimenting with <span className="highlighted-text">browser extension development</span>.
      </p>
      <p>
        Outside of the coding space I'm into lifting weights at the gym, practicing my golf swing at the driving range,
        playing video games on my custom-built PC, and going out for a beer in the city.
      </p>
      <p>
        Always happy to connect and chat - feel free to reach out via my contact
        form. Links to all the most important stuff can be found below:
      </p>

      <div className={styles['bio-modal__button-grid']}>
        <ModalButton
          id="CV"
          buttonText="Download CV"
          buttonAction={() =>
            openLink(
              '/documents/jamie-peutherer-lite-cv-frontend-developer.pdf'
            )
          }
        />
        <ModalButton
          id="Portfolio"
          buttonText="Portfolio"
          buttonAction={buttonClickHandler}
        />
        <ModalButton
          id="Stack"
          buttonText="My Toolbox"
          buttonAction={buttonClickHandler}
        />
        <ModalButton
          id="Github"
          buttonText="Github Profile"
          buttonAction={() => openLink('https://github.com/Xnanga')}
        />
        <ModalButton
          id="LinkedIn"
          buttonText="LinkedIn Profile"
          buttonAction={() =>
            openLink('https://www.linkedin.com/in/jami3p3utherer/')
          }
        />
        <ModalButton
          id="Contact"
          buttonText="Contact"
          buttonAction={buttonClickHandler}
        />
      </div>
    </section>
  );
};

export default BioModalContent;
