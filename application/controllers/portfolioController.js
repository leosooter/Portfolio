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
    // if ($scope.featured.iframe) {
    //   $scope.featuredIFrame = $sce.trustAsResourceUrl($scope.featured.url);
    // }

    //$scope.moveToLocation("projects-bookmark");
    //$scope.goToElement("projects-bookmark");
  }

  $scope.focusSkill = function(skill){
    $scope.goToElement('featured-bookmark');
    $scope.changeFeaturedProject(skill.projects[0]);
    for (var detail of $scope.featured.details) {
      if(detail.name === skill.name){
        $scope.changeFeaturedDetail(detail);
      }
    }
  }

  $scope.goToElement = function (eID){
    console.log("Moving to ", eID);
    // set the location.hash to the id of the element you wish to scroll to.
    $location.hash('');

    // call $anchorScroll()
    anchorSmoothScroll.scrollTo(eID);

  };

}]);
