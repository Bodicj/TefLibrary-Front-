angular.module('myApp', [])
    .controller('ButtonCtrl', ['$scope', '$http', function($scope, $http) {


        $scope.getRequest = function () {
            var request = 'http://localhost:5000/api/v1/books?q="'+$scope.search_bar+'"&search_by="'+$scope.search_by+'"';
            $http.get('Book.json').success(function(data) {
                $scope.books = data;
            });
        };
    }]);