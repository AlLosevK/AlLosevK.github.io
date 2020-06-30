<?php
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone']
$to = "al.losev.k@gmail.com"; // Здесь нужно написать e-mail, куда будут приходить письма
$from = $_POST['email']; // Здесь нужно написать e-mail, откуда будут приходить письма
$subject = "Форма отправки сообщений с сайта-портфолио"; // Тема сообщения
$message = $first_name . " оставил сообщение:" . "\n\n" . $_POST['message'];

//Преобразуем символы
$name = htmlspecialchars($name);
$email = htmlspecialchars($email);

//Декодер Url
$name = urldecode($name);
$email = urldecode($email);

//Удаляем пробелы
$fio = trim($fio);
$email = trim($email);

$headers = "From:" . $from;

mail($to,$subject,$message,$headers);
// mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender - Отключено!
echo "Сообщение отправлено. Спасибо Вам " . $first_name . ", мы скоро свяжемся с Вами.";
echo "<br /><br /><a href='al.losev.kgithub.io/dist'>Вернуться на сайт.</a>";

?>
