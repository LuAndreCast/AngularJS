
myLoginApp.factory('loginService', function($http,$location,sessionService ){
	return {
		login:function(user, scope){

			//checking login credentials
			var $promise = $http.post('data/user.php',user); //sending data to server
			$promise.then(function(msg){

				var uid = msg.data;
				if (uid) {
					scope.loginMessage = "Succcess log in!";

					//saving uid
					sessionService.set('uid',uid);

					//redirecting page
					$location.path('/home');

				}
				else
				{
					scope.loginMessage = "Invalid log in!";

					//redirecting page
					$location.path('/login');
				}
			});
		},//eom
		logout:function () {
			//dstroying uid
			sessionService.destroy('uid');
			
			//redirecting page
			$location.path('/login');
		},//eom
		isLogged:function()
		{

			var $checkSessionServer = $http.post('data/check_session.php');
			return $checkSessionServer;

			// if (sessionService.get('user')) {
			// 	return true;
			// }
			// else
			// {
			// 	return false;
			// }
		}//eom
	}
});