var regApp = angular.module("regApp", []);
regApp.controller("signUpController", function ($scope, $http) {
    $scope.userData = {
        userNameValid: false,
    };
    $scope.submitForm = function () {
        if ($scope.signUpForm.$valid) {
            console.log('sasas');
            $http({
                method: 'post',
                url: 'getTest',
                data: {
                    userName: $scope.userData.userName,
                    password: $scope.userData.password
                }
            }).then(function successCallback(response) {
                console.log("后台成功！");
            }, function errorCallback(response) {
                console.log("后台失败！");
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            });
        } else {

        }
    }
    $scope.checkUserName = function () {
        $http({
            method: 'GET',
            url: 'checkUserName?userName=' + $scope.userData.userName
        }).then(function successCallback(response) {
            if (response.data.msg == 'exist') {
                $scope.userData.userNameValid = false;
                console.log(response.data.msg);
            } else {
                $scope.userData.userNameValid = true;
                console.log(response.data.msg);
            }
        }, function errorCallback(response) {
            console.log(response.data.msg);
            // called asynchronously if an error occurs
            // or server returns response with an error status.
        });
    }
})
