var portfolioApp = angular.module("portfolioApp", []);

portfolioApp.factory("projectFactory", [function(){

  var factory = {};
  var overview = {
    name : 'Overview',
    title : 'Overview',
  };

  var digitalReserve = {
    name : 'digitalReserve',
    title : 'Digital Reserve',
    url : 'https://leosooter.github.io/digital-reserve/',
    screenShot : 'assets/images/projects/digital-reserve/widescreen.png',
    description : `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
      fugiat nulla pariatur.`,
    technologies : ['HTML', 'Scss', 'JQuery', 'Django', 'SQLlite'],
    details : [
      overview,
      {
        name : 'Responsive',
        title : 'Mobile-First Design',
        screenShot : 'assets/images/projects/digital-reserve/mobile2.png',
        description : `Screen and menus adapt for optimal experience on any screen`,
      },
      {
        name : 'Javascript',
        title : 'Javascript',
        screenShot : null,
        description : `This site's nav-bar uses a custom made javascript app to highlight links with randomly swarming particles.
            The app can be fully configured to adjust speed, color and movement,
            and it can be added to any website through css classes without any other alteration to the DOM`,
      },
      {
        name : 'Django',
        title : 'Django',
        screenShot : null,
        description : `Site uses Django paired with SQLlite to allow for secure logins and to store user info.`,
      }
    ],
  };
  var blackJack = {
    name : 'blackjack',
    title : 'BlackJack Game',
    url : 'https://leosooter.github.io/blackjack/',
    screenShot : 'assets/images/projects/blackjack/main.png',
    description : `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
      fugiat nulla pariatur.`,
    technologies : ['HTML', 'Scss', 'JQuery'],
    details : [
      overview,
      {
        name : 'OOP',
        title : 'Object Oriented Programing',
        screenShot : null,
        description : `Game uses OOP to create an expandable application`,
      },
      {
        name : 'Css/Scss',
        title : 'Css Transitions',
        screenShot : null,
        description : `The app can be fully configured to adjust speed, color and movement,
            and it can be added to any website through css classes without any other alteration to the DOM`,
      },
      {
        name : 'Data Structures',
        title : 'Data Structures',
        screenShot : null,
        description : `The game uses an array to hold card objects. I choose this structure because
          arrays support easy shuffling and the fact that cards need only be drawn from one end of the array makes costly shifts un-nessesary`,
      }
    ],

  };

  var jetFighter = {
    name : 'jetfighter',
    title : 'Jet Fighter Game',
    url : 'https://leosooter.github.io/dogfight/',
    screenShot : 'assets/images/projects/jetfighter/jetfighter.png',
    description : `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
      fugiat nulla pariatur.`,
    technologies : ['HTML', 'Scss', 'JQuery'],
    details : [
      overview,
      {
        name : 'OOP',
        title : 'Object Oriented Programing',
        screenShot : null,
        description : `Game uses OOP to create an expandable application`,
      },
      {
        name : 'Css/Scss',
        title : 'Css Transitions',
        screenShot : null,
        description : `The app can be fully configured to adjust speed, color and movement,
            and it can be added to any website through css classes without any other alteration to the DOM`,
      },
      {
        name : 'Data Structures',
        title : 'Data Structures',
        screenShot : null,
        description : `The game uses an array to hold card objects. I choose this structure because
          arrays support easy shuffling and the fact that cards need only be drawn from one end of the array makes costly shifts un-nessesary`,
      }
    ],
  };

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
    projects : [blackJack, jetFighter],
  };

  var nodeSkill = {
    name : "Node.js",
    projects : [digitalReserve],
  };
  var angularSkill = {
    name : "Angular",
    projects : [digitalReserve],
  };
  var expressSkill = {
    name : "Express",
    projects : [digitalReserve],
  };
  var mongoSkill = {
    name : "Mongo/Mongoose",
    projects : [digitalReserve],
  };

  var pythonSkill = {
    name : "Python",
    projects : [digitalReserve],
  };
  var flaskSkill = {
    name : "Flask",
    projects : [digitalReserve],
  };
  var djangoSkill = {
    name : "Django",
    projects : [digitalReserve],
  };
  var sqlSkill = {
    name : "SQL",
    projects : [digitalReserve],
  };

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
    projects : [blackJack],
  };
  var algoSkill = {
    name : "Algorthims",
    projects : [blackJack],
  };

  factory.frontEnd = [html5Skill, cssScssSkill, javascriptSkill, jQuerySkill];
  factory.meanStack = [nodeSkill, angularSkill, expressSkill, mongoSkill];
  factory.pythonStack = [pythonSkill, flaskSkill, djangoSkill, sqlSkill];
  factory.skillSet = [oopSkill, resonsiveSkill, dataStructuresSkill, algoSkill];

  factory.featured = digitalReserve;

  factory.projects = [digitalReserve, jetFighter, blackJack];

  return factory;
}])



portfolioApp.controller("projectController", ["$scope", "projectFactory", "$sce", "$location", "anchorSmoothScroll", function($scope, projectFactory, $sce, $location, anchorSmoothScroll){
  $scope.projects = projectFactory.projects;

  $scope.frontEnd = projectFactory.frontEnd;
  $scope.meanStack = projectFactory.meanStack;
  $scope.pythonStack = projectFactory.pythonStack;
  $scope.skillSet = projectFactory.skillSet;


  $scope.featured = projectFactory.featured;
  $scope.details = $scope.featured.details;
  $scope.featuredDetail = $scope.details[0];
  $scope.featuredIFrame = $sce.trustAsResourceUrl($scope.featured.url);

    $scope.changeFeaturedDetail = function(detail){
    console.log("Changeing featuredDetail to", detail.name);
    $scope.featuredDetail = detail;
  }

  $scope.changeFeaturedProject = function(project){
    console.log("Changeing featured project to", project.title);
    projectFactory.featured = project;
    $scope.featured = projectFactory.featured;
    $scope.details = $scope.featured.details;
    $scope.featuredDetail = $scope.details[0];
    $scope.featuredIFrame = $sce.trustAsResourceUrl($scope.featured.url);
    //$scope.moveToLocation("projects-bookmark");
    //$scope.goToElement("projects-bookmark");
  }
  //ng-click="goToElement('projects-bookmark')
  $scope.moveToLocation = function(location){
    console.log("Changing location to", location);
    $anchorScroll.yOffset = -150;
    $location.hash(location);
    $anchorScroll();
    $location.hash("")
  }

  $scope.focusSkill = function(skill){
    $scope.changeFeaturedProject(skill.projects[0]);
    for (var detail of $scope.featured.details) {
      if(detail.name === skill.name){
        $scope.changeFeaturedDetail(detail);
      }
    }
  }

  $scope.goToElement = function (eID){
    // set the location.hash to the id of the element you wish to scroll to.
    $location.hash('');

    // call $anchorScroll()
    anchorSmoothScroll.scrollTo(eID);

  };

}]);

portfolioApp.service('anchorSmoothScroll', function(){

    this.scrollTo = function(eID) {

        // This scrolling function is from http://www.itnewb.com/tutorial/Creating-the-Smooth-Scroll-Effect-with-JavaScript

        var startY = currentYPosition();
        var stopY = elmYPosition(eID);
        var distance = stopY > startY ? stopY - startY : startY - stopY;
        if (distance < 100) {
            scrollTo(0, stopY); return;
        }
        var speed = Math.round(distance / 100);
        if (speed >= 20) speed = 20;
        var step = Math.round(distance / 25);
        var leapY = stopY > startY ? startY + step : startY - step;
        var timer = 0;
        if (stopY > startY) {
            for ( var i=startY; i<stopY; i+=step ) {
                setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
                leapY += step; if (leapY > stopY) leapY = stopY; timer++;
            } return;
        }
        for ( var i=startY; i>stopY; i-=step ) {
            setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
            leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
        }

        function currentYPosition() {
            // Firefox, Chrome, Opera, Safari
            if (self.pageYOffset) return self.pageYOffset;
            // Internet Explorer 6 - standards mode
            if (document.documentElement && document.documentElement.scrollTop)
                return document.documentElement.scrollTop;
            // Internet Explorer 6, 7 and 8
            if (document.body.scrollTop) return document.body.scrollTop;
            return 0;
        }

        function elmYPosition(eID) {
            var elm = document.getElementById(eID);
            var y = elm.offsetTop;
            var node = elm;
            while (node.offsetParent && node.offsetParent != document.body) {
                node = node.offsetParent;
                y += node.offsetTop;
            } return y;
        }

    };

});

portfolioApp.controller('ScrollCtrl', function($scope, $location, anchorSmoothScroll) {

    $scope.goToElement = function (eID){
      // set the location.hash to the id of
      // the element you wish to scroll to.
      $location.hash('bottom');

      // call $anchorScroll()
      anchorSmoothScroll.scrollTo(eID);

    };
  });
