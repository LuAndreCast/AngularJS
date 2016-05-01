app.controller( 'employeeController'  , function($scope,$http){

		    getData();

    //add an employee
	$scope.insertData = function(){

		$scope.status = '';

		$http.post("addNewEmployee.php" , { 'empno':$scope.empno,'fname':$scope.fname,'lname':$scope.lname, 'dept':$scope.dept })
		.success( function(data,status,headers,config){
		
			$scope.status = "Successfully Entered";
			clearFields();		

			//pulls new data
		    getData();
		
		}).error(function(data, status, headers, config) {
	        $scope.status = "unable to save";
	    });


	}

	function clearFields() {
        $scope.empno = '';
        $scope.fname = '';
        $scope.lname = '';
        $scope.dept  = '';
    }

    //retrieves all employees
    function getData(){
		$http.post("getEmployees.php" , { 'empno':$scope.empno,'fname':$scope.fname,'lname':$scope.lname, 'dept':$scope.dept })
		.success( function(data,status,headers,config){
		
			if (data.length > 0) 
			{
				$scope.employees = data;	
			}
		
		}).error(function(data, status, headers, config) {
	       
	    });
	}

});