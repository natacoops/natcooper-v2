<?php

/* These are the variable that tell the subject of the email and where the email will be sent.*/

$emailSubject = 'A message from NatCooper.com';
$mailto = 'nat@natcooper.com';

/* These will gather what the user has typed into the fieled. */

$nameField = $_POST['name'];
$emailField = $_POST['email'];
$subjectField = $_POST['subject'];
$messageField = $_POST['message'];

/* This takes the information and lines it up the way you want it to be sent in the email. */

$body = <<<EOD
<br><hr><br>
Name: $nameField <br>
Email: $emailField <br>
Subject: $subjectField <br>
Message: $messageField <br>
EOD;

$headers = "From: $emailField\r\n"; // This takes the email and displays it as who this email is from.
$headers .= "Content-type: text/html\r\n"; // This tells the server to turn the coding into the text.
$success = mail($mailto, $subjectField, $body, $headers); // This tells the server what to send.

header("Location: work/thanks");
die();
?>
