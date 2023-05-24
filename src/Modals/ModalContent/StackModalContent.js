import ModalIconList from '../ModalUI/ModalIconList';
import { 
  frontendData,
  backendData,
  otherToolsData,
  cmsListData, 
  horizonListData 
} from '../../Data/stack-data';

const StackModalContent = () => {

  return (
    <section>
      <h1>My Toolbox</h1>
      <p>
        From creating dynamic webapps from scratch to getting APIs up and running, 
        I've built up strong experience across a range of tools and languages.
      </p>
      <h2>Frontend</h2>
      <p>
        React is my go-to for SPAs and projects requiring a complex UI.
        Otherwise I'm happy using plain old vanilla JavaScript with some useful
        libraries here and there.
      </p>
      <ModalIconList listData={frontendData} />
      <h2>Backend</h2>
      <p>
        NodeJS, Scala, and MongoDB are my weapons of choice for building and maintaining
        backend services. I'm still working to progress my skills in this area of development.
      </p>
      <ModalIconList listData={backendData} />
      <h2>CI/CD & Other Tools</h2>
      <p>
        There are a lot of auxiliary tools and applications which make working as a developer
        much easier and more enjoyable. Here are some I have varying levels of experience with.
      </p>
      <ModalIconList listData={otherToolsData} />
      <h2>Content Management Systems</h2>
      <p>
        From Magento to WordPress, I've worked with and have managed a range of
        different CMSs - each with their own obstacles, challenges, and ways of
        working.
      </p>
      <ModalIconList listData={cmsListData} />
      <h2>On the Horizon</h2>
      <p>
        Some languages, libraries, and more I'm interested in learning about in
        future.
      </p>
      <ModalIconList listData={horizonListData} />
    </section>
  );
};

export default StackModalContent;
