(function(){
    angular.module('TheCard')
    .controller('cvmaker', ['$state', '$scope', '$http',
                        function($state, $scope, $http){
                            
                $scope.user = JSON.parse(localStorage['User-Data']) || undefined;
                    var user = $scope.user;
                   // user = user.replace('""', '');
                    console.log(user._id);                    
               $scope.reset = function(){
                    $scope.fname = "";
                    $scope.lname = "";
                    $scope.resadd = "";
                    $scope.location = "";
                    $scope.email = "";
                    $scope.skill = "";
                    $scope.experince = "";
                    $scope.work = "";
                    $scope.hobbies = "";
                }
               $scope.createCv= function(){
                   var results = {
                       userid: $scope.user._id,
                       fname: $scope.fname,
                       lname: $scope.lname,
                       resadd: $scope.resadd,
                       location: $scope.location,
                       email: $scope.email,
                       skill: $scope.skill,
                       experince: $scope.experince,
                       work: $scope.work,
                       hobbies: $scope.hobbies
                   }
                   console.log(results);
                   
                   $http.post('api/cvmaker/make', results).then(function(response){
                       console.log(response);
                       
                   }).catch(function(error){
                       console.log(error);
                   });
               }
               
               
               
    }]);
}())