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
        I'm a{' '}
        <span className="highlighted-text">
          junior software engineer, at{' '}
          <a href="https://www.bbc.co.uk/" target="_blank" rel="noreferrer">
            the BBC,
          </a>
        </span>{' '}
        with a strong background in{' '}
        <span className="highlighted-text">
          technical Search Engine Optimisation.
        </span>
      </p>
      <p>
        Building sleek and useful webapps is my passion. Whether it's creating
        an intuitive user interface with{' '}
        <span className="highlighted-text">React</span> or pulling together a
        modern webpage with{' '}
        <span className="highlighted-text">plain old CSS and JavaScript</span>,
        I'm happy.
      </p>
      <p>
        The gap in understanding between professional SEOs and web developers is
        what first inspired me to become a developer. Quickly I realised that I
        relish the problem-solving, creativity, and collaboration involved in
        programming.
      </p>
      <p>
        I take a playful and curious approach to web development. I know that if
        I can envision a project in my head, I can bring it to life in code with
        enough time, effort, and commitment. It's never a question of
        <i> Can I do this?</i>, only <i> How long will this take?</i>
      </p>
      <p>
        I'm continuing to improve my skills and knowledge every day, both in my
        day job and in my free time. These days I'm spending most of my time
        getting to grips with{' '}
        <span className="highlighted-text">
          <a
            href="https://www.mongodb.com/mern-stack"
            target="_blank"
            rel="noreferrer"
          >
            MERN stack
          </a>
        </span>
        , with a view to becoming a confident{' '}
        <span className="highlighted-text">full-stack developer</span>.
      </p>
      <p>
        Always happy to connect and chat - feel free to reach out via my contact
        form.
      </p>
      <p>
        You can find quick links to the most important stuff below - otherwise,
        feel free to click around at your leisure.
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
