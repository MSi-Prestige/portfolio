<?php 
//! переменные имена из html   name=phone ......
$name = $_POST['name'];
$email = $_POST['email'];
$text = $_POST['text'];
$checkbox = $_POST['checkbox'];

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

// $mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'if38.nano.lv';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'bmw1@bmwrestor.lv';                 // Наш логин
$mail->Password = 'iljaK9943079';                           //! Наш пароль от ящика 16 значный 
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to
 
$mail->setFrom('bmw1@bmwrestor.lv', 'Portfolio');   // От кого письмо 
$mail->addAddress('iljuxa12@gmail.com');     //! Кому письмо. или тотже iljuxa12@gmail.com
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Данные';
$mail->Body    = '
		Пользователь оставил данные <br> 
	Имя: ' . $name . ' <br>
	Номер телефона: ' . $phone . '<br>
	E-mail: ' . $email . '<br>
	Сообщение: ' . $text . '<br>
	checkbox: = ' .$checkbox . ''; 

if(!$mail->send()) {
    return false;
} else {
    return true;
}

?>