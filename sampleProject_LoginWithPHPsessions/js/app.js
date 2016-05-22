// create the module and name it myLoginApp
    // also include ngRoute for all our routing needs
var myLoginApp = angular.module('loginApp', ['ngRoute']);

// configure our routes
myLoginApp.config(function($routeProvider) {
    $routeProvider
        .when('/login', {
            templateUrl : 'pages/login.html',
            controller  : 'loginController'
        })
        .when('/home', {
            templateUrl : 'pages/home.html',
            controller  : 'homeController'
        })
        .otherwise({
             redirectTo: '/login' 
        });
});



//removes access to home page if user has not authentication
myLoginApp.run(function($rootScope, $location, loginService){
    
    var routespermission=['/home'];

    $rootScope.$on('$routeChangeStart',function () 
    {
        //testing
        // console.log('>Exit Tab: ' + routespermission.indexOf($location.path()) );
        // console.log('>>Logged: ' + loginService.isLogged() );

        if (routespermission.indexOf($location.path())  !=-1  ) 
        {
            var connected = loginService.isLogged();
            connected.then(function (msg) {
               if (!msg.data)
               {
                    $location.path('/login');
               } 
            });
        }
    });
});



