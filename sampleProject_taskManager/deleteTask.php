<?php
if(isset($_GET['taskID'])){
$taskID = $_GET['taskID'];

$query="delete from tasks where id='$taskID'";

}
?>