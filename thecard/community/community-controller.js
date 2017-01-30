(function(){
    angular.module('TheCard')
    .controller('community', ['Upload','$scope', '$state', '$http', 
                     function(Upload, $scope, $state,  $http){
                         
        $scope.user = JSON.parse(localStorage['User-Data']) || undefined ;            
        
        $scope.createCom  = function(){
            var file = $scope.file;
            if(file){
            Upload.upload({
                method: 'POST',
                url: 'api/concreate/create',
                data: {
                userid: $scope.user._id,
                comName: $scope.comname,
                comContent: $scope.comcontent
            },
                file: file
            }).progress(function(evt){
                console.log("shit is happening for real");
            }).then(function(response){
                console.log(response);
            }).catch(function(error){
               console.log(error); 
            });
            }
        }    
    
    }]);

}())