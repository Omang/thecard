(function(){
    angular.module('TheCard')
    .controller('dashboardController', ['Upload', '$scope', '$state','$http', '$interval', 
                         function(Upload, $scope, $state, $http, $interval){
                        $scope.dashboard = "reporting live from the dashboard";
        
    }]);
}())