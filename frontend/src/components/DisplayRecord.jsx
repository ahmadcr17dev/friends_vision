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
      <h2 className="text-2xl font-bold mb-6">Student Records</h2>

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
            <Table.HeadCell className="px-6 py-3 min-w-[120px] text-white font-medium bg-gray-700">
              Actions
            </Table.HeadCell>
          </Table.Head>

          <Table.Body className="divide-y divide-gray-200">
            {filteredStudents.map((student) => (
              <Table.Row key={student.id} className="text-black">
                <Table.Cell className="px-6 py-4 whitespace-nowrap font-medium">
                  {student.id}
                </Table.Cell>
                <Table.Cell className="px-6 py-4 whitespace-nowrap">
                  {student.name}
                </Table.Cell>
                <Table.Cell className="px-6 py-4 whitespace-nowrap">
                  {student.father_name}
                </Table.Cell>
                <Table.Cell className="px-6 py-4 whitespace-nowrap">
                  {student.roll_number}
                </Table.Cell>
                <Table.Cell className="px-6 py-4 whitespace-nowrap">
                  {student.course_name}
                </Table.Cell>
                <Table.Cell className="px-6 py-4 whitespace-nowrap">
                  {student.course_duration} months
                </Table.Cell>
                <Table.Cell className="px-6 py-4 whitespace-nowrap">
                  <button
                    className="font-medium text-blue-600 hover:cursor-pointer"
                    onClick={() => viewStudentDetails(student)}
                  >
                    Details
                  </button>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>

      {/* Student Details Modal */}
      <Modal show={showModal} onClose={() => setShowModal(false)} size="xl">
        <Modal.Body className="bg-white">
          {selectedStudent && (
            <div className="space-y-4">
              <div className="mx-auto">
                <div>
                  <h3 className="font-semibold text-center text-[1.3rem]">
                    Personal Information
                  </h3>
                  <div className="flex flex-col md:flex-row md:items-baseline px-8 mt-[1.3rem]">
                    <p className="font-medium md:w-5/12">Name of student:</p>
                    <p className=" md:w-7/12">{selectedStudent.name}</p>
                  </div>
                  <div className="flex flex-col md:flex-row md:items-baseline px-8">
                    <span className="font-medium md:w-5/12">
                      Father's Name:
                    </span>
                    <span className=" md:w-7/12">
                      {selectedStudent.father_name}
                    </span>
                  </div>
                  <div className="flex flex-col md:flex-row md:items-baseline px-8">
                    <span className="font-medium md:w-5/12">
                      ID Card / B Form No. :
                    </span>
                    <span className=" md:w-7/12">{selectedStudent.cnic}</span>
                  </div>
                  <div className="flex flex-col md:flex-row md:items-baseline px-8">
                    <span className="font-medium w-5/12">Date of Birth :</span>
                    <span className=" w-7/12">{selectedStudent.dob}</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 px-8">
                    <div className="flex items-baseline">
                      <span className="font-medium w-10/12">Roll Number :</span>
                      <span className=" w-2/12">
                        {selectedStudent.roll_number}
                      </span>
                    </div>
                    <div className="flex items-baseline ml-[5rem]">
                      <span className="font-medium w-7/12">Duration :</span>
                      <span className=" w-7/12">
                        {selectedStudent.course_duration} Months
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 px-8">
                    <div className="flex items-baseline">
                      <span className="font-medium w-10/12">
                        Date of Starting :
                      </span>
                      <span className=" w-2/12">
                        {selectedStudent.joining_date}
                      </span>
                    </div>
                    <div className="flex items-baseline ml-[5rem]">
                      <span className="font-medium w-7/12">Course Name :</span>
                      <span className=" w-7/12">
                        {selectedStudent.course_name}
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 px-8">
                    <div className="flex items-baseline">
                      <span className="font-medium w-10/12">
                        Student Whatsapp No. :
                      </span>
                      <span className=" w-2/12">
                        {selectedStudent.whatsapp}
                      </span>
                    </div>
                    <div className="flex items-baseline ml-[5rem]">
                      <span className="font-medium w-7/12">Guardian No. :</span>
                      <span className=" w-7/12">
                        {selectedStudent.guardian_contact}
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 px-8">
                    <div className="flex items-baseline">
                      <span className="font-medium w-10/12">Gender :</span>
                      <span className=" w-2/12">{selectedStudent.gender}</span>
                    </div>
                    <div className="flex items-baseline ml-[5rem]">
                      <span className="font-medium w-7/12">Religion :</span>
                      <span className=" w-7/12">
                        {selectedStudent.religion}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row md:items-baseline px-8">
                    <span className="font-medium w-5/12">Postal Address :</span>
                    <span className=" w-7/12">
                      {selectedStudent.postal_address}
                    </span>
                  </div>
                  <div className="mt-8 px-8">
                    <h2 className="font-semibold mb-2">
                      Previous Academic Record
                    </h2>
                    <div className="flex flex-row justify-between">
                      <div className="flex flex-col text-center">
                        <p className="font-medium">
                          Previous School & Location
                        </p>
                        <p>{selectedStudent.school_name || "NULL"}</p>
                        <p>{selectedStudent.college_name || "NULL"}</p>
                      </div>
                      <div className="flex flex-col text-center">
                        <p className="font-medium">Class</p>
                        <p>{selectedStudent.school_class || "NULL"}</p>
                        <p>{selectedStudent.college_class || "NULL"}</p>
                      </div>
                      <div className="flex flex-col text-center">
                        <p className="font-medium">Year of Study</p>
                        <p>{selectedStudent.school_year || "NULL"}</p>
                        <p>{selectedStudent.college_year || "NULL"}</p>
                      </div>
                      <div className="flex flex-col text-center">
                        <p className="font-medium">Grade / Percentage</p>
                        <p>{selectedStudent.school_grade || "NULL"}</p>
                        <p>{selectedStudent.college_grade || "NULL"}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer className="bg-white">
          <button
            className="bg-violet-600 hover:bg-violet-700 text-white font-medium py-2 px-[4rem] rounded hover:cursor-pointer"
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
