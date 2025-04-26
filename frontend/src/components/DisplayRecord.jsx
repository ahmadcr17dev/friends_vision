import React, { useState, useEffect } from "react";
import { Table, Modal } from "flowbite-react";

const DisplayRecord = () => {
  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await fetch(import.meta.env.VITE_DISPLAY_RECORD_API);
        const data = await response.json();

        if (data.success) {
          setStudents(data.students);
          setFilteredStudents(data.students);
        } else {
          setError(data.message || "Failed to fetch student records");
        }
      } catch (err) {
        setError("Failed to connect to server");
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredStudents(students);
    } else {
      const filtered = students.filter((student) =>
        student.roll_number.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredStudents(filtered);
    }
  }, [searchTerm, students]);

  const viewStudentDetails = (student) => {
    setSelectedStudent(student);
    setShowModal(true);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg">
        {error}
      </div>
    );
  }

  return (
    <div className="p-4">
      <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
        Student Records
      </h2>

      <div className="mb-4">
        <label htmlFor="roll-number-search" className="sr-only">
          Search by Roll Number
        </label>
        <input
          type="text"
          id="roll-number-search"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Search by Roll Number"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="relative overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
        <Table className="w-full text-center">
          <Table.Head className="uppercase bg-gray-700 text-white">
            <Table.HeadCell className="px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm whitespace-nowrap bg-gray-700">
              ID
            </Table.HeadCell>
            <Table.HeadCell className="px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm whitespace-nowrap bg-gray-700">
              Student
            </Table.HeadCell>
            <Table.HeadCell className="px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm whitespace-nowrap hidden sm:table-cell bg-gray-700">
              Father
            </Table.HeadCell>
            <Table.HeadCell className="px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm whitespace-nowrap bg-gray-700">
              Roll No
            </Table.HeadCell>
            <Table.HeadCell className="px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm whitespace-nowrap hidden md:table-cell bg-gray-700">
              Course
            </Table.HeadCell>
            <Table.HeadCell className="px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm whitespace-nowrap hidden sm:table-cell bg-gray-700">
              Duration
            </Table.HeadCell>
            <Table.HeadCell className="px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm whitespace-nowrap bg-gray-700">
              Actions
            </Table.HeadCell>
          </Table.Head>

          <Table.Body className="divide-y divide-gray-200">
            {filteredStudents.map((student) => (
              <Table.Row key={student.id} className="hover:bg-gray-50">
                <Table.Cell className="px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm">
                  {student.id}
                </Table.Cell>
                <Table.Cell className="px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm font-medium">
                  {student.name}
                </Table.Cell>
                <Table.Cell className="px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm hidden sm:table-cell">
                  {student.father_name}
                </Table.Cell>
                <Table.Cell className="px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm">
                  {student.roll_number}
                </Table.Cell>
                <Table.Cell className="px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm hidden md:table-cell">
                  {student.course_name}
                </Table.Cell>
                <Table.Cell className="px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm hidden sm:table-cell">
                  {student.course_duration} m
                </Table.Cell>
                <Table.Cell className="px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm">
                  <button
                    className="text-blue-600 hover:text-blue-800 font-medium hover:underline"
                    onClick={() => viewStudentDetails(student)}
                  >
                    View
                  </button>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>

      {/* Responsive Student Details Modal */}
      <Modal show={showModal} onClose={() => setShowModal(false)} size="xl">
        <Modal.Body className="bg-white p-4 sm:p-6">
          {selectedStudent && (
            <div className="space-y-4">
              <div className="mx-auto">
                <div>
                  <h3 className="font-semibold text-center text-lg sm:text-xl">
                    Personal Information
                  </h3>

                  {/* Responsive grid layout */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    {/* Column 1 */}
                    <div className="space-y-3">
                      <div className="flex flex-col sm:flex-row">
                        <span className="font-medium sm:w-5/12">
                          Student Name:
                        </span>
                        <span className="sm:w-7/12">
                          {selectedStudent.name}
                        </span>
                      </div>
                      <div className="flex flex-col sm:flex-row">
                        <span className="font-medium sm:w-5/12">
                          Father's Name:
                        </span>
                        <span className="sm:w-7/12">
                          {selectedStudent.father_name}
                        </span>
                      </div>
                      <div className="flex flex-col sm:flex-row">
                        <span className="font-medium sm:w-5/12">
                          ID Card/B Form:
                        </span>
                        <span className="sm:w-7/12">
                          {selectedStudent.cnic}
                        </span>
                      </div>
                      <div className="flex flex-col sm:flex-row">
                        <span className="font-medium sm:w-5/12">
                          Date of Birth:
                        </span>
                        <span className="sm:w-7/12">{selectedStudent.dob}</span>
                      </div>
                    </div>

                    {/* Column 2 */}
                    <div className="space-y-3">
                      <div className="flex flex-col sm:flex-row">
                        <span className="font-medium sm:w-5/12">
                          Roll Number:
                        </span>
                        <span className="sm:w-7/12">
                          {selectedStudent.roll_number}
                        </span>
                      </div>
                      <div className="flex flex-col sm:flex-row">
                        <span className="font-medium sm:w-5/12">Duration:</span>
                        <span className="sm:w-7/12">
                          {selectedStudent.course_duration} Months
                        </span>
                      </div>
                      <div className="flex flex-col sm:flex-row">
                        <span className="font-medium sm:w-5/12">
                          Start Date:
                        </span>
                        <span className="sm:w-7/12">
                          {selectedStudent.joining_date}
                        </span>
                      </div>
                      <div className="flex flex-col sm:flex-row">
                        <span className="font-medium sm:w-5/12">Course:</span>
                        <span className="sm:w-7/12">
                          {selectedStudent.course_name}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div className="flex flex-col sm:flex-row">
                      <span className="font-medium sm:w-5/12">WhatsApp:</span>
                      <span className="sm:w-7/12">
                        {selectedStudent.whatsapp}
                      </span>
                    </div>
                    <div className="flex flex-col sm:flex-row">
                      <span className="font-medium sm:w-5/12">
                        Guardian No:
                      </span>
                      <span className="sm:w-7/12">
                        {selectedStudent.guardian_contact}
                      </span>
                    </div>
                  </div>

                  {/* Additional Info */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div className="flex flex-col sm:flex-row">
                      <span className="font-medium sm:w-5/12">Gender:</span>
                      <span className="sm:w-7/12">
                        {selectedStudent.gender}
                      </span>
                    </div>
                    <div className="flex flex-col sm:flex-row">
                      <span className="font-medium sm:w-5/12">Religion:</span>
                      <span className="sm:w-7/12">
                        {selectedStudent.religion}
                      </span>
                    </div>
                  </div>

                  <div className="mt-4">
                    <div className="flex flex-col sm:flex-row">
                      <span className="font-medium sm:w-5/12">Address:</span>
                      <span className="sm:w-7/12">
                        {selectedStudent.postal_address}
                      </span>
                    </div>
                  </div>

                  {/* Academic Record */}
                  <div className="mt-6">
                    <h4 className="font-semibold mb-3">
                      Previous Academic Record
                    </h4>
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200 text-center">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-3 py-2 text-xs font-medium text-gray-500">
                              Institution
                            </th>
                            <th className="px-3 py-2 text-xs font-medium text-gray-500">
                              Class
                            </th>
                            <th className="px-3 py-2 text-xs font-medium text-gray-500">
                              Year
                            </th>
                            <th className="px-3 py-2 text-xs font-medium text-gray-500">
                              Grade
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          <tr>
                            <td className="px-3 py-2 text-sm">
                              {selectedStudent.school_name || "N/A"}
                            </td>
                            <td className="px-3 py-2 text-sm">
                              {selectedStudent.school_class || "N/A"}
                            </td>
                            <td className="px-3 py-2 text-sm">
                              {selectedStudent.school_year || "N/A"}
                            </td>
                            <td className="px-3 py-2 text-sm">
                              {selectedStudent.school_grade || "N/A"}
                            </td>
                          </tr>
                          <tr>
                            <td className="px-3 py-2 text-sm">
                              {selectedStudent.college_name || "N/A"}
                            </td>
                            <td className="px-3 py-2 text-sm">
                              {selectedStudent.college_class || "N/A"}
                            </td>
                            <td className="px-3 py-2 text-sm">
                              {selectedStudent.college_year || "N/A"}
                            </td>
                            <td className="px-3 py-2 text-sm">
                              {selectedStudent.college_grade || "N/A"}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer className="bg-gray-50 px-4 py-3 sm:px-6">
          <button
            className="w-full sm:w-auto bg-violet-600 hover:bg-violet-700 text-white font-medium py-2 px-8 rounded-md transition-colors"
            onClick={() => setShowModal(false)}
          >
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default DisplayRecord;
