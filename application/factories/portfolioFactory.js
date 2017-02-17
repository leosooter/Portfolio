portfolioApp.factory("projectFactory", [function(){

  var factory = {};
  var overview = {
    name : 'Overview',
    title : 'Overview',
  };

  var algoApp = {
    name : 'algoApp',
    title : 'Algorithm Challenge',
    repoUrl : 'https://github.com/leosooter/Algo-Challenge',
    liveUrl : null,
    // iframe : false,
    screenShot : 'assets/images/projects/algo-app/chart.png',
    thumbnail : 'assets/images/projects/algo-app/chart-small.png',
    description : [`Algorithm Challenge is a single-page MEAN app designed to allow users to upload and test algorithm solutions.`,
      `Users can upload and save their algorithm solutions as javascript files. Every uploaded solution is automatically checked against a series of edge-cases and speed-tested.`,
      `The Algo-Arena allows for side-by-side performance comparisons of different solutions to the same challenge.`],
    technologies : ['Angular', 'Node.js/Express', 'Mongo/Mongoose', 'Bootstrap'],
    details : [
      overview,
      {
        name : 'Angular',
        title : 'Angular',
        screenShot : 'assets/images/projects/algo-app/main.png',
        description : [`The app uses Angular to deliver content seemlessly.`,`Plugins like Angular-Chart allow users to view detailed performance data on their algorithm solutions.`],
      },
      {
        name : 'Node.js/Express',
        title : 'Node.js/Express',
        screenShot : null,
        description : [`The app is run on Node/Express with a Mongo DB.`, `Both the server-side and client-side are fully modularized to make the app more maintainable and scalable.`],
      },
      {
        name : 'Mongo/Mongoose',
        title : 'Mongo/Mongoose Database',
        screenShot : null,
        description : [`The app uses a Mongo No-SQL Database coupled with Mongoose to allow for easy data validation.`,
          `The Multer module is used to store and retrieve user-generated javascript files from local storage.`],
      },
      {
        name : 'Bootstrap',
        title : 'Bootstrap and UI-Bootstrap',
        screenShot : null,
        description : [`The front-end is built with both Angular and Bootstrap to create a fully responsive site.`,
          `Using the UI-Bootstrap plugin for Angular allowed me to leverage the power of both Angular and Bootstrap without the overhead of JQuery.`],
      },
      {
        name : 'Security',
        title : 'Web Security',
        screenShot : null,
        description : [`The app uses web-tokens to protect routes and verify login. BCrypt is used to hash all passwords before storing in the Database.`,
          `Allowing users to upload javascript files and running those files on the back-end poses a security risk. Phase two of this project will be implementing a sandbox to safely run user files.`],
      },
    ],
  };

  var digitalReserve = {
    name : 'digitalReserve',
    title : 'Digital Reserve',
    repoUrl : 'https://github.com/leosooter/digital-reserve',
    liveUrl : 'https://leosooter.github.io/digital-reserve/',
    // iframe : false,
    screenShot : 'assets/images/projects/digital-reserve/main-wide.png',
    thumbnail : 'assets/images/projects/digital-reserve/widescreen.png',
    description : [`Digital reserve is a design for an online wildlife conservation fundraising platform.`, `The site allows users to view image galleries of african animals captured by motion-sensing cameras, and to sponsor their own camera.`, `The site is entirely handcoded including a custom built Javascript menu animation.`],
    technologies : ['HTML', 'Scss', 'JQuery'],
    details : [
      overview,
      {
        name : 'Responsive',
        title : 'Mobile-First Design',
        screenShot : 'assets/images/projects/digital-reserve/responsive-detail.png',
        description : [`I used Scss mixins to create a site that scales naturaly and provides a great user experience on any screen.`],
      },
      {
        name : 'Javascript',
        title : 'Javascript',
        screenShot : null,
        description : [`This site's nav-bar uses a custom made javascript app to highlight links with randomly swarming particles.
            The app can be fully configured to adjust speed, color and movement,
            and it can be added to any website through css classes without any other alteration to the DOM.`],
      },
    ],
  };

  var messageBoard = {
    name : 'messageBoard',
    title : 'Message Board',
    //iframe : false,
    repoUrl : null,
    liveUrl : null,
    //url : 'https://leosooter.github.io/blackjack/',
    screenShot : 'assets/images/projects/message-board/main.png',
    thumbnail : 'assets/images/projects/message-board/main.png',
    description : [`Message allows users to create accounts, post messages and comment on other's messages.`,
      `I used Flask with the Jinja templating system to create a simple and light-weight server for this project.`],
    technologies : ['Python', 'Flask', 'SQL', 'Security'],
    details : [
      overview,
      // {
      //   name : 'Flask',
      //   title : 'Flask',
      //   screenShot : null,
      //   description : [`I used Flask with the Jinja templating system to create a simple and light-weight server for this project.`],
      // },
      {
        name : 'SQL',
        title : 'SQL Querries',
        screenShot : null,
        description : [`The site uses a MySql Database.`,
          `I used some more advanced SQL querries to add features like displaying day-of-week rather than date for newer posts.`],
      },
      {
        name : 'Security',
        title : 'Security',
        screenShot : null,
        description : [`I created custom form-validations using regex, with flash-messaging to provide user feedback. Logic in the Jinja templating ensures that all error messages are displayed next to the appropriate field.`,
          `All passwords are hashed with Bcrypt before being storing in the database.`],
      }
    ],
  };

  var blackJack = {
    name : 'blackjack',
    title : 'BlackJack Game',
    //iframe : false,
    repoUrl : 'https://github.com/leosooter/blackjack',
    liveUrl : 'https://leosooter.github.io/blackjack/',
    screenShot : 'assets/images/projects/blackjack/main-wide.png',
    thumbnail : 'assets/images/projects/blackjack/main.png',
    description : [`This is a simple animated card game that allows for multiple players.`,
      `I used this project as a way to practice object oriented programing, and manipultaing the DOM with JQuery.`,
      `For phase two of this project I will be using Socket.io to create an online multiplayer version.`],
    technologies : ['HTML', 'Scss', 'JQuery'],
    details : [
      overview,
      {
        name : 'OOP',
        title : 'Object Oriented Programing',
        screenShot : null,
        description : [`Game uses object oriented programing to create an expandable and maintainable application.`,
        `I used the new ES6 'class' syntax becuase although it does not add any extra functionality, I think it does make the code more accessable to programmers trained in other class-based languages.`],
      },
      {
        name : 'Css/Scss',
        title : 'Css Transitions',
        screenShot : null,
        description : [`I used Css transitions to animate the movement of the cards.`,
          `I love to work with trasitions on projects like this because of how easily they can be triggered dynamically with Javascript.`],
      },
    ],
  };

  var jetFighter = {
    name : 'jetfighter',
    title : 'Jet Fighter Game',
    repoUrl : 'https://github.com/leosooter/dogfight',
    liveUrl : 'https://leosooter.github.io/dogfight/',
    //iframe : false,
    screenShot : 'assets/images/projects/jetfighter/jetfighter.png',
    thumbnail : 'assets/images/projects/jetfighter/jetfighter-small.png',
    description : [`Jet Fighter is a project I worked on to practice creating detailed and realistic animations with Css 3d-transforms and trasitions.`,
      `I used two images locked together with a 90 degree offest, coupled with 3d-transforms, to give the illusion of 3 dimensional movement.`,
      `Click on the link below to play the game, but please be aware that it is a work in progress and not mobile/touch friendly.`],
    technologies : ['HTML', 'Scss', 'JQuery'],
    details : [
      overview,
      {
        name : 'JQuery',
        title : 'JQuery',
        screenShot : null,
        description : [`I used JQuery for this game beacuse it makes it easier to caulculate x,y coordinates and beacuse it streamlines referencing objects in the DOM and adding event-listeners`],
      },
      {
        name : 'Css/Scss',
        title : 'Css Transitions',
        screenShot : null,
        description : [`I used transitions with custom cubic-beziers to add an extra level of detail to the movement of the jet and missiles.`, `By pushing some of peaks of the cubic-beziers beyond 1, I was able to acheive very smooth curves without needing to rely on more complicated animations.`],
      },
    ],
  };

  var algorithms = {
    name : 'Algorithms',
    title : 'Algorithms',
    repoUrl : null,
    liveUrl : null,
    //iframe : false,
    screenShot : 'assets/images/projects/algorithms/main.png',
    thumbnail : 'assets/images/projects/algorithms/main-small.png',
    description : [`As part of the training at Coding Dojo we spent a minimum of an hour per day working on learning new algorithms and data-structures.`,
      `We studied different ways of storing, sorting and retreiving data, and then created and compared our own implementations.`,
      `I have had the opportunity to work on implementations for Stacks, Queues, Circular-Queues, singly and doubly Linked-Lists, Hashes, Binary Search Trees, Graphs, and Priority Queues using Heaps.`],
    technologies : ['Data-Structures', 'OOP'],
    details : [
      overview,
    ],
  };

  var thisPortfolio = {
    name : 'This Porfolio',
    title : 'This Portfolio',
    repoUrl : null,
    liveUrl : null,
    //iframe : false,
    screenShot : 'assets/images/projects/this-portfolio/main.png',
    thumbnail : 'assets/images/projects/this-portfolio/main.png',
    description : [`This portfolio was built using Angular to allow for a more dynamic user interface.
      Angular's ability to insert logic into the Html allowed me to create a view that can easily display different types of projects.`,
      `I also used Scss mixins extensivly to to create a resoponsive site that scales well.`],
    technologies : ['HTML', 'Scss', 'Angular'],
    details : [
      overview,
    ],
  };

  var djangoProject = {
    name : 'Django',
    title : 'Django',
    repoUrl : 'https://github.com/CodingDojoOnline-Python-2/LeoSooter/tree/master/Week7/LoginReg',
    liveUrl : null,
    //iframe : false,
    screenShot : 'assets/images/projects/django-project/main.png',
    thumbnail : 'assets/images/projects/django-project/main.png',
    description : [`I am currently working on deploying a Django project for the portfolio but it still a work in progress`, `If you would like to see the source code for a basic Django app with form-validations and templating, you can visit the Repo below on Github.`],
    technologies : ['Django', 'Python', 'SQL'],
    details : [
      overview,
    ],
  };
  ///////////////////////frontEnd
  var html5Skill = {
    name : "HTML5",
    projects : [digitalReserve, blackJack],
  };
  var cssScssSkill = {
    name : "Css/Scss",
    projects : [blackJack, jetFighter],
  };
  var javascriptSkill = {
    name : "Javascript",
    projects : [digitalReserve],
  };
  var jQuerySkill = {
    name : "JQuery",
    projects : [jetFighter],
  };
  //////////////////////MEAN
  var nodeSkill = {
    name : "Node.js/Express",
    projects : [algoApp],
  };
  var angularSkill = {
    name : "Angular",
    projects : [algoApp],
  };
  var mongoSkill = {
    name : "Mongo/Mongoose",
    projects : [algoApp],
  };
  /////////////////////Python
  var pythonSkill = {
    name : "Python",
    projects : [messageBoard],
  };
  var flaskSkill = {
    name : "Flask",
    projects : [messageBoard],
  };
  var djangoSkill = {
    name : "Django",
    projects : [djangoProject],
  };
  var sqlSkill = {
    name : "SQL",
    projects : [messageBoard],
  };
  /////////////////////Algos
  var oopSkill = {
    name : "OOP",
    projects : [blackJack],
  };
  var resonsiveSkill = {
    name : "Responsive",
    projects : [digitalReserve],
  };
  var dataStructuresSkill = {
    name : "Data Structures",
    projects : [algorithms],
  };
  var algoSkill = {
    name : "Algorithms",
    projects : [algorithms],
  };
  var securitySkill = {
    name : "Security",
    projects : [algoApp],
  };

  factory.frontEnd = [html5Skill, cssScssSkill, javascriptSkill, jQuerySkill];
  factory.meanStack = [nodeSkill, angularSkill, mongoSkill];
  factory.pythonStack = [pythonSkill, flaskSkill, djangoSkill, sqlSkill];
  factory.skillSet = [oopSkill, resonsiveSkill, securitySkill, dataStructuresSkill, algoSkill];

  factory.featured = algoApp;
  factory.projects = [algoApp, digitalReserve, messageBoard, blackJack, jetFighter, algorithms];

  return factory;
}])
