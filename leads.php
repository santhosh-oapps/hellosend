<?php

  header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
        header('Access-Control-Allow-Credentials: true');
        header('Access-Control-Max-Age: 86400');    // cache for 1 day

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';


$name = $_POST["name"];
$inputEmail4 = $_POST["inputEmail4"];
$typePhone = $_POST["typePhone"];
$location = $_POST["location"];
$model = $_POST["model"];

date_default_timezone_set('Asia/Kolkata');
$datelog = date('d-m-y h:i:s');
$dateonly = date('d-m-y');


//mail

$mail = new PHPMailer(true);

$mail->isSMTP();
$mail->Host = 'smtp.gmail.com';
$mail->SMTPAuth = true;
$mail->Username = 'neeraj.moorjani@petromin.in'; //your gmail password
$mail->Password = 'mgxptbqwviyppksx'; //your gmail app password
$mail->SMTPSecure = 'ssl';
$mail->Port = 465;
$mail->setFrom('neeraj.moorjani@petromin.in'); // your gmail password
//$mail->addAddress('jyogeshkumar111@gmail.com');
$mail->addAddress('customercare.pe@petromin.in');
$mail->isHTML(true);
$mail->Subject = 'Petromin Website Leads';
$mail->Body = 'Petromin Service : '."\n<br>".'name : '. $name ."\n<br>".'inputEmail4 : ' . $inputEmail4 ."\n<br>".'typePhone : ' . $typePhone ."\n<br>".'location : ' . $location ."\n<br>".  'model : ' . $model ."\n<br>". 'Date : ' . $datelog ."\n\n";

$mail->send();

//mail


//mail

$mail = new PHPMailer(true);

$mail->isSMTP();
$mail->Host = 'smtp.gmail.com';
$mail->SMTPAuth = true;
$mail->Username = 'neeraj.moorjani@petromin.in'; //your gmail password
$mail->Password = 'mgxptbqwviyppksx'; //your gmail app password
$mail->SMTPSecure = 'ssl';
$mail->Port = 465;
$mail->setFrom('neeraj.moorjani@petromin.in'); // your gmail password
//$mail->addAddress('jyogeshkumar111@gmail.com');
$mail->addAddress('keerthivasan@bleap.in');
$mail->isHTML(true);
$mail->Subject = 'Petromin Website Leads';
$mail->Body = 'Petromin Service : '."\n<br>".'name : '. $name ."\n<br>".'inputEmail4 : ' . $inputEmail4 ."\n<br>".'typePhone : ' . $typePhone ."\n<br>".'location : ' . $location ."\n<br>".  'model : ' . $model ."\n<br>". 'Date : ' . $datelog ."\n\n";

$mail->send();

//mail

//mail

$mail = new PHPMailer(true);

$mail->isSMTP();
$mail->Host = 'smtp.gmail.com';
$mail->SMTPAuth = true;
$mail->Username = 'neeraj.moorjani@petromin.in'; //your gmail password
$mail->Password = 'mgxptbqwviyppksx'; //your gmail app password
$mail->SMTPSecure = 'ssl';
$mail->Port = 465;
$mail->setFrom('neeraj.moorjani@petromin.in'); // your gmail password
//$mail->addAddress('jyogeshkumar111@gmail.com');
$mail->addAddress('saheli@voizworks.in');
$mail->isHTML(true);
$mail->Subject = 'Petromin Website Leads';
$mail->Body = 'Petromin Service : '."\n<br>".'name : '. $name ."\n<br>".'inputEmail4 : ' . $inputEmail4 ."\n<br>".'typePhone : ' . $typePhone ."\n<br>".'location : ' . $location ."\n<br>".  'model : ' . $model ."\n<br>". 'Date : ' . $datelog ."\n\n";

$mail->send();

//mail

//mail

$mail = new PHPMailer(true);

$mail->isSMTP();
$mail->Host = 'smtp.gmail.com';
$mail->SMTPAuth = true;
$mail->Username = 'neeraj.moorjani@petromin.in'; //your gmail password
$mail->Password = 'mgxptbqwviyppksx'; //your gmail app password
$mail->SMTPSecure = 'ssl';
$mail->Port = 465;
$mail->setFrom('neeraj.moorjani@petromin.in'); // your gmail password
//$mail->addAddress('jyogeshkumar111@gmail.com');
$mail->addAddress('mohanapriya@voizworks.in');
$mail->isHTML(true);
$mail->Subject = 'Petromin Website Leads';
$mail->Body = 'Petromin Service : '."\n<br>".'name : '. $name ."\n<br>".'inputEmail4 : ' . $inputEmail4 ."\n<br>".'typePhone : ' . $typePhone ."\n<br>".'location : ' . $location ."\n<br>".  'model : ' . $model ."\n<br>". 'Date : ' . $datelog ."\n\n";

$mail->send();

//mail





$logFile = 'entry.log';
file_put_contents($logFile, 'Petromin Service : '."\n".'name : '. $name ."\n".'inputEmail4 : ' . $inputEmail4 ."\n".'typePhone : ' . $typePhone ."\n".'location : ' . $location ."\n".  'model : ' . $model ."\n". 'Date : ' . $datelog ."\n\n", FILE_APPEND);



$curl = curl_init();
curl_setopt_array($curl, array(
CURLOPT_URL=>"https://accounts.zoho.in/oauth/v2/token?refresh_token=1000.31769d272ef5ec85e7f9583129026501.d41c328a43cc529423bf92832932a543&client_id=1000.SJNU28GDT4DYA0TY484EQAD3L61CSZ&client_secret=3a3227292868b67bf04f71339e4eb923d158bde478&grant_type=refresh_token",
CURLOPT_RETURNTRANSFER => true,
CURLOPT_ENCODING => "",
CURLOPT_MAXREDIRS => 10,
CURLOPT_TIMEOUT => 30,
CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
CURLOPT_CUSTOMREQUEST => "POST"
));
$response = curl_exec($curl);
$err = curl_error($curl);
curl_close($curl);
if ($err) {
echo "cURL Error #:" . $err;
} else {
// echo $response;
$responseData = json_decode($response, true);
$access_token = $responseData['access_token'];
//leads api
function leads($name,$inputEmail4,$typePhone,$model,$location,$access_token){
    $name = $name;
    $inputEmail4 = $inputEmail4;
    $typePhone = $typePhone;
    $model = $model;
    $location = $location;
    $access_token = $access_token;
$post_data = [
    'data' => [
        [
            "Company" => "Test company",
            "Last_Name" => "-",
            "First_Name"=> $name,
            "Email" => $inputEmail4,
            "State" => "Tamilnadu",
            "Location" => $location,
            "Phone" => $typePhone,
            "Lead_Source" => 'Website Form',
            "Brand" => $model,
            "Description" => ""
        ]
        ],
        'trigger' => [
            "approval",
            "workflow",
            "blueprint"
        ]
        ];
        $ch = curl_init();
        curl_setopt( $ch, CURLOPT_URL, "https://www.zohoapis.in/crm/v5/Leads" );
        curl_setopt( $ch, CURLOPT_POST, 1 );
        curl_setopt( $ch, CURLOPT_POSTFIELDS, json_encode($post_data) );
        curl_setopt( $ch, CURLOPT_RETURNTRANSFER, true );
        curl_setopt( $ch, CURLOPT_SSL_VERIFYPEER, 0 );
        curl_setopt( $ch, CURLOPT_HTTPHEADER, array(
            'Authorization: Zoho-oauthtoken ' . $access_token,
            'Content-Type: application/x-www-form-urlencoded'
            ) );
        $response = curl_exec($ch);
        $response = json_decode($response);
        echo json_encode($response);

	
}
leads($name,$inputEmail4,$typePhone,$model,$location,$access_token);
//leads api
// echo $accessToken;
}



?>