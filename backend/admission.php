<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

$data = json_decode(file_get_contents("php://input"), true);

if (!$data || empty($data["form_no"])) {
    echo json_encode(["success" => false, "message" => "Invalid input"]);
    exit;
}

$mysqli = new mysqli("localhost", "root", "", "friends");
if ($mysqli->connect_error) {
    echo json_encode(["success" => false, "message" => "DB Error"]);
    exit;
}

// Sanitize input
$form_no = $mysqli->real_escape_string($data["form_no"]);
$date = $mysqli->real_escape_string($data["date"]);
$course_name = $mysqli->real_escape_string($data["course_name"]);
$student_name = $mysqli->real_escape_string($data["student_name"]);
$father_name = $mysqli->real_escape_string($data["father_name"]);
$cnic = $mysqli->real_escape_string($data["cnic"]);
$dob = $mysqli->real_escape_string($data["dob"]);
$gender = $mysqli->real_escape_string($data["gender"]);
$religion = $mysqli->real_escape_string($data["religion"]);
$whatsapp = $mysqli->real_escape_string($data["whatsapp"]);
$contact = $mysqli->real_escape_string($data["contact"]);
$postal = $mysqli->real_escape_string($data["postal_address"]);

$school1 = $mysqli->real_escape_string($data["school1"]);
$class1 = $mysqli->real_escape_string($data["class1"]);
$year1 = $mysqli->real_escape_string($data["year1"]);
$grade1 = $mysqli->real_escape_string($data["grade1"]);

$school2 = $mysqli->real_escape_string($data["school2"]);
$class2 = $mysqli->real_escape_string($data["class2"]);
$year2 = $mysqli->real_escape_string($data["year2"]);
$grade2 = $mysqli->real_escape_string($data["grade2"]);

// Prepare insert statement
$query = "INSERT INTO admission_forms 
  (form_no, date, course_name, student_name, father_name, cnic, dob, gender, religion, whatsapp, contact, postal_address, 
  school1, class1, year1, grade1, school2, class2, year2, grade2) 
  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

// Insert into main table
$stmt1 = $mysqli->prepare($query);
$stmt1->bind_param(
    "ssssssssssssssssssss",
    $form_no,
    $date,
    $course_name,
    $student_name,
    $father_name,
    $cnic,
    $dob,
    $gender,
    $religion,
    $whatsapp,
    $contact,
    $postal,
    $school1,
    $class1,
    $year1,
    $grade1,
    $school2,
    $class2,
    $year2,
    $grade2
);

// Insert into backup table
$query_backup = str_replace("admission_forms", "admission_forms_backup", $query);
$stmt2 = $mysqli->prepare($query_backup);
$stmt2->bind_param(
    "ssssssssssssssssssss",
    $form_no,
    $date,
    $course_name,
    $student_name,
    $father_name,
    $cnic,
    $dob,
    $gender,
    $religion,
    $whatsapp,
    $contact,
    $postal,
    $school1,
    $class1,
    $year1,
    $grade1,
    $school2,
    $class2,
    $year2,
    $grade2
);

// Execute both inserts
if ($stmt1->execute() && $stmt2->execute()) {
    echo json_encode(["success" => true]);
} else {
    echo json_encode(["success" => false, "message" => "Insert failed: " . $stmt1->error . " | " . $stmt2->error]);
}

$stmt1->close();
$stmt2->close();
$mysqli->close();
