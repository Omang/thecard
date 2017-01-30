(function(){
    angular.module('TheCard')
    .controller('loginController', ['$scope', '$state','$http','$window', 
                          function($scope, $state, $http, $window){
        
        $scope.loguserIn = function(){
            console.log($scope.login);
            
          $http.post('api/signin/signin', $scope.login).then(function(response){
              console.log(response.data);
             // if(response){
                  //payload = response.data.split('.')[1];
                  //payload = $window.atob(payload);
                  //console.log(payload);
                  
                 //
            // }
              // payload = JSON.parse(payload);
              localStorage.setItem('User-Data', JSON.stringify(response.data));
              $scope.loggedIn = true;
              $scope.users = response.data;
              console.log($scope.users);
              $window.location.href = '/';
          }).catch(function(error){
              console.log(error);
          });  
        }
        
        
        
       
                              
    }]);
}())