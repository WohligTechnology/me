// var adminurl = 'http://192.168.0.126:1337/callApi/flexi/json/';
// var adminurl = 'http://130.211.164.166/';
var adminurl = 'http://vignesh.com:81/';

var navigationservice = angular.module('navigationservice', [])

.factory('NavigationService', function ($http) {
    var navigationGeneral = [
    {
      name: "Home",
      classis: "active",
      icon: "fa-home",
      link: "home",
    }, 
    {
      name: "Register/Sign in",
      classis: "active",
      icon: "fa-key",
      link: "registerlancer"
    },
    {
      name: "Success Stories (Coming Soon)",
      classis: "active",
      icon: "fa-briefcase",
      link: "home"
    },
    {
      name: "My Community (Coming Soon)",
      classis: "active",
      icon: "fa-commenting-o",
      link: "home"
    },
    // {
    //     name: "View Applicants",
    //     classis: "active",
    //     icon: "fa-search",
    //     link: "postjob"
    // },
    // {
    //     name: "Search Job",
    //     classis: "active",
    //     icon: "fa-search",
    //     link: "searchcategory"
    // },
    {
      name: "About Us",
      classis: "active",
      icon: "fa-user",
      link: "about"
    }
  ];

  var navigationClient = [
    {
      name: "Home",
      classis: "active",
      icon: "fa-home",
      link: "home",
    }, 
    // {
    //     name: "Register/Sign in",
    //     classis: "active",
    //     icon: "fa-key",
    //     link: "registerlancer"
    // },
    {
        name: "Success Stories (Coming Soon)",
        classis: "active",
        icon: "fa-briefcase",
        link: "home"
    },
    {
        name: "My Community (Coming Soon)",
        classis: "active",
        icon: "fa-commenting-o",
        link: "home"
    },
    {
        name: "View Applicants",
        classis: "active",
        icon: "fa-search",
        link: "postjob"
    },
    // {
    //     name: "Search Job",
    //     classis: "active",
    //     icon: "fa-search",
    //     link: "searchcategory"
    // },
   {
      name: "About Us",
      classis: "active",
      icon: "fa-user",
      link: "about"
    }
  ];

  var navigationLancer = [{
        name: "Home",
        classis: "active",
        icon: "fa-home",
        link: "home",
    }, 
    // {
    //     name: "Register/Sign in",
    //     classis: "active",
    //     icon: "fa-key",
    //     link: "registerlancer"
    // },
    {
        name: "Success Stories (Coming Soon)",
        classis: "active",
        icon: "fa-briefcase",
        link: "home"
    },
    {
        name: "My Community (Coming Soon)",
        classis: "active",
        icon: "fa-commenting-o",
        link: "home"
    },
    // {
    //     name: "View Applicants",
    //     classis: "active",
    //     icon: "fa-search",
    //     link: "postjob"
    // },
    {
        name: "Search Job",
        classis: "active",
        icon: "fa-search",
        link: "searchcategory"
    },
    {
        name: "About Us",
        classis: "active",
        icon: "fa-user",
        link: "about"
    }
  ];
  var navigation = [];

    return {
        getnav: function (value) {
          if(value == 'general'){
            navigation = navigationGeneral;
          }
          if(value == 'client'){
            navigation = navigationClient;
          }
          if(value == 'lancer'){
            navigation = navigationLancer;
          }
          return navigation;
        },
        makeactive: function (menuname, value) {
          for (var i = 0; i < navigation.length; i++) {
              if (navigation[i].name == menuname) {
                  navigation[i].classis = "active";
              } else {
                  navigation[i].classis = "";
              }
          }
          return menuname;
        },
        // loggedIn: function (data) {
        //   var flag1 = 0, flag4 = 0, flag3 = 0;
        //   for(var m=0; m<navigation.length; m++) {
        //     if(navigation[m].link == 'registerlancer') {
        //       flag1 = 1;
        //     }
        //     if(navigation[m].link == 'searchcategory' && data.accesslevel == 'client' 
        //       && !navigation[4].link.indexOf('postjob')) {
        //       flag3 = 1;
        //     }
        //     if(navigation[m].link == 'postjob' && data.accesslevel == 'lancer' 
        //       && !navigation[5].link.indexOf('searchcategory')) {
        //       flag4 = 1;
        //     }
        //   }

        //   if(flag1 === 1) {
        //     navigation.splice(1,1);
        //   }

        //   console.log('in if statement1');
        //   console.log('flag 3: ', flag3);
        //   console.log('flag 1: ', flag1);
        //   console.log('flag 4: ', flag4);
        //   if(flag3 === 1 && flag1 === 1) {
        //     console.log('in if statement2');
        //     navigation.splice(4,1);
        //   }

        //   else if(flag3 === 1 && flag1 === 0  ){
        //     navigation.splice(5,1);
        //   }

        //   // console.log('in if statement3')
        //   // var flag4 = $scope.navigation[4].link.indexOf('postjob');
        //   if(flag4 === 1 && flag1 === 0) {
        //     console.log('in if statement4');
        //     navigation.splice(4,1);
        //   }

        //   else if(flag4 === 1 && flag1 === 1) {
        //     navigation.splice(3,1);
        //   }
        //   return navigation;
        // },
        // loggedOut: function (argument) {
        //   var flag2 = navigation[1].link.indexOf('registerlancer');
        //   if(flag2 == -1) {
        //     navigation.splice(1,0,{
        //       name: "Register/Sign in",
        //       classis: "active",
        //       icon: "fa-key",
        //       link: "registerlancer"
        //     });
        //     console.log('navigation splice: ', navigation);
        //   }
        //   var flag5 = -1, flag6 = -1;
        //   for(var n=0; n<navigation.length; n++) {
        //     flag5 = navigation[n].link.indexOf('searchcategory');
        //     if(flag5 != -1) {
        //       navigation.splice(n,1);
        //     }
        //     flag6 = navigation[n].link.indexOf('postjob');
        //     if(flag6 != -1) {
        //       navigation.splice(n,1);
        //     }
        //   }
        //   return navigation;
        // },
        signUpClient: function (formData, callback) {
          console.log('form data: ', formData);
          $http({
            url: adminurl + 'user/save',
            method: 'POST',
            data: {
              "image":formData.image,
              "company":formData.company,
              "name":formData.name,
              "password":formData.password,
              "email": formData.mail,
              "contactNo":formData.mobile,
              // "location":companyData.location,
              // "jobRole":companyData.job,
              "tc":formData.tc,
              "accesslevel":"client"
            }
          }).success(callback);
        },
    signUpLancer: function (formData, callback) {
      console.log('form data: ', formData);
      $http({
        url: adminurl + 'user/save',
        method: 'POST',
        withCredentials: true,
        data: {
          "accesslevel":"lancer",
          "profilepic":formData.picture,
          "resume":formData.resume,
          "name":formData.name,
          "email": formData.mail,
          "contactNo":formData.mobile,
          "password":formData.password,
          "location":formData.location,
          "jobRole":formData.job,
          "tc":formData.tc,
        }
      }).success(callback);
    },
    getCityOptions:function (callback) {
      $http({
        url: adminurl+'job/findCityDrop',
        method:'POST',
        data: {
          search: ""
        }
      }).success(callback);
    },
    getCategoryOptions:function (callback) {
      $http({
        url: adminurl+'job/findTypeDrop',
        method:'POST',
        data: {
          search: ""
        }
      }).success(callback);
    },
    findAllJobs: function (data, page, callback) {
      // console.log('page: ', page)
      $http({
        url: adminurl + 'job/findAllJobs',
        method: 'POST',
        data: {
          "designation":data.category,
          "loc":data.city,
          "pagenumber":page,
          "pagesize":20
        }
      }).success(callback);
    },
    getAllFreelancers: function (data, page, callback) {
      var job = JSON.parse(data);
      console.log(JSON.parse(data));
      console.log(job);
      $http({
        url: adminurl+'user/viewApplied',
        method:'POST',
        data: {
          'job': job._id,
          'jobname': job.designation
        }
        // withCredentials:true
      }).success(callback);
    },
    getCompanyProfile: function (callback) {
      $http({
        url: adminurl+'findonecompanyprofile',
        method:'POST',
        withCredentials:true
      }).success(callback);
    },
    getTestimonials: function (callback) {
      $http({
        url: adminurl+'findalltestimonials',
        method:'POST',
        withCredentials:true
      }).success(callback);
    },
    getEachJobDetail: function (id, job, callback) {
      // console.log('job id: ', job)
      $http({
        url: adminurl+'user/viewCompanyProfile',
        method:'POST',
        data: {
          "_id":id,
          "job":job
        }
      }).success(callback);
    },
    getMyProfilePage: function (callback) {
      $http({
        url: adminurl+'user/profile',
        method: 'POST'
      }).success(callback);
    },
    getResume: function (id, callback) {
      $http({
        url: adminurl+'user/findOne',
        method: 'POST',
        data: {
          "_id": id
        }
      }).success(callback);
    },
    submitEdit: function (PD, Edu, Exp, DP, callback) {
      $http({
        url: adminurl+'user/edit',
        method: 'POST',
        data: {
          "name":PD.name,
          "email":PD.email,
          "contactNo":PD.contactNo,
          "location":PD.location,
          "education":Edu,
          "experience":Exp,
          "profilepic":DP
        }
      }).success(callback);
    },
    submitEditClient: function (data, callback) {
      $http({
        url: adminurl+'user/edit',
        method: 'POST',
        data: {
          "name":data.name,
          "email":data.email,
          "contactNo":data.contactNo,
          "company":data.company,
          "image":data.image
        }
      }).success(callback);
    },
    login: function (login, callback) {
      $http({
        url: adminurl+'user/login',
        method: 'POST',
        data: {
          "email":login.email,
          "password":login.pswd,
          "accesslevel":login.accesslevel
        }
      }).success(callback);
    },
    forgot: function (email, callback) {
      $http({
        url: adminurl+'user/forgotpassword',
        method: 'POST',
        data: {
          "email":email
        }
      }).success(callback);
    },
    postNewJob: function (newJob, callback) {
      $http({
        url: adminurl+'job/saveJob',
        method: 'POST',
        data: {
          "designation": newJob.designation,
          "department": newJob.department,
          "description": newJob.description,
          "reporting": newJob.reporting,
          "experience": newJob.experience,
          "appdate": newJob.appdate,
          "city": newJob.city,
          "state": newJob.state
        }
      }).success(callback);
    },
    session: function (callback) {
      $http({
        url: adminurl+'user/profile',
        method: 'POST'
      }).success(callback);
    },
    changePassword: function (data, callback) {
      $http({
        url: adminurl+'user/changepassword',
        method: 'POST',
        data: {
          'password': data.old,
          'editpassword': data.new
        }
      }).success(callback);
    },
    getJob: function (callback) {
      $http({
        url: adminurl+'user/getCompanyProfile',
        method: 'POST'
      }).success(callback);
    },
    jobApply: function (data, callback) {
      $http({
        url: adminurl+'user/applyForJob',
        method: 'POST',
        data: {
          'jobname': data.designation,
          'job': data._id
        }
      }).success(callback);
    },
    logout: function (callback) {
      $http({
          url: adminurl+'user/logout',
          method: 'POST'
        }).success(callback);
    },
    getShortlist: function (lancer, job, callback) {
      // console.log('lancer: ', lancer)
      var job = JSON.parse(job);
      // console.log('job: ', job)
      $http({
        url: adminurl+'user/shortlistForJob',
        method: 'POST',
        data: {
          'jobname':job.designation,
          'job': job._id,
          '_id':lancer._id
        }
      }).success(callback);
    },
    deleteJob: function (id, callback) {
      $http({
        url: adminurl+'job/delete',
        method: 'POST',
        data: {
          '_id': id
        }
      }).success(callback);
    },
    editJob: function (id, job, callback) {
      $http({
        url: adminurl+'job/save',
        method: 'POST',
        data: {
          '_id':id,
          'appdate' : job.appdate,
          'department' : job.department,
          'description' : job.description,
          'designation' : job.designation,
          'experience' : job.experience,
          'expiryDate' : job.expiryDate,
          'reporting' : job.reporting,
          'state' : job.state
        }
      }).success(callback);
    },
    getEachJob: function (id, callback) {
      $http({
        url: adminurl+'job/findone',
        method: 'POST',
        data: {
          '_id':id
        }
      }).success(callback);
    },
    setInterview: function (data, job, lancer, callback) {
      console.log('lancer: ', lancer);
      jobDetail = JSON.parse(job);
      console.log('job: ', jobDetail);
      $http({
        url: adminurl+'user/setInterview',
        method: 'POST',
        data: {
          '_id':lancer._id,
          'job': jobDetail._id,
          'jobname': jobDetail.designation,
          'content': data.content,
          'date': data.date,
          'time': data.time,
          'venue': data.venue
        }
      }).success(callback);
    }
    // getShortlistDetail: function (lancer, job) {
    //   $http({
    //     url: adminurl+'user/shortlistForJob',
    //     method: 'POST',
    //     data: {
    //       'jobname':job.designation,
    //       'job': job._id,
    //       '_id':lancer._id
    //     }
    //   }).success(callback)
    // }
    // setInterview: function (argument) {
    //   $http({
    //     url: adminurl+
    //   })
    // }
  };
  // function whatLink() {
  //   session(function (data) {
  //     session = data;
  //     console.log(session);
  //   })
  //
  // //   session.then(function () {
  // //     if(session.$$state.value.data.accesslevel == "client") {
  // //         console.log(session)
  // //         return "companyprofile";
  // //     }
  // //     else if (session.$$state.value.data.accesslevel == "lancer") {
  // //       return "profile";
  // //     }
  // //   })
  // //
  // }
});
