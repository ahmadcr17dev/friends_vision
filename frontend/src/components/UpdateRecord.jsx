import React, { useState, useEffect } from "react";
import {
  Table,
  Modal,
  TextInput,
  Label,
  Select,
  Button,
  Radio,
} from "flowbite-react";

const UpdateRecord = () => {
  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    father_name: "",
    roll_number: "",
    cnic: "",
    dob: "",
    course_name: "",
    course_duration: "",
    joining_date: "",
    whatsapp: "",
    guardian_contact: "",
    gender: "",
    religion: "",
    postal_address: "",
    school_name: "",
    school_class: "",
    school_year: "",
    school_grade: "",
    college_name: "",
    college_class: "",
    college_year: "",
    college_grade: "",
  });

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

  const handleUpdateClick = (student) => {
    setSelectedStudent(student);
    setFormData({
      ...student,
      name: student.name,
      father_name: student.father_name,
      roll_number: student.roll_number,
      cnic: student.cnic,
      dob: student.dob,
      course_name: student.course_name,
      course_duration: student.course_duration,
      joining_date: student.joining_date,
      whatsapp: student.whatsapp,
      guardian_contact: student.guardian_contact,
      gender: student.gender,
      religion: student.religion,
      postal_address: student.postal_address,
      school_name: student.school_name,
      school_class: student.school_class,
      school_year: student.school_year,
      school_grade: student.school_grade,
      college_name: student.college_name,
      college_class: student.college_class,
      college_year: student.college_year,
      college_grade: student.college_grade,
    });
    setShowModal(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(`Setting ${name} to:`, value);
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(import.meta.env.VITE_UPDATE_RECORD_API, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: selectedStudent.id,
          ...formData,
        }),
      });

      const result = await response.json();
      if (result.success) {
        // Refresh the student list
        const updatedResponse = await fetch(
          import.meta.env.VITE_DISPLAY_RECORD_API
        );
        const updatedData = await updatedResponse.json();
        setStudents(updatedData.students);
        setFilteredStudents(updatedData.students);
      }
      setShowModal(false);
    } catch (error) {
      console.error("Error updating student:", error);
    }
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
    <div className="p-2 sm:p-4">
      <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
        Update Student Records
      </h2>

      {/* Search Input */}
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

      {/* Responsive Table */}
      <div className="relative overflow-x-auto rounded-lg border border-gray-200 shadow-sm mb-4">
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
                    onClick={() => handleUpdateClick(student)}
                  >
                    Update
                  </button>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>

      {/* Responsive Update Modal */}
      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        size="7xl"
        className="overflow-y-auto max-h-screen"
        position="center"
      >
        <Modal.Header className="text-lg sm:text-xl text-center">
          Update Student Record
        </Modal.Header>
        <Modal.Body className="overflow-y-auto max-h-[calc(100vh-8rem)] p-4 sm:p-6">
          {selectedStudent && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Personal Information */}
                <div>
                  <Label htmlFor="name">Student Name</Label>
                  <TextInput
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="father_name">Father's Name</Label>
                  <TextInput
                    id="father_name"
                    name="father_name"
                    value={formData.father_name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="roll_number">Roll Number</Label>
                  <TextInput
                    id="roll_number"
                    name="roll_number"
                    value={formData.roll_number}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="cnic">ID Card / B Form No.</Label>
                  <TextInput
                    id="cnic"
                    name="cnic"
                    value={formData.cnic}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <Label htmlFor="dob">Date of Birth</Label>
                  <TextInput
                    id="dob"
                    name="dob"
                    type="date"
                    value={formData.dob}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <Label htmlFor="course_name">Course Name</Label>
                  <TextInput
                    id="course_name"
                    name="course_name"
                    value={formData.course_name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="course_duration">
                    Course Duration (months)
                  </Label>
                  <TextInput
                    id="course_duration"
                    name="course_duration"
                    type="number"
                    value={formData.course_duration}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="joining_date">Date of Starting</Label>
                  <TextInput
                    id="joining_date"
                    name="joining_date"
                    type="date"
                    value={formData.joining_date}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <Label htmlFor="whatsapp">Student WhatsApp No.</Label>
                  <TextInput
                    id="whatsapp"
                    name="whatsapp"
                    type="tel"
                    value={formData.whatsapp}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <Label htmlFor="guardian_contact">Guardian Contact No.</Label>
                  <TextInput
                    id="guardian_contact"
                    name="guardian_contact"
                    type="tel"
                    value={formData.guardian_contact}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <Label htmlFor="gender">Gender</Label>
                  <Select
                    id="gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="religion">Religion</Label>
                  <TextInput
                    id="religion"
                    name="religion"
                    value={formData.religion}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              {/* Address */}
              <div>
                <Label htmlFor="postal_address">Postal Address</Label>
                <textarea
                  id="postal_address"
                  name="postal_address"
                  rows="3"
                  className="block w-full p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                  value={formData.postal_address}
                  onChange={handleInputChange}
                />
              </div>

              {/* Academic Record */}
              <div className="border-t pt-4">
                <h3 className="font-semibold mb-3 text-sm sm:text-base">
                  Previous Academic Record
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="school_name">School Name</Label>
                    <TextInput
                      id="school_name"
                      name="school_name"
                      value={formData.school_name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <Label htmlFor="school_class">School Class</Label>
                    <TextInput
                      id="school_class"
                      name="school_class"
                      value={formData.school_class}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <Label htmlFor="school_year">School Year</Label>
                    <TextInput
                      id="school_year"
                      name="school_year"
                      value={formData.school_year}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <Label htmlFor="school_grade">School Grade</Label>
                    <TextInput
                      id="school_grade"
                      name="school_grade"
                      value={formData.school_grade}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <Label htmlFor="college_name">College Name</Label>
                    <TextInput
                      id="college_name"
                      name="college_name"
                      value={formData.college_name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <Label htmlFor="college_class">College Class</Label>
                    <TextInput
                      id="college_class"
                      name="college_class"
                      value={formData.college_class}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <Label htmlFor="college_year">College Year</Label>
                    <TextInput
                      id="college_year"
                      name="college_year"
                      value={formData.college_year}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <Label htmlFor="college_grade">College Grade</Label>
                    <TextInput
                      id="college_grade"
                      name="college_grade"
                      value={formData.college_grade}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>

              {/* Form Actions */}
              <div className="flex flex-col sm:flex-row justify-center gap-3 mt-6 pt-4">
                <Button
                  color="gray"
                  onClick={() => setShowModal(false)}
                  className="w-full sm:w-auto"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="w-full sm:w-auto bg-violet-600 hover:bg-violet-700"
                >
                  Update Record
                </Button>
              </div>
            </form>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default UpdateRecord;
