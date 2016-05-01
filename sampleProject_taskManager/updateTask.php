<?php

if(isset($_GET['taskID'])){
$status = $_GET['status'];
$taskID = $_GET['taskID'];
$query="update tasks set status='$status' where id='$taskID'";

}
?>