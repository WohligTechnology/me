var adminurl = 'http://wohlig.io:81/callApi/flexi/json/';
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
    signUpClient: function (formData, callback) {
      console.log('form data: ', formData);
      $http({
        url: adminurl + 'createclient',
        method: 'POST',
        withCredentials: true,
        data: {
          "image":formData.image.name,
          "companyName":formData.company,
          "name":formData.name,
          "password":formData.password,
          "email": formData.mail,
          "contact":formData.mobile,
          "location":formData.location,
          "jobRole":formData.job,
          "tc":formData.tc,
          "accessLevel":"client"
        }
      }).success(callback);
    },
    signUpLancer: function (formData, callback) {
      console.log('form data: ', formData);
      $http({
        url: adminurl + 'createfreelancer',
        method: 'POST',
        withCredentials: true,
        data: {
          "accessLevel":"freelancer",
          "picture":formData.picture.name,
          "resume":formData.resume.name,
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
        url: adminurl+'getcityoptions',
        method:'POST',
        withCredentials:true
      }).success(callback);
    },
    getCategoryOptions:function (callback) {
      $http({
        url: adminurl+'findallcategories',
        method:'POST',
        withCredentials:true
      }).success(callback);
    },
    findAllJobs: function (callback) {
      $http({
        url: adminurl + 'findalljobs',
        method: 'POST',
        withCredentials:true,
        data: {
          "job":"designer",
          "city":"mumbai"
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
        url: adminurl+'findoneprofile',
        method: 'POST',
        withCredentials:true
      }).success(callback);
    }
  };
});
