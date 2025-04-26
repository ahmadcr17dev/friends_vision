import React, { useState } from "react";

const AddRecord = () => {
  const [formData, setFormData] = useState({
    name: "",
    father_name: "",
    joining_date: "",
    course_name: "",
    course_duration: "3",
    cnic: "",
    whatsapp: "",
    guardian_contact: "",
    postal_address: "",
    dob: "",
    gender: "male",
    roll_number: "",
    religion: "",
    school_name: "",
    school_class: "",
    school_year: "",
    school_grade: "",
    college_name: "",
    college_class: "",
    college_year: "",
    college_grade: "",
  });
  const today = new Date().toISOString().split("T")[0];
  const selectedDate = new Date(formData.admission_date);
  const currentDate = new Date();

  // Strip time from both dates
  selectedDate.setHours(0, 0, 0, 0);
  currentDate.setHours(0, 0, 0, 0);

  const validateCNIC = (cnic) => {
    const regex = /^\d{5}-\d{7}-\d{1}$/;
    return regex.test(cnic);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate admission date
    if (selectedDate > currentDate) {
      alert("Admission date cannot be in the future.");
      return;
    }

    // Validate CNIC format
    if (!validateCNIC(formData.cnic)) {
      alert("CNIC must be in the format xxxxx-xxxxxxx-x");
      return;
    }

    try {
      const res = await fetch(
        import.meta.env.VITE_ADD_RECORD_API,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const result = await res.json();
      alert(result.message || "Record added successfully!");

      // Reset all form fields
      setFormData({
        name: "",
        father_name: "",
        joining_date: "",
        course_name: "",
        course_duration: "3", // Reset to default value
        cnic: "",
        whatsapp: "",
        guardian_contact: "",
        postal_address: "",
        dob: "",
        gender: "male", // Reset to default value
        roll_number: "",
        religion: "",
        school_name: "",
        school_class: "",
        school_year: "",
        school_grade: "",
        college_name: "",
        college_class: "",
        college_year: "",
        college_grade: "",
      });
    } catch (err) {
      console.error(err);
      alert("Failed to submit form.");
    }
  };

  return (
    <form
      className="max-w-screen-xl mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-4"
      onSubmit={handleSubmit}
    >
      <h2 className="col-span-full text-2xl font-bold">Add Student Record</h2>

      <div className="space-y-1">
        <label className="block font-medium">Student Name</label>
        <input
          className="border p-2 rounded w-full"
          type="text"
          name="name"
          value={formData.name}
          placeholder="Enter student name"
          onChange={handleChange}
          required
        />
      </div>

      <div className="space-y-1">
        <label className="block font-medium">Father Name</label>
        <input
          className="border p-2 rounded w-full"
          type="text"
          name="father_name"
          value={formData.father_name}
          placeholder="Enter father's name"
          onChange={handleChange}
          required
        />
      </div>

      <div className="space-y-1">
        <label className="block font-medium">Date of Joining</label>
        <input
          className="border p-2 rounded w-full"
          type="date"
          name="joining_date"
          value={formData.joining_date}
          onChange={handleChange}
          required
          max={today}
        />
      </div>

      <div className="space-y-1">
        <label className="block font-medium">Course Name</label>
        <input
          className="border p-2 rounded w-full"
          type="text"
          name="course_name"
          value={formData.course_name}
          placeholder="Enter course name"
          onChange={handleChange}
          required
        />
      </div>

      <div className="space-y-1">
        <label className="block font-medium">Course Duration(In Months)</label>
        <input
          className="border p-2 rounded w-full"
          type="text"
          name="course_duration"
          value={formData.course_duration}
          placeholder="Enter course duration"
          onChange={handleChange}
          required
        />
      </div>

      <div className="space-y-1">
        <label className="block font-medium">CNIC / B-Form</label>
        <input
          className="border p-2 rounded w-full"
          type="text"
          name="cnic"
          value={formData.cnic}
          placeholder="Enter CNIC number"
          onChange={handleChange}
          required
          maxLength="15"
        />
        {formData.cnic && !validateCNIC(formData.cnic) && (
          <small style={{ color: "red" }}>Invalid CNIC/B-Form format</small>
        )}
      </div>

      <div className="space-y-1">
        <label className="block font-medium">WhatsApp Number</label>
        <input
          className="border p-2 rounded w-full"
          type="text"
          name="whatsapp"
          value={formData.whatsapp}
          placeholder="Enter WhatsApp number"
          onChange={handleChange}
          required
        />
      </div>

      <div className="space-y-1">
        <label className="block font-medium">Guardian Contact</label>
        <input
          className="border p-2 rounded w-full"
          type="text"
          name="guardian_contact"
          value={formData.guardian_contact}
          placeholder="Enter guardian contact number"
          onChange={handleChange}
          required
        />
      </div>

      <div className="space-y-1">
        <label className="block font-medium">Postal Address</label>
        <input
          className="border p-2 rounded w-full"
          type="text"
          name="postal_address"
          value={formData.postal_address}
          placeholder="Enter postal address"
          onChange={handleChange}
          required
        />
      </div>

      <div className="space-y-1">
        <label className="block font-medium">Date of Birth</label>
        <input
          className="border p-2 rounded w-full"
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          required
          max="2015-01-01"
        />
      </div>

      <div className="space-y-1">
        <label className="block font-medium">Gender</label>
        <div className="flex items-center space-x-4">
          <label className="flex items-center">
            <input
              type="radio"
              name="gender"
              value="male"
              checked={formData.gender === "male"}
              onChange={handleChange}
              className="mr-2"
            />
            Male
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="gender"
              value="female"
              checked={formData.gender === "female"}
              onChange={handleChange}
              className="mr-2"
            />
            Female
          </label>
        </div>
      </div>

      <div className="space-y-1">
        <label className="block font-medium">Roll Number</label>
        <input
          className="border p-2 rounded w-full"
          type="text"
          name="roll_number"
          value={formData.roll_number}
          placeholder="Enter roll number"
          onChange={handleChange}
          required
        />
      </div>

      <div className="space-y-1">
        <label className="block font-medium">Religion</label>
        <input
          className="border p-2 rounded w-full"
          type="text"
          name="religion"
          value={formData.religion}
          placeholder="Enter religion"
          onChange={handleChange}
          required
        />
      </div>

      <hr className="col-span-full border-t my-4" />

      <h3 className="col-span-full text-lg font-semibold">
        School Academic Record
      </h3>

      <div className="space-y-1">
        <label className="block font-medium">School Name & Location</label>
        <input
          className="border p-2 rounded w-full"
          type="text"
          name="school_name"
          value={formData.school_name}
          placeholder="Enter school name"
          onChange={handleChange}
        />
      </div>

      <div className="space-y-1">
        <label className="block font-medium">Class</label>
        <input
          className="border p-2 rounded w-full"
          type="text"
          name="school_class"
          value={formData.school_class}
          placeholder="Enter class"
          onChange={handleChange}
        />
      </div>

      <div className="space-y-1">
        <label className="block font-medium">Year</label>
        <input
          className="border p-2 rounded w-full"
          type="text"
          name="school_year"
          value={formData.school_year}
          placeholder="Enter year"
          onChange={handleChange}
        />
      </div>

      <div className="space-y-1">
        <label className="block font-medium">Grade</label>
        <input
          className="border p-2 rounded w-full"
          type="text"
          name="school_grade"
          value={formData.school_grade}
          placeholder="Enter grade"
          onChange={handleChange}
        />
      </div>

      <h3 className="col-span-full text-lg font-semibold">
        College Academic Record
      </h3>

      <div className="space-y-1">
        <label className="block font-medium">College Name & Location</label>
        <input
          className="border p-2 rounded w-full"
          type="text"
          name="college_name"
          value={formData.college_name}
          placeholder="Enter college name"
          onChange={handleChange}
        />
      </div>

      <div className="space-y-1">
        <label className="block font-medium">Class</label>
        <input
          className="border p-2 rounded w-full"
          type="text"
          name="college_class"
          value={formData.college_class}
          placeholder="Enter class"
          onChange={handleChange}
        />
      </div>

      <div className="space-y-1">
        <label className="block font-medium">Year</label>
        <input
          className="border p-2 rounded w-full"
          type="text"
          name="college_year"
          value={formData.college_year}
          placeholder="Enter year"
          onChange={handleChange}
        />
      </div>

      <div className="space-y-1">
        <label className="block font-medium">Grade</label>
        <input
          className="border p-2 rounded w-full"
          type="text"
          name="college_grade"
          value={formData.college_grade}
          placeholder="Enter grade"
          onChange={handleChange}
        />
      </div>

      <button
        className="col-span-full bg-violet-600 hover:bg-violet-700 text-white font-semibold py-2 rounded mt-4 hover:cursor-pointer"
        type="submit"
      >
        Submit Record
      </button>
    </form>
  );
};

export default AddRecord;
