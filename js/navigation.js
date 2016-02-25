var adminurl = 'http://wohlig.io:81/callApi/flexi/json/';
var navigationservice = angular.module('navigationservice', [])

.factory('NavigationService', function($http) {
  var navigation = [{
    name: "Home",
    classis: "active",
    icon: "fa-home",
    link: "home",
    subnav: [{
      name: "Subnav1",
      classis: "active",
    }]
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
      $http.get(adminurl+'getcityoptions').success(callback);
    },
    getCategoryOptions:function (callback) {
      $http.get(adminurl+'findallcategories').success(callback);
    },
    findAllJobs: function (callback) {
      $http({
        url: adminurl + 'findalljobs',
        method: 'POST',
        withCredentials: true,
        data: {
          "job":"designer",
          "city":"mumbai"
        }
      }).success(callback);
    },
    getAllFreelancers: function (callback) {
      $http.get(adminurl+'findallfreelancers').success(callback);
    },
    getCompanyProfile: function (callback) {
      $http.get(adminurl+'findonecompanyprofile/1').success(callback);
    },
    getTestimonials: function (callback) {
      $http.get(adminurl+'findalltestimonials').success(callback);
    },
    getEachJobDetail: function (callback) {
      $http.get(adminurl+'findonejob/1').success(callback);
    },
    getMyProfilePage: function (callback) {
      $http.get(adminurl+'findoneprofile/1').success(callback);
    }
  };
});
