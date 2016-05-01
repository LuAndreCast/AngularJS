<?php

if(isset($_GET['task']))
{
	$task = $_GET['task'];
	$status = "0";
	$created = time();

	$query="INSERT INTO tasks(task,status,created_at)  VALUES ('$task', '$status', '$created')";

	require_once './../../dbHandler/dbHandler.php';

	$dbHandler	= new dbHandler("devbrosTest");
	$results 	= $dbHandler->getDataFromTableWithStatement($query);


	echo json_encode($results);


}

?>