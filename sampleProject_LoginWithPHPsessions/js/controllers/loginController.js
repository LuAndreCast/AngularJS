myLoginApp.controller('loginController', function($scope, $location,loginService) {

	//properties
    $scope.loginMessage = '';   


	//redirect if user is already signed in
	checkIfUserIsSignedIn();


	//atempt to log in
    $scope.login = function(user)
    {
    	loginService.login(user,$scope); 
    }//eo



    function checkIfUserIsSignedIn() {
    	
    	var userSignStatus = loginService.isLogged();
    	userSignStatus.then(function (msg) {
           if (msg.data == 'authenticated')
           {
                $location.path('/home');
           }
        });
    }
});