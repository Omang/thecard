(function(){
    angular.module('TheCard')
    .controller('musicController', ['Upload', '$scope', '$state','$http', '$interval', 
                         function(Upload, $scope, $state, $http, $interval){
           $scope.user = JSON.parse(localStorage['User-Data']) || undefined;                  
        
          $scope.uploadTrack = function(){
              
              Upload.upload({
                      url: 'api/track/track',
                      method: 'POST',
                      data: {
                          userid: $scope.user._id
                      },
                      file: $scope.track
                  }).progress(function(evt){
                      console.log("firing a track");
                     $scope.okay = true;
                  }).then(function(response){
                      console.log(response);
                  }).catch(function(error){
                      console.log(error);
                  });
              
          }
                             
    }]);
}())