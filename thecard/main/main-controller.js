(function(){
    angular.module('TheCard')
    .controller('mainController', ['Upload', '$scope', '$state','$http', '$interval', 
                         function(Upload, $scope, $state, $http, $interval){
                             
                   if(localStorage['User-Data'] !== undefined){
                        
                    $scope.user = JSON.parse(localStorage['User-Data']);
                        console.log($scope.user);
                    }
                  if($scope.user !== undefined){
                      var userid = $scope.user._id;
                         getCv(userid);
                         getads(userid);
                         getComs(userid);
                         getMusic(userid);
                        $scope.okaystuff = true;
                    }else{
                        $scope.okaystuff= false;
                    }
                    function getCv(userdata){
                        console.log(userdata);
                        var request ={
                            userid: userdata
                        }
                        $http.post('api/getcv/get', request).then(function(response){
                        $scope.fname = response.data[0].fname;
                        $scope.lname = response.data[0].lname;
                        $scope.resadd = response.data[0].resadd;
                        $scope.location = response.data[0].location;
                        $scope.email = response.data[0].email;
                        $scope.skill = response.data[0].skill;
                        $scope.experince = response.data[0].experince;
                        $scope.work = response.data[0].work;
                        $scope.hobbies = response.data[0].hobbies;
                        //console.log($scope.yourcv.fname);
                        }).catch(function(error){
                            console.log(error);
                        });
                    }
                function getads(userdata){
                        console.log(userdata);
                        var request ={
                            userid: userdata
                        }
                        $http.post('api/getads/ads', request).then(function(response){
                            
                         if(response.data !== null){
                       $scope.products = true;
                        console.log(response);
                        $scope.productpic = response.data.productImage;
                        $scope.productname = response.data.productName;
                        $scope.productprice = response.data.productPrice;
                        $scope.productsize = response.data.productSize;
                        $scope.productinstock = response.data.inStock || 1;
                         }else{
                             $scope.products = false;
                         }
                            
                        }).catch(function(error){
                            console.log(error);
                        });
                    }
                 function getComs(stuff){
                     var request ={
                         userid: stuff
                     }
                     $http.post('api/getcoms/get', request).then(function(response){
                         //console.log(response);
                         if(response.data !== null){
                             $scope.Cman = true;
                         
                         var dateset = response.data.comdate;
                         var datetest = dateset.split(".");
                         
                         var dateat = datetest[2];
                         var datedate = dateat.slice(0,2);
                         
                        // $scope.Cname = response.data.comName;
                         $scope.Ccontent = response.data.comContent;
                         $scope.Cimage = response.data.comImage;
                         $scope.datayear = datetest[0];
                         $scope.datemonth = datetest[1];
                         $scope.datedate = datedate;
                             
                         }else{
                            $scope.Cman = false; 
                         }
                         
                         //console.log(datedate);
                     }).catch(function(error){
                        console.log(error); 
                     });
                 }
            function getMusic(test){
                var request = {
                    userid: test
                }
                $http.post('api/gettracks/tracks', request)
                .then(function(response){
                    $scope.track = response.data[0].tunes[0].track;
                    
                })
                .catch(function(error){
                   console.log(error); 
                });
            }
        $scope.audioplay = function(e){
            var audio = new Audio($scope.track);
            audio.play();
        }
                    
                    
                    
        
    }]);
}())