(function(){
    angular.module('TheCard')
    .controller('navigationController', ['$scope', '$state', '$http','$window', 
                                 function($scope, $state, $http, $window){
    if(localStorage['User-Data']){
        
                     $scope.loggedIn = true;
              }else{
                     $scope.loggedIn = false;
             }
                            
     $scope.logout = function(){
            localStorage.clear();
            $scope.loggedIn = false;
           $window.location.href = '/';
        }
        
        
    }])
    
}())