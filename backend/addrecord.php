<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Database connection
$servername = "localhost";
$username = "root"; // Change to your MySQL username
$password = ""; // Change to your MySQL password
$dbname = "friends"; // Change to your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die(json_encode(["success" => false, "message" => "Connection failed: " . $conn->connect_error]));
}

// Get POST data
$data = json_decode(file_get_contents('php://input'), true);

// Begin transaction for atomic operations
$conn->begin_transaction();

try {
    // Prepare SQL statement for main table
    $stmt_main = $conn->prepare("INSERT INTO students_record (
        name, father_name, joining_date, course_name, course_duration, cnic, whatsapp, 
        guardian_contact, postal_address, dob, gender, roll_number, religion,
        school_name, school_class, school_year, school_grade,
        college_name, college_class, college_year, college_grade
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");

    // Bind parameters for main table
    $stmt_main->bind_param(
        "sssssssssssssssssssss",
        $data['name'],
        $data['father_name'],
        $data['joining_date'],
        $data['course_name'],
        $data['course_duration'],
        $data['cnic'],
        $data['whatsapp'],
        $data['guardian_contact'],
        $data['postal_address'],
        $data['dob'],
        $data['gender'],
        $data['roll_number'],
        $data['religion'],
        $data['school_name'],
        $data['school_class'],
        $data['school_year'],
        $data['school_grade'],
        $data['college_name'],
        $data['college_class'],
        $data['college_year'],
        $data['college_grade']
    );

    // Execute main table insert
    $main_result = $stmt_main->execute();
    $stmt_main->close();

    if (!$main_result) {
        throw new Exception("Main table insert failed");
    }

    // Prepare SQL statement for backup table (assuming same structure)
    $stmt_backup = $conn->prepare("INSERT INTO students_record_backup (
        name, father_name, joining_date, course_name, course_duration, cnic, whatsapp, 
        guardian_contact, postal_address, dob, gender, roll_number, religion,
        school_name, school_class, school_year, school_grade,
        college_name, college_class, college_year, college_grade
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");

    // Bind parameters for backup table
    $stmt_backup->bind_param(
        "sssssssssssssssssssss",
        $data['name'],
        $data['father_name'],
        $data['joining_date'],
        $data['course_name'],
        $data['course_duration'],
        $data['cnic'],
        $data['whatsapp'],
        $data['guardian_contact'],
        $data['postal_address'],
        $data['dob'],
        $data['gender'],
        $data['roll_number'],
        $data['religion'],
        $data['school_name'],
        $data['school_class'],
        $data['school_year'],
        $data['school_grade'],
        $data['college_name'],
        $data['college_class'],
        $data['college_year'],
        $data['college_grade']
    );

    // Execute backup table insert
    $backup_result = $stmt_backup->execute();
    $stmt_backup->close();

    if (!$backup_result) {
        throw new Exception("Backup table insert failed");
    }

    // Commit transaction if both inserts succeeded
    $conn->commit();
    echo json_encode(["success" => true, "message" => "Record added successfully"]);
} catch (Exception $e) {
    // Roll back transaction if any error occurs
    $conn->rollback();
    echo json_encode(["success" => false, "message" => "Error: " . $e->getMessage()]);
}

$conn->close();
