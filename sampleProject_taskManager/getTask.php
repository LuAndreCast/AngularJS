<?php

$status = '%';
if(isset($_GET['status']))
{
	$status = $_GET['status'];
}
$query="SELECT * FROM tasks WHERE status like '$status' order by status,id desc";

require_once './../../dbHandler/dbHandler.php';

$dbHandler	= new dbHandler("devbrosTest");
$results 	= $dbHandler->getDataFromTableWithStatement($query);


echo json_encode($results);

?>