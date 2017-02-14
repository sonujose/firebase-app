'use strict';

AboutController.$inject = ['$scope', 'dataService'];

function AboutController($scope, dataService) {
    $scope.currentState = "about-controller";
     dataService.getDetails().then((res) => {
             $scope.articleList = res;
         }, (error) => {
             $scope.error = error;
         });
     // $scope.text = "This is a sample app";
}
module.exports = AboutController;
