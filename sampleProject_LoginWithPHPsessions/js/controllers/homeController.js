myLoginApp.controller('homeController', function($scope, loginService) {
    $scope.message = 'Home! JK. This is just a demo.';


    $scope.logout=function()
    {
    	loginService.logout();

    }

});
