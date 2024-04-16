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
          Software Engineer at{' '}
          <a href="https://www.bbc.co.uk/" target="_blank" rel="noreferrer">
            the BBC
          </a>
        </span>{' '}
        in Glasgow. I'm an enthusiastic <span className="highlighted-text">full-stack developer</span>
        , mainly working with React, GraphQL, NodeJS, Scala, and MongoDB.
      </p>
      <p>
        As an engineer I'm continuing to <span className="highlighted-text">improve my skills and knowledge</span> every day, both in my
        day job and in my free time when I can. These days I'm spending my time exploring some more low-level languages, <span className="highlighted-text">like Rust</span>, and finding ways
        to <span className="highlighted-text">make code more efficient</span> across the stack.
      </p>
      <p>
        Outside of the coding space I'm into getting out on the golf course for 18 holes (weather permitting),
        playing video games on my custom-built PC, and going out for good food and a beer in the city.
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
              '/documents/jamie-peutherer-lite-cv-full-stack-developer-v1.1.pdf'
            )
          }
        />
        <ModalButton
          id="Experience"
          buttonText="Experience"
          buttonAction={buttonClickHandler}
        />
        <ModalButton
          id="Portfolio"
          buttonText="Portfolio"
          buttonAction={buttonClickHandler}
        />
        <ModalButton
          id="Stack"
          buttonText="Toolbox"
          buttonAction={buttonClickHandler}
        />
        <ModalButton
          id="Github"
          buttonText="Github"
          buttonAction={() => openLink('https://github.com/Xnanga')}
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
