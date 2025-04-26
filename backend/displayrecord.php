<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Database connection
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "friends";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die(json_encode([
        "success" => false,
        "message" => "Connection failed: " . $conn->connect_error
    ]));
}

// Prepare SQL statement to fetch all students
$sql = "SELECT * FROM students_record ORDER BY id ASC";
$result = $conn->query($sql);

if ($result) {
    $students = [];
    
    while ($row = $result->fetch_assoc()) {
        $students[] = $row;
    }
    
    echo json_encode([
        "success" => true,
        "students" => $students
    ]);
} else {
    echo json_encode([
        "success" => false,
        "message" => "Error fetching records: " . $conn->error
    ]);
}

$conn->close();
?>