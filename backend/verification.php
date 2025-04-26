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

// Get roll number from query parameter
$roll_number = isset($_GET['roll_number']) ? $conn->real_escape_string($_GET['roll_number']) : '';

if (empty($roll_number)) {
    echo json_encode([
        "success" => false,
        "message" => "Roll number is required"
    ]);
    exit;
}

// Prepare SQL statement
$sql = "SELECT * FROM students_record WHERE roll_number = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $roll_number);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    $student = $result->fetch_assoc();
    echo json_encode([
        "success" => true,
        "student" => $student
    ]);
} else {
    echo json_encode([
        "success" => false,
        "message" => "No student found with this roll number"
    ]);
}

$stmt->close();
$conn->close();
