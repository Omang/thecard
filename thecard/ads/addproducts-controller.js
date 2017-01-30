(function(){
    angular.module('TheCard')
          .controller('addproducts', ['Upload','$scope', '$http', '$state', '$window', 
                              function(Upload, $scope, $http, $state, $window){
              
                                $scope.user = JSON.parse(localStorage['User-Data']) || undefined;
                           
                           $scope.$watch(function(){
                              return $scope.file; 
                           }, function(){
                               $scope.upload($scope.file);
                           }); 
                            
                        $scope.upload = function(file){
                            if(file){
                                Upload.upload({
                                    method: 'POST',
                                    url: 'api/uploadpic/pics',
                                    data: {userid: $scope.user._id},
                                    file: file
                                }).progress(function(evt){
                                    console.log("shit firing");
                                }).then(function(response){
                                    console.log('file saved');
                                    console.log(response);
                                    $scope.productid = response.data._id;
                                    //showImage($scope.productid);
                                }).catch(function(error){
                                    console.log(error);
                                });
                            }
                        }
                    $scope.productSave = function(){
                        var request = {
                            userid: $scope.user._id,
                            productname: $scope.product.name,
                            productsize: $scope.product.size,
                            productprice: $scope.product.price,
                            productinstock: $scope.product.instock,
                            productdescrip: $scope.product.description
                        }
                        console.log(request);
                        $http.post('api/product/save', request).then(function(response){
                            console.log(response);
                            //$scope.rightmove = response.data.inStock;
                        }).catch(function(error){
                            console.log(error);
                        });
                    }

    
                                  
                                  
          }])
}())