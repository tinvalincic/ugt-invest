<?php
header("Content-Type: application/json");
$post_body = file_get_contents('php://input');
$data = json_decode($post_body);
iconv_set_encoding("internal_encoding", "UTF-8");

function errorExit($message, $code)
{
  $resp = array("status" => "error", "code" => $code, "message" => $message);
  echo json_encode($resp);
  exit();
}

$name = $data->name;
$email_address = $data->email;
$phone = $data->phone;
$message = $data->message;
$apartment = $data->apartment;

if (
  empty($name) ||
  empty($email_address) ||
  empty($phone) ||
  empty($message)
) {
  errorExit(
    "All fields are required",
    1
  );
}

if (!filter_var($email_address, FILTER_VALIDATE_EMAIL)) {
  errorExit(
    "Invalid email address " . $email_address . " " . filter_var($email_address, FILTER_VALIDATE_EMAIL),
    2
  );
}

$subject = "Upit sa stranice UGT Invest";
if ($apartment) {
  $subject .= " - apartman $apartment";
}

if (empty($errors)) {
  $to = 'prodaja@ugt-invest.hr';
  $body = "Imate novu poruku sa stranice: ugt-invest.hr. " . "\n Ime i prezime: $name \n Telefon: $phone \n Email: $email_address \n";
  if ($apartment) {
    $body .= "\n Apartman: $apartment";
  }
  $body .= "\n Poruka:\n $message";
  $headers = "From: $email_address\n";
  $headers .= "Reply-To: $email_address";
  mb_send_mail($to, $subject, $body, $headers);
  $resp = array("status" => "success", "code" => 0);
  echo json_encode($resp);
  exit();
}
?>