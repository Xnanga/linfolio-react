import ModalIconList from '../ModalUI/ModalIconList';

const StackModalContent = () => {
  const webDevListData = [
    {
      imgSrc: '/icons/html5-logo.svg',
      imgAlt: 'The HTML5 Logo',
      linkUrl: 'https://en.wikipedia.org/wiki/HTML5',
      title: 'HTML5',
    },
    {
      imgSrc: '/icons/css3-logo.svg',
      imgAlt: 'The CSS3 Logo',
      linkUrl: 'https://en.wikipedia.org/wiki/CSS',
      title: 'CSS3',
    },
    {
      imgSrc: '/icons/sass-logo.svg',
      imgAlt: 'The SASS Logo',
      linkUrl: 'https://sass-lang.com/',
      title: 'SASS',
    },
    {
      imgSrc: '/icons/javascript-logo.svg',
      imgAlt: 'The JavaScript Logo',
      linkUrl: 'https://en.wikipedia.org/wiki/JavaScript',
      title: 'JavaScript',
    },
    {
      imgSrc: '/icons/reactjs-logo.svg',
      imgAlt: 'The React Logo',
      linkUrl: 'https://reactjs.org/',
      title: 'React',
    },
    {
      imgSrc: '/icons/npm-logo.svg',
      imgAlt: 'The NPM Logo',
      linkUrl: 'https://www.npmjs.com/',
      title: 'Node Package Manager',
    },
    {
      imgSrc: '/icons/git-logo.svg',
      imgAlt: 'The Git Logo',
      linkUrl: 'https://git-scm.com/',
      title: 'Git',
    },
    {
      imgSrc: '/icons/github-logo.svg',
      imgAlt: 'The Github Logo',
      linkUrl: 'https://github.com/',
      title: 'Github',
    },
  ];

  const seoListData = [
    {
      imgSrc: '/icons/sf-logo.jpg',
      imgAlt: 'The Screaming Frog Logo',
      linkUrl: 'https://www.screamingfrog.co.uk/seo-spider/',
      title: 'Screaming Frog',
    },
    {
      imgSrc: '/icons/semrush-icon.png',
      imgAlt: 'The SEMrush Logo',
      linkUrl: 'https://www.semrush.com/',
      title: 'SEMrush',
    },
    {
      imgSrc: '/icons/ahrefs-icon.png',
      imgAlt: 'The Ahrefs Logo',
      linkUrl: 'https://ahrefs.com/',
      title: 'Ahrefs',
    },
    {
      imgSrc: '/icons/accuranker-icon.png',
      imgAlt: 'The Accuranker Logo',
      linkUrl: 'https://www.accuranker.com/',
      title: 'Accuranker',
    },
    {
      imgSrc: '/icons/keywordtool-icon.png',
      imgAlt: 'The KeywordTool.io Logo',
      linkUrl: 'https://keywordtool.io/',
      title: 'KeywordTool.io',
    },
  ];

  const cmsListData = [
    {
      imgSrc: '/icons/wordpress-logo.svg',
      imgAlt: 'The WordPress Logo',
      linkUrl: 'https://wordpress.com/',
      title: 'WordPress',
    },
    {
      imgSrc: '/icons/magento-logo.svg',
      imgAlt: 'The Magento Logo',
      linkUrl:
        'https://business.adobe.com/uk/products/magento/magento-commerce.html',
      title: 'Magento 2 / Commerce',
    },
    {
      imgSrc: '/icons/bigcommerce-logo.svg',
      imgAlt: 'The BigCommerce Logo',
      linkUrl: 'https://www.bigcommerce.com/',
      title: 'BigCommerce',
    },
    {
      imgSrc: '/icons/shopify-logo.svg',
      imgAlt: 'The Shopify Logo',
      linkUrl: 'https://www.shopify.co.uk/',
      title: 'Shopify',
    },
    {
      imgSrc: '/icons/joomla-icon.png',
      imgAlt: 'The Joomla Logo',
      linkUrl: 'https://www.joomla.org/',
      title: 'Joomla',
    },
  ];

  const trackingListData = [
    {
      imgSrc: '/icons/google-analytics-logo.svg',
      imgAlt: 'The Google Analytics Logo',
      linkUrl: 'https://analytics.google.com/analytics/web/',
      title: 'Google Analytics',
    },
    {
      imgSrc: '/icons/google-tag-manager-logo.svg',
      imgAlt: 'The Google Analytics Logo',
      linkUrl: 'https://tagmanager.google.com/',
      title: 'Google Tag Manager',
    },
    {
      imgSrc: '/icons/google-search-console-logo.svg',
      imgAlt: 'The Google Search Console Logo',
      linkUrl: 'https://search.google.com/search-console/about',
      title: 'Google Search Console',
    },
    {
      imgSrc: '/icons/data-studio-logo.svg',
      imgAlt: 'The Google Data Studio Logo',
      linkUrl: 'https://datastudio.google.com/',
      title: 'Google Data Studio',
    },
    {
      imgSrc: '/icons/optimize-icon.png',
      imgAlt: 'The Google Optimize Logo',
      linkUrl: 'https://datastudio.google.com/',
      title: 'Google Optimize',
    },
    {
      imgSrc: '/icons/crazyegg-logo.svg',
      imgAlt: 'The CrazyEgg Logo',
      linkUrl: 'https://www.crazyegg.com/',
      title: 'CrazyEgg',
    },
    {
      imgSrc: '/icons/hotjar-icon.png',
      imgAlt: 'The HotJar Logo',
      linkUrl: 'https://www.hotjar.com/',
      title: 'HotJar',
    },
  ];

  const horizonListData = [
    {
      imgSrc: '/icons/nodejs-logo.svg',
      imgAlt: 'The NodeJS Logo',
      linkUrl: 'https://nodejs.org/en/',
      title: 'NodeJS',
    },
    {
      imgSrc: '/icons/express-icon.png',
      imgAlt: 'The ExpressJS Logo',
      linkUrl: 'https://expressjs.com/',
      title: 'ExpressJS',
    },
    {
      imgSrc: '/icons/mongoose-icon.png',
      imgAlt: 'The MongooseJS Logo',
      linkUrl: 'https://mongoosejs.com/',
      title: 'MongooseJS',
    },
    {
      imgSrc: '/icons/mongodb-icon.png',
      imgAlt: 'The MongoDB Logo',
      linkUrl: 'https://www.mongodb.com/',
      title: 'MongoDB',
    },
    {
      imgSrc: '/icons/typescript-icon.png',
      imgAlt: 'The TypeScript Logo',
      linkUrl: 'https://www.typescriptlang.org/',
      title: 'TypeScript',
    },
    {
      imgSrc: '/icons/puppeteer-icon.png',
      imgAlt: 'The Puppeteer Logo',
      linkUrl: 'https://developers.google.com/web/tools/puppeteer',
      title: 'Puppeteer',
    },
    {
      imgSrc: '/icons/discordjs-icon.png',
      imgAlt: 'The DiscordJS Logo',
      linkUrl: 'https://discord.js.org/',
      title: 'DiscordJS',
    },
  ];

  return (
    <section>
      <h1>My Toolbox</h1>
      <p>
        From creating interactive webapps from scratch to analysing data for
        online campaigns, I've built up strong experience across a range of
        tools and languages.
      </p>
      <h2>Frontend Web Development</h2>
      <p>
        React is now my go-to for SPAs and projects requiring a complex UI.
        Otherwise I'm happy using plain old vanilla JavaScript with some useful
        libraries here and there.
      </p>
      <ModalIconList listData={webDevListData} />
      <h2>Search Engine Optimisation</h2>
      <p>
        Technical SEO is my foundation. I've used a ton of useful tools and
        programs over the years to crawl and analyse websites, looking for ways
        to maximise ranking potential in Google Search.
      </p>
      <ModalIconList listData={seoListData} />
      <h2>Content Management Systems</h2>
      <p>
        From Magento to WordPress, I've worked with and have managed a range of
        different CMSs - each with their own obstacles, challenges, and ways of
        working.
      </p>
      <ModalIconList listData={cmsListData} />
      <h2>Data Analysis & Tracking</h2>
      <p>
        Data-driven planning, strategy, and development is core to my way of
        working. I'm always looking for new useful data sources and creative
        ways of communicating that data to stakeholders.
      </p>
      <ModalIconList listData={trackingListData} />
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
