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

// Get POST data
$data = json_decode(file_get_contents('php://input'), true);
$id = isset($data['id']) ? intval($data['id']) : 0;

if ($id <= 0) {
    echo json_encode([
        "success" => false,
        "message" => "Invalid student ID"
    ]);
    exit;
}

// Prepare and execute delete statement
$stmt = $conn->prepare("DELETE FROM students_record WHERE id = ?");
$stmt->bind_param("i", $id);

if ($stmt->execute()) {
    if ($stmt->affected_rows > 0) {
        echo json_encode([
            "success" => true,
            "message" => "Student record deleted successfully"
        ]);
    } else {
        echo json_encode([
            "success" => false,
            "message" => "No student found with this ID"
        ]);
    }
} else {
    echo json_encode([
        "success" => false,
        "message" => "Error deleting record: " . $stmt->error
    ]);
}

$stmt->close();
$conn->close();
?>