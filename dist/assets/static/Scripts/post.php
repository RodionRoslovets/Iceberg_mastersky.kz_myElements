<? 
// ----------------------------конфигурация-------------------------- // 
 
$adminemail="rodion18570@gmail.com";  // e-mail админа 
 
//-------------------------------Парс json--------------------------------------- // 
 
$responseJson_str = file_get_contents('php://input');
$responseJson = '[' . $responseJson_str . ']';
$response = json_decode($responseJson, true); // преобразование строки в формате json в ассоциативный массив 
$user_name = $response[0]['name'];
$user_email = $response[0]['email'];
$user_phone = $response[0]['phone'];
$req = $response[0];


$headers  = "Content-type: text/html; charset=utf-8 \r\n"; 
$headers .= "From:masters1@mastersky.kz\r\n"; 
//Сообщение для админа
$msg="<html><body>
	<p>Новое сообщение.</p><br></br>	
    <p><b>Пользователь<b>: $user_name</p><br></br></p>	
    <p><b>email</b>:$user_email</p><br></br>
    <p><b>Телефон</b>:$user_phone</p>
	</body></html>
";
 // Отправляем письмо админу  
 
mail($adminemail, $user_name, $msg, $headers); 

?>