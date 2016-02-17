// JavaScript Document
var firstapp = angular.module('firstapp', [
  'ui.router',
  'phonecatControllers',
  'templateservicemod',
  'navigationservice'
]);

firstapp.config(function($stateProvider, $urlRouterProvider, $httpProvider) {

  // for http request with session
  $httpProvider.defaults.withCredentials = true;

  $stateProvider

    .state('home', {
    url: "/home",
    templateUrl: "views/template.html",
    controller: 'HomeCtrl'
  })

  .state('landing', {
    url: "/landing",
    templateUrl: "views/template.html",
    controller: 'LandingCtrl'
  })

  .state('about', {
    url: "/about",
    templateUrl: "views/template.html",
    controller: 'AboutCtrl'
  })
  .state('profile', {
    url: "/profile",
    templateUrl: "views/template.html",
    controller: 'ProfileCtrl'
  })
  .state('registerlancer', {
    url: "/registerlancer",
    templateUrl: "views/template.html",
    controller: 'RegisterLancerCtrl'
  })
  .state('registration', {
    url: "/registration",
    templateUrl: "views/template.html",
    controller: 'RegistrationCtrl'
  })
  .state('registerclient', {
    url: "/registerclient",
    templateUrl: "views/template.html",
    controller: 'RegisterClientCtrl'
  })
  .state('joblisting', {
    url: "/joblisting",
    templateUrl: "views/template.html",
    controller: 'JobListingCtrl'
  })
  .state('jobdetail', {
    url: "/jobdetail",
    templateUrl: "views/template.html",
    controller: 'JobDetailCtrl'
  })
  .state('jobsearch', {
    url: "/jobsearch",
    templateUrl: "views/template.html",
    controller: 'JobSearchCtrl'
  })
  .state('search', {
    url: "/search",
    templateUrl: "views/template.html",
    controller: 'SearchCtrl'
  })

  .state('successstories', {
    url: "/successstories",
    templateUrl: "views/template.html",
    controller: 'SuccessstoriesCtrl'
  });

  $urlRouterProvider.otherwise("/home");

});


firstapp.directive('img', function($compile, $parse) {
  return {
    restrict: 'E',
    replace: false,
    link: function($scope, element, attrs) {
      var $element = $(element);
      if (!attrs.noloading) {
        $element.after("<img src='img/loading.gif' class='loading' />");
        var $loading = $element.next(".loading");
        $element.load(function() {
          $loading.remove();
          $(this).addClass("doneLoading");
        });
      } else {
        $($element).addClass("doneLoading");
      }
    }
  };
});



var isSlide = false;
var SlideFunc = {};

firstapp.directive('slideMenu', function($document) {
  return {
    restrict: 'EA',
    replace: false,
    link: function(scope, element, attr) {
      var $element = $(element);
      function OnBodyClick() {
        console.log("INSIDE ON BODY");
            $element.trigger("click");
      }
      $element.click(function() {
        console.log("DING CLICK");
        isSlide = !isSlide;
        if (isSlide) {
          $(".hamburger").addClass("green-bar");
          $(".slide-menu").addClass("slide-in");
          $(".that-slides").addClass("slide-body");
          setTimeout(function() {
            $(".that-slides.slide-body").bind("click",OnBodyClick);
          },100);
        } else {
          $( ".that-slides.slide-body").unbind( "click",OnBodyClick );
          $(".hamburger").removeClass("green-bar");
          $(".slide-menu").removeClass("slide-in");
          $(".that-slides").removeClass("slide-body");
        }
      });
    }
  };
});
