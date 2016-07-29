// declare module
var app = angular.module('myApp', []);
// defining controller and making ajax call
app.controller('amenityCtrl', function($scope, $http) {
  $http({
    method : "GET",
    url : "http://prod-joyfulhome-api.synapsys.us/location/amenitiesInLocation/CA/San%20Francisco"
  }).then(function (response) {
      var myData = response.data.data;
        $scope.rtot =myData.restaurant.total;
        $scope.gtot =myData.grocers.total;
        $scope.btot =myData.banks.total;
        $scope.resdata = myData.restaurant.businesses;

      //functions next and prev to handle click event
        $scope.current = 0;
        $scope.next = function() {
            $scope.current = ($scope.current + 1) % $scope.resdata.length;
        };
        $scope.prev =function(){
            if($scope.current== 0){
             $scope.current=$scope.resdata.length;
             $scope.current=($scope.current-1) % $scope.resdata.length;   
        }
            else  $scope.current=($scope.current-1) % $scope.resdata.length;
        }

  },function myError(response) {    // error function to handle ajax failure
       console.log(response.statusText);
    });
});
