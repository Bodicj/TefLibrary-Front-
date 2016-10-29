var app = angular.module('app' , []);

app.controller('mainCtrl', function ($http) {
    $http.get('http://localhost:500')
        .success (function (result) {
            console.log('success')
        })
        .error (function (result) {
            console.log('error')
        })

} );