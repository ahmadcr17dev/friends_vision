<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

$data = json_decode(file_get_contents("php://input"));

if (!isset($data->username) || !isset($data->password)) {
    echo json_encode(["success" => false, "message" => "Missing credentials"]);
    exit;
}

$mysqli = new mysqli("localhost", "root", "", "friends");
if ($mysqli->connect_error) {
    echo json_encode(["success" => false, "message" => "Database error"]);
    exit;
}

$username = $mysqli->real_escape_string($data->username);
$password = $mysqli->real_escape_string($data->password);

$query = "SELECT * FROM users WHERE username='$username' AND password='$password'";
$result = $mysqli->query($query);

if ($result && $result->num_rows === 1) {
    echo json_encode(["success" => true]);
} else {
    echo json_encode(["success" => false]);
}

$mysqli->close();
