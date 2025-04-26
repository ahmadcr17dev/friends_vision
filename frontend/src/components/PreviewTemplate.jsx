import React, { useRef} from "react";
import html2pdf from "html2pdf.js";
import file from "../images/file.png";

const PreviewTemplate = ({ formData, onDownloadComplete }) => {
  const componentRef = useRef();

  const handleDownloadPDF = async () => {
    const element = componentRef.current;
    if (!element) return;

    const opt = {
      margin: 0,
      filename: `AdmissionForm-${formData.form_no || "preview"}.pdf`,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: {
        scale: 2,
        useCORS: true,
      },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };

    html2pdf().set(opt).from(element).save();
    setTimeout(() => {
      onDownloadComplete();
    }, 5000);
  };

  return (
    <>
      {/* Printable Section */}
      <div
        ref={componentRef}
        className="w-[210mm] h-[297mm] overflow-hidden py-[40px] box-border bg-white mx-auto border"
      >
        <h1 className="text-2xl font-semibold text-center mb-6">
          ADMISSION FORM
        </h1>
        <div className="space-y-3 text-[14px]">
          <div className="px-8">
            <p>
              <span className="font-medium">Form No:</span> {formData.form_no}
            </p>
            <p>
              <span className="font-medium">Date:</span> {formData.date}
            </p>
            <p>
              <span className="font-medium">Course Name:</span>{" "}
              {formData.course_name}
            </p>
          </div>
          <div className="relative mt-[0.5rem]">
            {" "}
            <div className="flex flex-row justify-between mt-[-1.5rem] relative z-10 px-8">
              <div>
                <img
                  src={file}
                  alt="logo"
                  className="rounded-full w-[100px] h-[100px] invisible"
                />
              </div>
              <div>
                <img
                  src={file}
                  alt="logo"
                  className="rounded-full w-[130px] h-[130px] mt-[0.6rem]"
                />
              </div>
              <div className="text-center border px-6 py-10 bg-white">
                {" "}
                <p>
                  Affix Passport <br /> size photo of <br /> student
                </p>
              </div>
            </div>
            {/* <hr className="absolute top-1/2 w-full border-t-[3rem] border-gray-900 z-0 mt-[-1.1rem]" />{" "} */}
          </div>
          <div className="px-8 mt-[-1.99rem]">
            <p className="font-semibold  text-[1.1rem]">Note:</p>
            <ul>
              <li>1. One Photocopy of Father's/Student's CNIC/B-Form</li>
              <li>
                2. One Photocopy of Student must be attached with the form
              </li>
              <li>3. Two Passport Size Photographs of Student</li>
            </ul>
          </div>
          <div className="flex flex-col md:flex-row md:items-baseline px-8 mt-[1.3rem]">
            <p className="font-medium md:w-5/12">
              Name of student (In capital letters) :
            </p>
            <p className=" md:w-7/12">{formData.student_name.toUpperCase()}</p>
          </div>
          <div className="flex flex-col md:flex-row md:items-baseline px-8">
            <span className="font-medium md:w-5/12">
              Father's Name (In capital letters) :
            </span>
            <span className=" md:w-7/12">
              {formData.father_name.toUpperCase()}
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-baseline px-8">
            <span className="font-medium md:w-5/12">
              ID Card / B Form No. :
            </span>
            <span className=" md:w-7/12">{formData.cnic}</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-baseline px-8">
            <span className="font-medium w-5/12">Date of Birth :</span>
            <span className=" w-7/12">{formData.dob}</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 px-8">
            <div className="flex items-baseline">
              <span className="font-medium w-10/12">
                Student Whatsapp No. :
              </span>
              <span className=" w-2/12">{formData.whatsapp}</span>
            </div>
            <div className="flex items-baseline ml-[5rem]">
              <span className="font-medium w-7/12">Guardian No. :</span>
              <span className=" w-7/12">{formData.contact}</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 px-8">
            <div className="flex items-baseline">
              <span className="font-medium w-10/12">Gender :</span>
              <span className=" w-2/12">{formData.gender}</span>
            </div>
            <div className="flex items-baseline ml-[5rem]">
              <span className="font-medium w-7/12">Religion :</span>
              <span className=" w-7/12">{formData.religion}</span>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:items-baseline px-8">
            <span className="font-medium w-5/12">Postal Address :</span>
            <span className=" w-7/12">{formData.postal_address}</span>
          </div>
          <div className="mt-8 px-8">
            <h2 className="font-semibold mb-2">Previous Academic Record</h2>
            <div className="flex flex-row justify-between">
              <div className="flex flex-col text-center">
                <p className="font-medium">Previous School & Location</p>
                <p>{formData.school1 || "NULL"}</p>
                <p>{formData.school2 || "NULL"}</p>
              </div>
              <div className="flex flex-col text-center">
                <p className="font-medium">Class</p>
                <p>{formData.class1 || "NULL"}</p>
                <p>{formData.class2 || "NULL"}</p>
              </div>
              <div className="flex flex-col text-center">
                <p className="font-medium">Year of Study</p>
                <p>{formData.year1 || "NULL"}</p>
                <p>{formData.year2 || "NULL"}</p>
              </div>
              <div className="flex flex-col text-center">
                <p className="font-medium">Grade / Percentage</p>
                <p>{formData.grade1 || "NULL"}</p>
                <p>{formData.grade2 || "NULL"}</p>
              </div>
            </div>
          </div>

          <div className="mt-[5px] px-8">
            <p>
              Kindly mention, in brief, if there in history of previous illness,
              allergy or physical /psycological illness.
            </p>
            <hr className="mt-6" />
          </div>
          <div className="px-8">
            <p className="text-center font-semibold mb-4">
              Rules And Regulations
            </p>
            <ul>
              <li>1. Admission form must be completed in all respects</li>
              <li>
                2. Student must behave courteously and devote themselves towards
                their studies
              </li>
              <li>
                3. Regularity, Punctuality and Discipline are very essential
                factors for studying
              </li>
              <li>4. Dues once paid, will not be refunded</li>
              <li>
                5. Parents while visiting the acedemy should only contact the
                admin office. Direct approach to the teachers in the classroom
                is prohibited
              </li>
              <li>
                6. Academy management will not be responsible for student's
                activities outside the academy
              </li>
            </ul>
          </div>
          <div className="px-8 flex flex-row justify-between mt-[3rem]">
            <div>
              <hr />
              <p className="font-medium">Signature Of Candidate</p>
            </div>
            <div>
              <p className="font-semibold">100/- Rs Fee Charges</p>
            </div>
            <div>
              <hr />
              <p className="font-medium">Principal Stamp/Signature</p>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-center gap-4 my-6 print:hidden">
        <button
          type="button"
          onClick={handleDownloadPDF}
          className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 hover:cursor-pointer"
        >
          📥 Download PDF
        </button>
      </div>
    </>
  );
};

export default PreviewTemplate;
