<?php

require_once './../../dbHandler/dbHandler.php';

$dbHandler	= new dbHandler("devbrosTest");
$results 	= $dbHandler->getAllDataFrom("customers");

// print_r($results);
echo json_encode($results);

?>
