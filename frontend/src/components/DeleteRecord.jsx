import React, { useState } from "react";
import { Table, Button, Alert } from "flowbite-react";

const DeleteRecord = () => {
  const [rollNumber, setRollNumber] = useState("");
  const [studentData, setStudentData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const fetchStudent = async () => {
    if (!rollNumber.trim()) {
      setError("Please enter a roll number");
      return;
    }

    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_VERIFICATION_API}?roll_number=${rollNumber}`
      );
      const data = await response.json();

      if (data.success) {
        setStudentData(data.student);
      } else {
        setStudentData(null);
        setError("No record found for this roll number");
      }
    } catch (err) {
      console.error("Error fetching student:", err);
      setError("Failed to fetch student. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const deleteStudent = async () => {
    if (!studentData) return;

    if (
      !window.confirm("Are you sure you want to delete this student record?")
    ) {
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(import.meta.env.VITE_DELETE_RECORD_API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: studentData.id }),
      });
      const data = await response.json();

      if (data.success) {
        setSuccess("Student record deleted successfully!");
        setStudentData(null);
        setRollNumber("");
      } else {
        setError(data.message || "Failed to delete student record");
      }
    } catch (err) {
      console.error("Error deleting student:", err);
      setError("Failed to delete student. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h2 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8 text-center">
        Delete Student Record
      </h2>

      <div className="flex flex-col items-center justify-center mb-6 sm:mb-8">
        <div className="flex flex-col sm:flex-row gap-2 w-full md:w-2/3">
          <input
            type="text"
            placeholder="Enter Roll Number"
            value={rollNumber}
            onChange={(e) => setRollNumber(e.target.value)}
            className="flex-1 text-black bg-white px-4 py-2 border rounded-lg outline-none"
            // onKeyPress={(e) => e.key === "Enter" && fetchStudent()}
          />
          <Button
            onClick={fetchStudent}
            className="w-full sm:w-fit bg-violet-600 hover:cursor-pointer hover:bg-violet-700 px-4 sm:px-12 py-2"
          >
            {loading ? "Searching..." : "Search"}
          </Button>
        </div>
      </div>

      {error && (
        <div className="flex justify-center mb-4">
          <Alert color="failure" className="w-full md:w-2/3">
            {error}
          </Alert>
        </div>
      )}

      {success && (
        <div className="flex justify-center mb-4">
          <Alert color="success" className="w-full md:w-2/3">
            {success}
          </Alert>
        </div>
      )}

      {studentData && (
        <>
          <div className="overflow-x-auto">
            <div className="min-w-[600px] sm:min-w-0">
              <Table className="w-full">
                <Table.Head className="uppercase text-white">
                  <Table.HeadCell className="px-3 py-2 sm:px-6 sm:py-3 text-sm sm:text-base text-white font-medium bg-gray-700">
                    ID
                  </Table.HeadCell>
                  <Table.HeadCell className="px-3 py-2 sm:px-6 sm:py-3 text-sm sm:text-base text-white font-medium bg-gray-700">
                    Student Name
                  </Table.HeadCell>
                  <Table.HeadCell className="px-3 py-2 sm:px-6 sm:py-3 text-sm sm:text-base text-white font-medium bg-gray-700">
                    Father Name
                  </Table.HeadCell>
                  <Table.HeadCell className="px-3 py-2 sm:px-6 sm:py-3 text-sm sm:text-base text-white font-medium bg-gray-700">
                    Roll No.
                  </Table.HeadCell>
                  <Table.HeadCell className="px-3 py-2 sm:px-6 sm:py-3 text-sm sm:text-base text-white font-medium bg-gray-700">
                    Course
                  </Table.HeadCell>
                  <Table.HeadCell className="px-3 py-2 sm:px-6 sm:py-3 text-sm sm:text-base text-white font-medium bg-gray-700">
                    Duration
                  </Table.HeadCell>
                </Table.Head>

                <Table.Body className="divide-y divide-gray-200">
                  <Table.Row className="text-black bg-white">
                    <Table.Cell className="px-3 py-2 sm:px-6 sm:py-4 whitespace-nowrap text-sm sm:text-base">
                      {studentData.id}
                    </Table.Cell>
                    <Table.Cell className="px-3 py-2 sm:px-6 sm:py-4 whitespace-nowrap text-sm sm:text-base">
                      {studentData.name}
                    </Table.Cell>
                    <Table.Cell className="px-3 py-2 sm:px-6 sm:py-4 whitespace-nowrap text-sm sm:text-base">
                      {studentData.father_name}
                    </Table.Cell>
                    <Table.Cell className="px-3 py-2 sm:px-6 sm:py-4 whitespace-nowrap text-sm sm:text-base">
                      {studentData.roll_number}
                    </Table.Cell>
                    <Table.Cell className="px-3 py-2 sm:px-6 sm:py-4 whitespace-nowrap text-sm sm:text-base">
                      {studentData.course_name}
                    </Table.Cell>
                    <Table.Cell className="px-3 py-2 sm:px-6 sm:py-4 whitespace-nowrap text-sm sm:text-base">
                      {studentData.course_duration} months
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </div>
          </div>

          <div className="flex justify-center mt-4">
            <Button
              onClick={deleteStudent}
              disabled={loading}
              color="failure"
              className="w-full sm:w-fit bg-violet-600 hover:bg-violet-700 px-4 sm:px-12 py-2"
            >
              {loading ? "Deleting..." : "Delete Student Record"}
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default DeleteRecord;
