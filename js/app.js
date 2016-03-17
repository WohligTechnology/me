// JavaScript Document
var firstapp = angular.module('firstapp', [
  'ui.router',
  'phonecatControllers',
  'templateservicemod',
  'navigationservice'
]);

firstapp.config(function($stateProvider, $urlRouterProvider, $httpProvider,cfpLoadingBarProvider) {

  // for http request with session
  $httpProvider.defaults.withCredentials = true;
  cfpLoadingBarProvider.includeSpinner = true;
  cfpLoadingBarProvider.includeBar = false;
  cfpLoadingBarProvider.spinnerTemplate = '<div class="blur-bg-load"><div class="cssload-thecube"><div class="cssload-cube cssload-c1"></div>	<div class="cssload-cube cssload-c2"></div>	<div class="cssload-cube cssload-c4"></div>	<div class="cssload-cube cssload-c3"></div></div></div>';

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
  .state('changepassword', {
    url: "/changepassword",
    templateUrl: "views/template.html",
    controller: 'ChangePasswordCtrl'
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
  .state('searchresult', {
    url: "/search-result",
    templateUrl: "views/template.html",
    controller: 'SearchresultCtrl'
  })
  .state('companyprofile', {
    url: "/company-profile",
    templateUrl: "views/template.html",
    controller: 'CompanyProfileCtrl'
  })
  .state('searchcategory', {
    url: "/search-category",
    templateUrl: "views/template.html",
    controller: 'SearchcategoryCtrl'
  })
  .state('resume', {
    url: "/resume",
    templateUrl: "views/template.html",
    controller: 'ResumeCtrl',
    params: {
      data: '1'
    }
  })
  .state('community', {
    url: "/community",
    templateUrl: "views/template.html",
    controller: 'CommmunityCtrl'
  })
  .state('newjob', {
    url: "/newjob",
    templateUrl: "views/template.html",
    controller: 'NewjobCtrl'
  })
  .state('postjob', {
    url: "/post-job",
    templateUrl: "views/template.html",
    controller: 'PostjobCtrl'
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
    url: "/jobdetail/:id/job/:job",
    templateUrl: "views/template.html",
    controller: 'JobDetailCtrl',
    // params: {
    //   job: 
    // }
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

firstapp.filter('serverimage', function() {
  return function(input) {
    if (input) {
      // console.log('serverimage: ', input);
      // return input;
      return  adminurl+"uploadfile/resize?file=" + input;
    } else {
      return "img/logo.png";
    }
  };
});

firstapp.directive('fileModel', ['$parse', function ($parse) {
  return {
   restrict: 'A',
   link: function(scope, element, attrs) {
      var model = $parse(attrs.fileModel);
      var modelSetter = model.assign;

      element.bind('change', function(){
         scope.$apply(function(){
            modelSetter(scope, element[0].files[0]);
         });
      });
   }
  };
}]);

firstapp.service('fileUpload', ['$http', function ($http) {
  this.uploadFileToUrl = function(file, uploadUrl){
   var fd = new FormData();
   fd.append('file', file);

   $http.post(uploadUrl, fd, {
      transformRequest: angular.identity,
      headers: {'Content-Type': undefined}
   })

   .success(function(){
    console.log('upload success');
    console.log('uploaded to: ', uploadUrl);
   })

   .error(function(){
   });
 };
}]);
