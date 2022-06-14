<?php 
//////////////////////////
//Specify default values//
//////////////////////////

//Your E-mail
$your_email = 'info@residenzachora.com';

//Default Subject if 'subject' field does not exist
$default_subject = 'From My Contact Form';

//Message if 'name' field not specified
$name_not_specified = 'Please type a valid name';

//Message if 'message' field not specified
$message_not_specified = 'Please type a vaild message';

//Message if e-mail sent successfully
$email_was_sent = 'Send message complete!';

//Message if e-mail not sent (server not configured)
$server_not_configured = 'Sorry, mail server not configured';


///////////////////////////
//Contact Form Processing//
///////////////////////////
$errors = array();
if(isset($_POST['message']) and isset($_POST['name'])) {
	if(!empty($_POST['name']))
		$sender_name  = stripslashes(strip_tags(trim($_POST['name'])));

	if(!empty($_POST['cognome']))
		$surname  = stripslashes(strip_tags(trim($_POST['cognome'])));
	
	if(!empty($_POST['message']))
		$message      = stripslashes(strip_tags(trim($_POST['message'])));
	
	if(!empty($_POST['email']))
		$sender_email = stripslashes(strip_tags(trim($_POST['email'])));
	
	if(!empty($_POST['subject']))
		$subject      = stripslashes(strip_tags(trim($_POST['subject'])));
	
	if(!empty($_POST['telefono']))
		$telephone  = stripslashes(strip_tags(trim($_POST['telefono'])));

	if(!empty($_POST['comune']))
		$country  = stripslashes(strip_tags(trim($_POST['comune'])));

	if(!empty($_POST['cap']))
		$cap  = stripslashes(strip_tags(trim($_POST['cap'])));
		
	$p1  = stripslashes(strip_tags(trim($_POST['privacy-1'])));
	$p2  = stripslashes(strip_tags(trim($_POST['privacy-2'])));
	$p3  = stripslashes(strip_tags(trim($_POST['privacy-3'])));


	//Message if no sender name was specified
	if(empty($sender_name)) {
		$errors[] = $name_not_specified;
	}

	//Message if no message was specified
	if(empty($message)) {
		$errors[] = $message_not_specified;
	}

	$from = (!empty($sender_email)) ? 'From: '.$sender_email : '';

	$subject = (!empty($subject)) ? $subject : $default_subject;

	//$message = (!empty($message)) ? wordwrap($message, 70) : '';

	$message = "	Nome: $sender_name $surname

	E-mail: $sender_email 

	Messaggio: $message

	Telefono: $telephone

	Comune: $country, $cap

	Privacy boxes: $p1, $p2, $p3
	";


	//sending message if no errors
	if(empty($errors)) {
		if (mail($your_email, $subject, $message, $from)) {
			echo $email_was_sent;
		} else {
			$errors[] = $server_not_configured;
			echo implode('<br>', $errors );
		}
	} else {
		echo implode('<br>', $errors );
	}
} else {
	// if "name" or "message" vars not send ('name' attribute of contact form input fields was changed)
	echo '"name" and "message" variables were not received by server. Please check "name" attributes for your input fields';
}
?>
