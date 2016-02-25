angular.module('phonecatControllers', ['templateservicemod', 'infinite-scroll', 'navigationservice', 'ui.bootstrap', 'ngSanitize', 'angular-flexslider'])

.controller('HomeCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("home");
    $scope.menutitle = NavigationService.makeactive("Home");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $scope.mySlides = [
      'img/landing.jpg',
    ];
  })
  .controller('AboutCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("aboutus");
    $scope.menutitle = NavigationService.makeactive("About");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $scope.mySlides = [
      'img/landing.jpg',
    ];
  })
  .controller('JobListingCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("joblisting");
    $scope.menutitle = NavigationService.makeactive("Job Listing");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $scope.jobNumber = [];
    NavigationService.findAllJobs(function (data) {
      $scope.joblist = data;
      console.log('joblist: ', $scope.joblist);
      $scope.jobNumber[0] = $scope.joblist.data[0];
      $scope.jobNumber[1] = $scope.joblist.data[1];
    });
    
    $scope.loadMore = function () {
      if($scope.jobNumber.length < $scope.joblist.data.length) {
        var last = $scope.jobNumber.length - 1;
        console.log('joblist length: ', $scope.joblist.data.length)
        console.log('last: ', last)
        console.log('jobNumber: ', $scope.jobNumber)
        for (var i = 1; i <= 2; i++) {
          
            console.log('in the if statement')
            $scope.jobNumber.push($scope.joblist.data[last + i]);
          }
        console.log('job number: ', $scope.jobNumber)
      }
    }

    $scope.mySlides = [
      'img/landing.jpg',
    ];

    // $scope.joblist = [
    //   {
    //     img: "img/resgration.png",
    //     name: "Bobcorn",
    //     money: "1000-2000",
    //     hours: "40",
    //     lastpost: "2 months ago",
    //     month: "Jan 26,2016",
    //     description:"  I am looking for a mobile app developer to work on various IOS and Android apps. The first project would be to develop a mobile app for both IOS and Android where we will provide."
    //   },
    //   {
    //     img: "img/resgration.png",
    //     name: "Bobcorn",
    //     money: "1000-2000",
    //     hours: "40",
    //     lastpost: "2 months ago",
    //     month: "Jan 26,2016",
    //     description:"  I am looking for a mobile app developer to work on various IOS and Android apps. The first project would be to develop a mobile app for both IOS and Android where we will provide."
    //   },
    //   {
    //     img: "img/resgration.png",
    //     name: "Bobcorn",
    //     money: "1000-2000",
    //     hours: "40",
    //     lastpost: "2 months ago",
    //     month: "Jan 26,2016",
    //     description: "  I am looking for a mobile app developer to work on various IOS and Android apps. The first project would be to develop a mobile app for both IOS and Android where we will provide."
    //   },
    // ];
  })
  .controller('JobDetailCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("job-detail");
    $scope.menutitle = NavigationService.makeactive("Job Listing");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    NavigationService.getEachJobDetail(function (data) {
      $scope.jobDetail = data;
      console.log('job detail: ', $scope.jobDetail);
    });

    $scope.mySlides = [
      'img/landing.jpg',
    ];
  })
  .controller('JobSearchCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("job-search");
    $scope.menutitle = NavigationService.makeactive("Job Search");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
  })
  .controller('SearchCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("search");
    $scope.menutitle = NavigationService.makeactive("Search");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    
    $scope.jobs = {}
    $scope.pageOfJobs = []
    NavigationService.getAllFreelancers(function (data) {
      $scope.jobs = data;
      console.log('all freelancers: ', $scope.jobs);
      $scope.pageOfJobs[0] = $scope.jobs.data[0];
      $scope.pageOfJobs[1] = $scope.jobs.data[1];
      console.log('all freelancers2: ', $scope.pageOfJobs);       
    });

    $scope.loadMoreTwo = function () {
      // console.log('In the load more two function')
      // console.log('jobs length: ', $scope.jobs.data.length)
      if($scope.pageOfJobs.length < $scope.jobs.data.length-1)
      {
        console.log('all freelancers1: ', $scope.pageOfJobs);
        var last = $scope.pageOfJobs.length;
        console.log('last: ', last);
        for (var i = 0; i < 2; i++) {
          $scope.pageOfJobs.push($scope.jobs.data[last + i]);
        }
        console.log('job number: ', $scope.pageOfJobs)
      }
    }
    // $scope.jobs = [
    //   {
    //     img: "img/search.png",
    //     name: "Sania Mirza",
    //     prof: "Graphic designer",
    //     exp: "1"
    //   },
    //   {
    //     img: "img/search.png",
    //     name: "Rital Nalk",
    //     prof: "Graphic designer",
    //     exp: "4"
    //   },
    //   {
    //     img: "img/search.png",
    //     name: "Pranit Sahu",
    //     prof: "Graphic designer",
    //     exp: "2"
    //   },
    //   {
    //     img: "img/search.png",
    //     name: "Deepak Shah",
    //     prof: "Graphic designer",
    //     exp: "3"
    //   },
    // ];
  })
  .controller('SearchcategoryCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("search-category");
    $scope.menutitle = NavigationService.makeactive("Search Category");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    
    NavigationService.getCityOptions(function (data) {
      $scope.cityOptions = data;
      console.log('cityOptions: ', $scope.cityOptions);
    })

    NavigationService.getCategoryOptions(function (data) {
      $scope.categoryOptions = data;
      console.log('categoryOptions: ', $scope.categoryOptions);
    })
  })
  .controller('RegistrationCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("registration");
    $scope.menutitle = NavigationService.makeactive("Registration");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
  })
  .controller('ProfileCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("profile");
    $scope.menutitle = NavigationService.makeactive("Profile");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    NavigationService.getMyProfilePage(function (data) {
      $scope.myProfile = data;
    })
  })
  .controller('SearchresultCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("search-result");
    $scope.menutitle = NavigationService.makeactive("Search Result");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
  })
  .controller('CompanyProfileCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("company-profile");
    $scope.menutitle = NavigationService.makeactive("Company Profile");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    NavigationService.getCompanyProfile(function (data) {
      $scope.company = data;
      console.log('company: ', $scope.company);
    })
  })
  .controller('PostjobCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("post-job");
    $scope.menutitle = NavigationService.makeactive("Post Job");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    NavigationService.getCategoryOptions(function (data) {
      $scope.categoryOptions = data;
      console.log('categoryOptions: ', $scope.categoryOptions);
    })
  })
  .controller('ResumeCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("resume");
    $scope.menutitle = NavigationService.makeactive("Resume");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
  })
  .controller('Commmunity', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("community");
    $scope.menutitle = NavigationService.makeactive("Commmunity");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
  })
.controller('RegisterLancerCtrl', function($scope, fileUpload, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("registerlancer");
    $scope.menutitle = NavigationService.makeactive("Register Lancer");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    // $scope.submitForm = function(formregistration,formValid) {
    //   if(formValid.$Valid){
    //     $scope.completeRegister = true;
    //   }
    //   else {
    //
    //   }
    // };
    $scope.formregistration = {};
    $scope.signUpLancer = function () {
      console.log('picture: ', $scope.formregistration.picture.name);
      console.log('resume: ', $scope.formregistration.resume.name);

      NavigationService.signUpLancer($scope.formregistration, function (data) {
        console.log(data);
      })
    }

    $scope.uploadFile = function(){
     var file = $scope.formregistration.picture;
     
     console.log('file is' );
     console.dir(file);
     
     var uploadUrl = "http://localhost/me/img/fileUpload";
     fileUpload.uploadFileToUrl(file, uploadUrl);
    };
    // $scope.uploader = new FileUploader();

    // console.log('uploader: ', $scope.uploader);

    // $scope.upload = function () {
    //   console.log('uploader: ', $scope.uploader);
    // }
    // $scope.uploadComplete = function (content) {
    //   // $scope.response = JSON.parse(content); // Presumed content is a json string!
    //   // $scope.response.style = {
    //   //   color: $scope.response.color,
    //   //   "font-weight": "bold"
    //   // };
    //   console.log(content);

    //   // Clear form (reason for using the 'ng-model' directive on the input elements)
    //   // $scope.fullname = '';
    //   // $scope.gender = '';
    //   // $scope.color = '';
    //   // Look for way to clear the input[type=file] element
    // };

    $scope.mySlides = [
      '../img/landing.jpg',
    ];
  })

  .controller('RegisterClientCtrl', function($scope, fileUpload, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("registerclient");
    $scope.menutitle = NavigationService.makeactive("register Client");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $scope.formregistration = {};
    $scope.signUpClient = function () {
      NavigationService.signUpClient($scope.formregistration, function (data) {
        console.log(data);
      })
    }

    $scope.uploadFile = function(){
     var file = $scope.formregistration.image;
     
     console.log('file is' );
     console.dir(file);
     
     var uploadUrl = "http://localhost/me/img/fileUpload";
     fileUpload.uploadFileToUrl(file, uploadUrl);
    };
  })

  .controller('LandingCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("landing");
    $scope.menutitle = NavigationService.makeactive("Landing");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    TemplateService.header = "";

  })
  .controller('SuccessstoriesCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("successstories");
    $scope.menutitle = NavigationService.makeactive("Success Stories");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    // TemplateService.header = "";
    NavigationService.getTestimonials(function (data) {
      $scope.testimonials = data;
      console.log('testimonials: ', $scope.testimonials);
    })
    // $scope.successstories = [{
    //   img: "img/search.png",
    //   name: "seema yadav",
    //   designation: "Manager",
    //   company: "aapcot",
    //   descp: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    // }, {
    //   img: "img/search.png",
    //   name: "seema yadav",
    //   designation: "Manager",
    //   company: "aapcot",
    //   descp: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    // }];
  })

.controller('headerctrl', function($scope, TemplateService) {
  $scope.template = TemplateService;

  $scope.slideclass = "slide-out"
  $scope.slidemenu = function() {
    if($scope.slideclass == "slide-out")
    $scope.slideclass = "slide-in";
    else
    $scope.slideclass = "slide-out"
  }

  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
    $(window).scrollTop(0);
  });

})

;
