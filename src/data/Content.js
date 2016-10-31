const Content = {
  home: {
    AvatarURL: './src/images/Avatar2.png',
    greetings: [
      'Hey There!',
      'Hello!',
      'What’s Up!?',
      'How is it going?',
      'How ya doing?',
      'Hi!',
    ],
    description: 'I’m Danny. Frontend Developer.',
  },
  about: {
    funFacts: [
      'Soccer Player/Aficionado',
      'U10 Soccer Coach',
      'Huge HIYM Fan',
      'Love to Travel',
      'Love Italian Food',
      'Favorite Soccer Team - FC Barcelona',
      'Currently Reading The Alchemist (Spanish Version)',
      'Currently Watching Game of Thrones',
    ],
    description: 'My name is Daniel Giraldo, but people call me Danny G. I’m a Frontend developer who is eager to break into the industry. I consider myself a creator and that is why I’m very excited to have the opportunity join a team that’s going to challenge me everyday and help me bring my skills to the next level. Apart from Frontend Development, I also have a huge passion for the game of soccer. Since my days as a competitive athlete are over, I recently decided to integrate this passion I have for soccer into my lifestyle and as a result I started coaching U10 team. I’m loving it!',
    techStack: {
      advanced: [
        'js',
        'html',
        'css',
        'sass',
        'jquery',
        'wordpress',
      ],
      intermediate: [
        'react',
        'node',
        'ror',
        'adobe suite',
      ],
      some: [
        'ruby',
        'php',
        'python',
        'java',
      ],
    },

  },
  work: {
    projects: [
      {
        title: 'Portfolio',
        links: {
          website: 'http://danielgiraldo.com/',
          github: 'https://github.com/dgiraldo313/dgiraldo313.github.io',
        },
        description: 'Website you are currently on! After exploring many personal websites online I was inspired to revamp my existing personal website into a more interactive one to give the user a better experience. When coming up with the design, I came up with the idea to replicate the design of my favorite text editor (Atom) and so, I did! Website also dynamically changes greetings, as well as fun facts in the about page.',
        techStack: [
          'react',
          'jquery',
          'sass',
          'html',
        ],
      },
      {
        title: 'NextMatch',
        links: {
          website: 'http://www.nextmatch.site/',
          github: 'https://github.com/dgiraldo313/nextMatch',
        },
        description: 'NextMatch is a web app that lets you find out when/who your favorite soccer team is playing next or show you live scores if the match is currently being played. It even lets you set up a reminder, so that you can get a text before the match starts.',
        techStack: [
          'node',
          'jquery',
          'sass',
          'html',
          'api',
          'databases',
        ],
      },
      {
        title: 'DrewLab',
        links: {
          website: 'https://rar-webapp.herokuapp.com',
          github: 'https://github.com/dgiraldo313/RAR_WebApp',
        },
        description: 'DrewLab is a custom web application built for the Economics Department at Drew University. The research platform a platform consists of a series of games rooted in measuring risk aversion ranging from a balloon that fills with cash to a Deal or No Deal style game. DrewLab will live on at Drew to encourage further collaboration between Drew’s Economics and Computer Science students to create new games and expand the platform for years to come. Give it a try- Use PIN 1234 to access the app!',
        techStack: [
          'ror',
          'html',
          'js',
          'sass',
        ],
      },
      {
        title: 'Web Mashup',
        links: {
          website: 0,
          github: 'https://github.com/dgiraldo313/web_mashup',
        },
        description: 'Web Mashup is an API that integrates into the Drew University Library search results page to provide users with links to PDFs from outside resources.',
        techStack: [
          'ror',
          'html',
          'sass',
          'api',
        ],
      },
      {
        title: 'Jacked Up',
        links: {
          website: 'https://jackedup-test.herokuapp.com',
          github: 'https://github.com/dgiraldo313/web_mashup',
        },
        description: 'Workout application that uses a deck of cards to randomly select exercises for the user to perform.(Currently rebuilding app with React.js)',
        techStack: [
          'ror',
          'html',
          'css',
          'js',
        ],
      },
    ],

    freelance: [
      {
        title: 'W4 Promotions',
        links: {
          website: 'http://w4promotions.com/',
          github: 0,
        },
        description: 'Designed and developed a brand new website to help them carry out their newest marketing campaign. After I was done with this project I moved on to developing a custom Portal where clients can upload large sized zip files, directly to W4 Promotions DropBox account.',
        techStack: [
          'wordpress',
          'php',
          'jquery',
          'sass',
        ],
      },
      {
        title: 'Cranford Soccer Club',
        links: {
          website: 'https://cranfordsoccer.com/',
          github: 0,
        },
        description: 'Worked closely with a soccer club to build a blog like website to help them keep parents informed. The goal was to move away from emailing and instead have all information available in one location. Worked on theme and plugin development to provide a better user experience.',
        techStack: [
          'wordpress',
          'php',
          'jquery',
          'sass',
        ],

      },
      {
        title: 'Positive Publications',
        links: {
          website: 'http://www.positivepublications.us/',
          github: 0,
        },
        description: 'First Website I ever built! Developed and deployed a static, mobile responsive website to help client display portfolio as well as provided services.',
        techStack: [
          'html',
          'css',
          'js',
          'jquery',
        ],

      },
    ],
  },
  contact: {

  },
};

export default Content;
