import React, { useState } from "react";
import { Table, TextInput, Button, Alert } from "flowbite-react";

const Verification = () => {
  const [rollNumber, setRollNumber] = useState("");
  const [studentData, setStudentData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const verifyStudent = async () => {
    if (!rollNumber.trim()) {
      setError("Please enter a roll number");
      return;
    }

    setLoading(true);
    setError(null);
    setStudentData(null); // Clear previous results when making new request

    try {
      const response = await fetch(
        `${import.meta.env.VITE_VERIFICATION_API}?roll_number=${rollNumber}`
      );
      const data = await response.json();

      if (data.success) {
        setStudentData(data.student);
      } else {
        setError("No record found for this roll number");
      }
    } catch (err) {
      console.error("Error fetching student:", err);
      setError("Failed to verify student. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-8 text-center">
        Student Verification
      </h2>

      {/* Centered search container */}
      <div className="flex flex-col items-center justify-center mb-8">
        <div className="flex gap-2 w-full md:w-2/3">
          <TextInput
            type="text"
            placeholder="Enter Roll Number"
            value={rollNumber}
            onChange={(e) => setRollNumber(e.target.value)}
            className="flex-1"
            // onKeyPress={(e) => e.key === "Enter" && verifyStudent()}
          />
          <Button
            onClick={verifyStudent}
            className="w-fit bg-violet-600 px-[3rem] hover:cursor-pointer hover:bg-violet-700"
          >
            {loading ? "Verifying..." : "Verify"}
          </Button>
        </div>
      </div>

      {/* Error message */}
      {error && (
        <div className="flex justify-center mb-4">
          <Alert color="failure" className="w-full md:w-2/3">
            {error}
          </Alert>
        </div>
      )}

      {/* Student data table - appears below search when results are found */}
      {studentData && (
        <div className="relative overflow-x-auto sm:rounded-lg">
          <Table className="w-full min-w-max text-center">
            <Table.Head className="uppercase text-white">
              <Table.HeadCell className="px-6 py-3 min-w-[100px] text-white font-medium bg-gray-700">
                ID
              </Table.HeadCell>
              <Table.HeadCell className="px-6 py-3 min-w-[200px] text-white font-medium bg-gray-700">
                Student Name
              </Table.HeadCell>
              <Table.HeadCell className="px-6 py-3 min-w-[200px] text-white font-medium bg-gray-700">
                Father Name
              </Table.HeadCell>
              <Table.HeadCell className="px-6 py-3 min-w-[150px] text-white font-medium bg-gray-700">
                Roll Number
              </Table.HeadCell>
              <Table.HeadCell className="px-6 py-3 min-w-[200px] text-white font-medium bg-gray-700">
                Course
              </Table.HeadCell>
              <Table.HeadCell className="px-6 py-3 min-w-[150px] text-white font-medium bg-gray-700">
                Duration
              </Table.HeadCell>
              <Table.HeadCell className="px-6 py-3 min-w-[150px] text-white font-medium bg-gray-700">
                Date of Birth
              </Table.HeadCell>
              <Table.HeadCell className="px-6 py-3 min-w-[150px] text-white font-medium bg-gray-700">
                CNIC/B-Form
              </Table.HeadCell>
            </Table.Head>

            <Table.Body className="divide-y divide-gray-200">
              <Table.Row className="text-black">
                <Table.Cell className="px-6 py-4 whitespace-nowrap font-medium">
                  {studentData.id}
                </Table.Cell>
                <Table.Cell className="px-6 py-4 whitespace-nowrap">
                  {studentData.name}
                </Table.Cell>
                <Table.Cell className="px-6 py-4 whitespace-nowrap">
                  {studentData.father_name}
                </Table.Cell>
                <Table.Cell className="px-6 py-4 whitespace-nowrap">
                  {studentData.roll_number}
                </Table.Cell>
                <Table.Cell className="px-6 py-4 whitespace-nowrap">
                  {studentData.course_name}
                </Table.Cell>
                <Table.Cell className="px-6 py-4 whitespace-nowrap">
                  {studentData.course_duration} months
                </Table.Cell>
                <Table.Cell className="px-6 py-4 whitespace-nowrap">
                  {studentData.dob}
                </Table.Cell>
                <Table.Cell className="px-6 py-4 whitespace-nowrap">
                  {studentData.cnic}
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </div>
      )}
    </div>
  );
};

export default Verification;
