(function(){
    angular.module('TheCard')
    .controller('regController', ['$scope','$http','$state','$window', 
                         function($scope, $http, $state, $window){
                             
                  $scope.registerUser = function(){
                      console.log($scope.register);
                     var results ={
                        username: $scope.register.username,
                        email: $scope.register.email,
                        password: $scope.register.password
                     };
                      $http.post('api/register/register',results).then(function(response){
                        $window.location.href = '/login';
                      }).catch(function(error){
                          console.log(error);
                      });
                  }
        
                         }]);
}())