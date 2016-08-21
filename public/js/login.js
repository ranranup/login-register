var loginApp = angular.module("loginApp", []);
loginApp.controller("loginController", function ($scope, $http) {
    $scope.userData = {
        userNameValid : true,
        passwordValid : true
    };
    $scope.submitForm = function () {
        if ($scope.loginForm.$valid) {
            $http({
                method: 'post',
                url: 'getTest',
                data: {
                    userName:$scope.userData.userName,
                    password: $scope.userData.password
                }
            }).then(function successCallback(response) {
                console.log(response.data.msg);
                if(response.data.msg == "success") {
                    $scope.userData.passwordValid = true;
                } else {
                    console.log('sdsd');
                    $scope.userData.passwordValid = false;
                }
            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            });
        } else {

        }
    }
    $scope.checkUserName = function() {
        $http({
            method: 'GET',
            url: 'checkUserName?userName='+$scope.userData.userName
        }).then(function successCallback(response) {
            if(response.data.msg != 'exist') {
                $scope.userData.userNameValid = false;
            } else {
                $scope.userData.userNameValid = true;
            }
        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
        });
    }
})
