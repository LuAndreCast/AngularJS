<?php

$data = json_decode( file_get_contents("php://input") );

$empno = $data->empno;
$fname = $data->fname;
$lname = $data->lname;
$dept  = $data->dept;

$query = "INSERT INTO employee(`emp_no`,`first_name`,`last_name`,`dept_name`) VALUES('$empno','$fname','$lname','$dept')";

require_once './../../dbHandler/dbHandler.php';

$dbHandler	= new dbHandler("devbrosTest");
$results 	= $dbHandler->saveDataToTableWithValues($query);


?>