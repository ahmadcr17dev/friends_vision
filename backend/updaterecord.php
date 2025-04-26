<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, PUT");
header("Access-Control-Allow-Headers: Content-Type");

// Database configuration
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

// Handle GET request for searching by roll number
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    if (isset($_GET['roll_number'])) {
        $rollNumber = $_GET['roll_number'];

        // Prepare search statement
        $stmt = $conn->prepare("SELECT * FROM students_record WHERE roll_number LIKE ?");
        $searchParam = "%" . $rollNumber . "%";
        $stmt->bind_param("s", $searchParam);

        if ($stmt->execute()) {
            $result = $stmt->get_result();
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
                "message" => "Error searching records: " . $stmt->error
            ]);
        }

        $stmt->close();
        exit;
    } else {
        echo json_encode([
            "success" => false,
            "message" => "Roll number parameter is required for search"
        ]);
        exit;
    }
}

// Handle PUT request for updating records
if ($_SERVER['REQUEST_METHOD'] === 'PUT') {
    // Get the input data
    $data = json_decode(file_get_contents("php://input"), true);

    // Validate required fields
    if (!isset($data['id']) || empty($data['id'])) {
        echo json_encode([
            "success" => false,
            "message" => "Student ID is required"
        ]);
        exit;
    }

    // Prepare the update statement
    $sql = "UPDATE students_record SET 
            name = ?,
            father_name = ?,
            roll_number = ?,
            cnic = ?,
            dob = ?,
            course_name = ?,
            course_duration = ?,
            joining_date = ?,
            whatsapp = ?,
            guardian_contact = ?,
            gender = ?,
            religion = ?,
            postal_address = ?,
            school_name = ?,
            school_class = ?,
            school_year = ?,
            school_grade = ?,
            college_name = ?,
            college_class = ?,
            college_year = ?,
            college_grade = ?
            WHERE id = ?";

    $stmt = $conn->prepare($sql);

    if (!$stmt) {
        echo json_encode([
            "success" => false,
            "message" => "Prepare failed: " . $conn->error
        ]);
        exit;
    }

    // Bind parameters
    $stmt->bind_param(
        "ssssssissssssssssssssi",
        $data['name'],
        $data['father_name'],
        $data['roll_number'],
        $data['cnic'],
        $data['dob'],
        $data['course_name'],
        $data['course_duration'],
        $data['joining_date'],
        $data['whatsapp'],
        $data['guardian_contact'],
        $data['gender'],
        $data['religion'],
        $data['postal_address'],
        $data['school_name'],
        $data['school_class'],
        $data['school_year'],
        $data['school_grade'],
        $data['college_name'],
        $data['college_class'],
        $data['college_year'],
        $data['college_grade'],
        $data['id']
    );

    // Execute the statement
    if ($stmt->execute()) {
        if ($stmt->affected_rows > 0) {
            echo json_encode([
                "success" => true,
                "message" => "Student record updated successfully"
            ]);
        } else {
            echo json_encode([
                "success" => false,
                "message" => "No changes made or student not found"
            ]);
        }
    } else {
        echo json_encode([
            "success" => false,
            "message" => "Error updating record: " . $stmt->error
        ]);
    }

    // Close statement
    $stmt->close();
}

// Close connection
$conn->close();
