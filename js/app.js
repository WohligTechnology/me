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
  .state('registerlancer', {
    url: "/registerlancer",
    templateUrl: "views/template.html",
    controller: 'RegisterLancerCtrl'
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
