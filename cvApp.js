var cvApp = angular.module("cvApp", []);

cvApp.controller("cvController", function cvController($scope) {
    $scope.cv = {
        name: "Maxim Nisenbaum"
    };
});