// var adminurl = 'http://192.168.0.126:1337/callApi/flexi/json/';
var adminurl = 'http://192.168.0.126:1337/';
var navigationservice = angular.module('navigationservice', [])

.factory('NavigationService', function($http) {
  var navigation = [{
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
    name: "My Profile",
    classis: "active",
    icon: "fa-user",
    link: "companyprofile"
  },
  {
    name: "Success Stories",
    classis: "active",
    icon: "fa-briefcase",
    link: "successstories"
  },
  {
    name: "My Community (Coming Soon)",
    classis: "active",
    icon: "fa-commenting-o",
    link: ""
  },
  {
    name: "About Us",
    classis: "active",
    icon: "fa-user",
    link: "about"
  },
];

  return {
    getnav: function() {
      return navigation;
    },
    makeactive: function(menuname) {
      for (var i = 0; i < navigation.length; i++) {
        if (navigation[i].name == menuname) {
          navigation[i].classis = "active";
        } else {
          navigation[i].classis = "";
        }
      }
      return menuname;
    },
    signUpClient: function (formData, companyData, callback) {
      console.log('form data: ', formData);
      $http({
        url: adminurl + 'user/save',
        method: 'POST',
        data: {
          "image":formData.image,
          "companyData":companyData,
          "name":formData.name,
          "password":formData.password,
          "email": formData.mail,
          "contact":formData.mobile,
          // "location":companyData.location,
          // "jobRole":companyData.job,
          "tc":formData.tc,
          "accessLevel":"client"
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
          "accessLevel":"lancer",
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
    findAllJobs: function (page, callback) {
      // console.log('page: ', page)
      $http({
        url: adminurl + 'job/findAllJobs',
        method: 'POST',
        withCredentials:true,
        data: {
          "designation":"Software Analyst",
          "loc":"Mumbai",
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
    getEachJobDetail: function (callback) {
      $http({
        url: adminurl+'findonejob',
        method:'POST',
        withCredentials:true
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
        method: 'POST',
        withCredentials:true
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
          "address":PD.address,
          "education":Edu,
          "experience":Exp,
          "profilepic":DP
        }
      }).success(callback);
    }
  };
});
