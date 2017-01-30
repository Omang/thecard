(function(){
    angular.module('TheCard')
    .controller('adsController', ['Upload', '$scope', '$state','$http', '$interval', 
                         function(Upload, $scope, $state, $http, $interval){
                             
                $scope.user = JSON.parse(localStorage['User-Data']);
                
                $scope.productform = function(){
                    $scope.formshow = 'the form baby';
                    
                }
                
                
                
        
    }]);
}())