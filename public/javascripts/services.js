var flapperNewsServices = angular.module('flapperNews.services', []);

flapperNewsServices.factory('Posts', function(){
  var o = {
    posts : []
  };
  return o;
});
