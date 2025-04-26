import React, { useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import Toast from "./Toast";
import PreviewTemplate from "./PreviewTemplate";

const AdmissionForm = () => {
  const newFormNo = `FRM-${uuidv4().slice(0, 5)}`;
  const [formData, setFormData] = useState({
    form_no: newFormNo,
    date: "",
    course_name: "",
    student_name: "",
    father_name: "",
    cnic: "",
    dob: "",
    gender: "",
    religion: "",
    whatsapp: "",
    contact: "",
    postal_address: "",
    school1: "",
    class1: "",
    year1: "",
    grade1: "",
    school2: "",
    class2: "",
    year2: "",
    grade2: "",
  });
  const [toastMessage, setToastMessage] = useState("");
  const today = new Date().toISOString().split("T")[0];
  const selectedDate = new Date(formData.admission_date);
  const currentDate = new Date();
  const [showPreview, setShowPreview] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Strip time from both dates
  selectedDate.setHours(0, 0, 0, 0);
  currentDate.setHours(0, 0, 0, 0);

  const validateCNIC = (cnic) => {
    const regex = /^\d{5}-\d{7}-\d{1}$/;
    return regex.test(cnic);
  };

  const validatewhatsapp = (contact) => {
    const regex = /^\+92\d{10}$/;
    return regex.test(contact);
  };

  const validateContact = (contact) => {
    const regex = /^\+92\d{10}$/;
    return regex.test(contact);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (selectedDate > currentDate) {
      alert("Admission date cannot be in the future.");
      return;
    }

    if (!validateCNIC(formData.cnic)) {
      alert("CNIC must be in the format xxxxx-xxxxxxx-x");
      return;
    }

    if (!validateContact(formData.contact)) {
      alert(
        "Contact must start with +92 and be 13 characters long (e.g., +923001234567)"
      );
      return;
    }

    if (!validateContact(formData.whatsapp)) {
      alert(
        "Whatsapp Number must start with +92 and be 13 characters long (e.g., +923001234567)"
      );
      return;
    }

    try {
      const res = await fetch(import.meta.env.VITE_ADMISSION_FORM_API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ form_no: formData.form_no, ...formData }),
      });

      const result = await res.json();
      if (result.success) {
        setToastMessage("Form submitted successfully!");
        setFormSubmitted(true);
        setTimeout(() => {
          setShowPreview(true);
        }, 5000);
      } else {
        setToastMessage("Error: " + result.message);
      }
    } catch (error) {
      console.error("Submission Error:", error);
      setToastMessage("Network error!");
    }
  };

  return (
    <>
      {!showPreview ? (
        <div className="mx-10 p-8 border border-gray-300 shadow-md bg-white my-10">
          <form onSubmit={handleSubmit}>
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold text-center w-full">
                Admission Form
              </h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium">Form No.</label>
                <input
                  type="text"
                  className="mt-1 block w-full border rounded-md p-2"
                  value={formData.form_no}
                  disabled
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Date</label>
                <input
                  type="date"
                  className="mt-1 block w-full border rounded-md p-2"
                  value={formData.date}
                  onChange={handleChange}
                  name="date"
                  required
                  max={today}
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Course Name</label>
                <input
                  type="text"
                  className="mt-1 block w-full border rounded-md p-2"
                  value={formData.course_name}
                  onChange={handleChange}
                  name="course_name"
                  required
                />
              </div>
            </div>

            {/* Student Info */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium">
                  Name of Student
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full border rounded-md p-2"
                  value={formData.student_name}
                  onChange={handleChange}
                  name="student_name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium">Father Name</label>
                <input
                  type="text"
                  className="mt-1 block w-full border rounded-md p-2"
                  value={formData.father_name}
                  onChange={handleChange}
                  name="father_name"
                  required
                />
              </div>

              <div className="flex flex-col md:flex-row md:items-end gap-6">
                {/* CNIC / B-Form No. */}
                <div className="w-full md:w-1/2">
                  <label className="block text-sm font-medium">
                    CNIC / B-Form No.
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full border rounded-md p-2"
                    value={formData.cnic}
                    onChange={handleChange}
                    name="cnic"
                    maxLength="15"
                    placeholder="xxxxx-xxxxxxx-x"
                    required
                  />
                  {formData.cnic && !validateCNIC(formData.cnic) && (
                    <small style={{ color: "red" }}>Invalid CNIC format</small>
                  )}
                </div>

                {/* Date of Birth */}
                <div className="w-full md:w-1/4">
                  <label className="block text-sm font-medium">
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    className="mt-1 block w-full border rounded-md p-2"
                    value={formData.dob}
                    onChange={handleChange}
                    name="dob"
                    required
                    max="2015-01-01"
                  />
                </div>

                {/* Gender */}
                <div className="w-full md:w-1/4">
                  <label className="block text-sm font-medium">Gender</label>
                  <div className="mt-1 flex gap-4">
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="gender"
                        value="Male"
                        onChange={handleChange}
                        required
                      />
                      Male
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="gender"
                        value="Female"
                        onChange={handleChange}
                        required
                      />
                      Female
                    </label>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6">
                {/* WhatsApp Number */}
                <div className="w-full md:w-1/2">
                  <label className="block text-sm font-medium">
                    WhatsApp Number
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full border rounded-md p-2"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    name="whatsapp"
                    required
                    maxLength="13"
                    placeholder="+92-xxx-xxxxxxxx"
                  />
                  {formData.whatsapp &&
                    !validatewhatsapp(formData.whatsapp) && (
                      <small style={{ color: "red" }}>
                        Invalid Pakistani number format
                      </small>
                    )}
                </div>

                {/* Contact Number */}
                <div className="w-full md:w-1/2">
                  <label className="block text-sm font-medium">
                    Contact Number
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full border rounded-md p-2"
                    value={formData.contact}
                    onChange={handleChange}
                    name="contact"
                    required
                    maxLength="13"
                    placeholder="+92-xxx-xxxxxxxx"
                  />
                  {formData.contact && !validateContact(formData.contact) && (
                    <small style={{ color: "red" }}>
                      Invalid Pakistani number format
                    </small>
                  )}
                </div>

                <div className="w-full md:w-1/2">
                  <label className="block text-sm font-medium">Religion</label>
                  <input
                    type="text"
                    className="mt-1 block w-full border rounded-md p-2"
                    value={formData.religion}
                    onChange={handleChange}
                    name="religion"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium">
                  Postal Address
                </label>
                <textarea
                  className="mt-1 block w-full border rounded-md p-2"
                  rows="3"
                  value={formData.postal_address}
                  onChange={handleChange}
                  name="postal_address"
                  required
                ></textarea>
              </div>
            </div>

            {/* Academic Record Table */}
            <div className="mt-8">
              <h2 className="font-semibold mb-2">Previous Academic Record</h2>
              <table className="table-auto w-full border border-black">
                <thead>
                  <tr className="bg-gray-100 text-left">
                    <th className="border p-2">Previous School & Location</th>
                    <th className="border p-2">Class</th>
                    <th className="border p-2">Year of Study</th>
                    <th className="border p-2">Percentage/Grade</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-1">
                      <input
                        type="text"
                        className="w-full border-none outline-none"
                        value={formData.school1}
                        onChange={handleChange}
                        name="school1"
                        required
                      />
                    </td>
                    <td className="border p-2">
                      <input
                        type="text"
                        className="w-full border-none outline-none"
                        value={formData.class1}
                        onChange={handleChange}
                        name="class1"
                        required
                      />
                    </td>
                    <td className="border p-2">
                      <input
                        type="text"
                        className="w-full border-none outline-none"
                        value={formData.year1}
                        onChange={handleChange}
                        name="year1"
                        required
                      />
                    </td>
                    <td className="border p-2">
                      <input
                        type="text"
                        className="w-full border-none outline-none"
                        value={formData.grade1}
                        onChange={handleChange}
                        name="grade1"
                        required
                      />
                    </td>
                  </tr>

                  <tr>
                    <td className="border p-2">
                      <input
                        type="text"
                        className="w-full border-none outline-none"
                        value={formData.school2}
                        onChange={handleChange}
                        name="school2"
                      />
                    </td>
                    <td className="border p-2">
                      <input
                        type="text"
                        className="w-full border-none outline-none"
                        value={formData.class2}
                        onChange={handleChange}
                        name="class2"
                      />
                    </td>
                    <td className="border p-2">
                      <input
                        type="text"
                        className="w-full border-none outline-none"
                        value={formData.year2}
                        onChange={handleChange}
                        name="year2"
                      />
                    </td>
                    <td className="border p-2">
                      <input
                        type="text"
                        className="w-full border-none outline-none"
                        value={formData.grade2}
                        onChange={handleChange}
                        name="grade2"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="flex flex-row justify-between">
              <div>
                <button
                  type="submit"
                  className="mt-6 bg-violet-600 text-white px-6 py-2 rounded hover:bg-violet-700 hover:cursor-pointer"
                >
                  Submit Form
                </button>
                <Toast
                  message={toastMessage}
                  onClose={() => setToastMessage("")}
                />
              </div>
              <button
                type="button"
                className="mt-6 bg-violet-600 text-white px-6 py-2 rounded hover:bg-violet-700 hover:cursor-pointer"
                onClick={() => setShowPreview(true)}
              >
                Preview & Download
              </button>
            </div>
          </form>
        </div>
      ) : (
        <PreviewTemplate
          formData={formData}
          // onBack={() => setShowPreview(false)}
          onDownloadComplete={() => {
            setShowPreview(false);
            if (formSubmitted) {
              setFormSubmitted(false); // reset flag
              setFormData({
                form_no: `FRM-${uuidv4().slice(0, 5)}`,
                date: "",
                course_name: "",
                student_name: "",
                father_name: "",
                cnic: "",
                dob: "",
                gender: "",
                religion: "",
                whatsapp: "",
                contact: "",
                postal_address: "",
                school1: "",
                class1: "",
                year1: "",
                grade1: "",
                school2: "",
                class2: "",
                year2: "",
                grade2: "",
              });
            }
          }}
        />
      )}
    </>
  );
};

export default AdmissionForm;
