// (function () {
//   'use strict';
//
//   angular.module('LunchApp',[])
//
//   .controller('LunchController',function ($scope) {
//     $scope.lunch = "";
//     $scope.msg = "";
//     $scope.checkLunch = function(){
//       if($scope.lunch.length == 0) $scope.msg = "Please enter data first";
//       var lunches = $scope.lunch.split(',');
//       if(lunches.length > 3) {
//         $scope.msg = "Too much!";
//       }else{
//         $scope.msg = "Enjoy";
//       }
//     };
//   });
//
// })();


(function () {
'use strict';

angular.module('LunchApp', [])

.controller('LunchController', function ($scope) {

    $scope.lunch = "";
       $scope.msg = "";
       $scope.checkLunch = function(){

         if($scope.lunch.length == 0) {
           $scope.msg = "Please enter data first";
           return;
         }
         var lunches = $scope.lunch.split(',');
         if(lunches.length > 3) {
           $scope.msg = "Too much!";
         }else{
           $scope.msg = "Enjoy";
         }
       };

});


})();
