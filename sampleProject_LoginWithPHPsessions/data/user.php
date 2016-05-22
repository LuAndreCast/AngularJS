<?php
	$user = json_decode(file_get_contents('php://input'));

	$email 		= $user->email;
	$password 	= $user->password;

	if ($email == "email@me.com" && $password == "123456") {
		
		session_start();

		$_SESSION['uid'] = uniqid('ang_');

		print $_SESSION['uid'];

	} 




	// if ($email == "email@me.com" && $password == "123456") {
	// 	print 'success';
	// } else {
	// 	print 'fail';
	// }
	
?>