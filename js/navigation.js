var navigationservice = angular.module('navigationservice', [])

.factory('NavigationService', function() {
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
    name: "My Profile",
    classis: "active",
    icon: "fa-user",
    link: "profile"
  },
  {
    name: "Register/Sign in",
    classis: "active",
    icon: "fa-key",
    link: "registerlancer"
  },
  {
    name: "Success Stories",
    classis: "active",
    icon: "fa-briefcase",
    link: "successstories"
  },
  {
    name: "My Community",
    classis: "active",
    icon: "fa-commenting-o",
    link: "community"
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

  };
});
