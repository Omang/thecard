(function(){
    angular.module('TheCard')
    .controller('sidenav', ['$scope','$state','$http', 
                    function($scope, $state, $http){
             
                        if(localStorage['User-Data'] !== undefined){
                        
                    $scope.user = JSON.parse(localStorage['User-Data']);
                        console.log($scope.user);
                       }
                             
                      // console.log($scope.user);      
                    if($scope.user !== undefined){
                        $scope.okaymove = true;
                        var userid = $scope.user._id;
                        checkCv(userid);
                        checkAd(userid);
                        checkCom(userid);
                    }else{
                        $scope.okaymove = false;
                    }
                    
                function checkCv(item){
                    var request = {
                        userid: item
                    }
                    $http.post('api/checkcv/check', request).then(function(response){
                                            //console.log(response);
                                               //var cvid = response.data[0]._id;
                                                 if(response.data !== null){
                                                     $scope.hidecv = true;
                                                 }else{
                                                     $scope.hidecv = false;
                                                 }
                                                 }).catch(function(error){
                                                    console.log(error); 
                                                 });
                }
                
              function checkAd(item){
                  var request = {
                      userid: item
                  }
                  $http.post('api/checkads/checkad', request).then(function(response){
                     // console.log(response.data);
                      //var test = response.data[0]._id;
                      if(response.data === null){
                          $scope.showad = true;
                      }else{
                          $scope.showad = false;
                      }
                  }).catch(function(error){
                      console.log(error);
                  });
              }
            function checkCom(item){
                var request = {
                    userid: item
                }
                $http.post('api/checkcom/checkcoms', request).then(function(response){
                    console.log(response.data);
                    if(response.data !== null){
                    
                   //console.log(response.data); 
                    //var nice = response.data[0]._id;
                        $scope.rice = true;  
                }
                    $scope.rice = false;
                
                }).catch(function(error){
                   console.log(error); 
                });
                
            }

    }]);
}())