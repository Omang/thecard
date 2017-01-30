(function(){
    angular.module('TheCard')
    .controller('hireController',[ 'Upload','$scope', '$http', '$state', '$interval', 
                         function(Upload, $scope, $http, $state, $interval ){
        $scope.working = 'bitch reporting live from the hire controller';
    }]);
}())