// var adminurl = 'http://192.168.0.126:1337/callApi/flexi/json/';
var adminurl = 'http://130.211.164.166/';
var adminurl = 'http://192.168.0.126:80/';

var navigationservice = angular.module('navigationservice', [])

.factory('NavigationService', function ($http) {
    var navigation = [{
        name: "Home",
        classis: "active",
        icon: "fa-home",
        link: "home",
    }, {
        name: "Register/Sign in",
        classis: "active",
        icon: "fa-key",
        link: "registerlancer"
    }, {
        name: "My Profile",
        classis: "active",
        icon: "fa-user",
        link: "profile"
    },
    // {
    //     name: "My Profile",
    //     classis: "active",
    //     icon: "fa-user",
    //     link: "profile"
    // },
    {
        name: "Success Stories",
        classis: "active",
        icon: "fa-briefcase",
        link: "successstories"
    }, {
        name: "My Community (Coming Soon)",
        classis: "active",
        icon: "fa-commenting-o",
        link: "home"
    }, {
        name: "About Us",
        classis: "active",
        icon: "fa-user",
        link: "about"
    }];

    return {
        getnav: function () {
            return navigation;
        },
        makeactive: function (menuname) {
            for (var i = 0; i < navigation.length; i++) {
                if (navigation[i].name == menuname) {
                    navigation[i].classis = "active";
                } else {
                    navigation[i].classis = "";
                }
            }
            return menuname;
        },
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
    getAllFreelancers: function (callback) {
      $http({
        url: adminurl+'findallfreelancers',
        method:'POST',
        withCredentials:true
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
    getEachJobDetail: function (job, callback) {
      $http({
        url: adminurl+'user/findCompanyProfile',
        method:'POST',
        data: {
          "_id":job._id
        }
      }).success(callback);
    },
    getMyProfilePage: function (callback) {
      $http({
        url: adminurl+'user/findProfile',
        method: 'POST'
      }).success(callback);
    },
    getResume: function (callback) {
      $http({
        url: adminurl+'viewresume',
        method: 'POST'
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
          "company":data.company
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
    jobApply: function (id, callback) {
      $http({
        url: adminurl+'user/applyForJob',
        method: 'POST',
        data: {
          'job': id
        }
      }).success(callback);
    }
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
