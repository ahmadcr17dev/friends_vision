import React from "react";
import "typeface-poppins";
import office from "../images/office.png";
import graphic from "../images/graphic.jpg";
import video from "../images/video.webp";
import autocad from "../images/autocad.jpg";
import development from "../images/development.jpg";
import english from "../images/english.jpeg";
import designing from "../images/designing.jpg";
import cctv from "../images/cctv.jpg";
import digital from "../images/digital.png";
import electrical from "../images/electrical.webp";
import ielts from "../images/ielts.webp";
import freelance from "../images/freelance.png";

const cards_courses = [
  {
    id: 1,
    name: "Office Automation",
    image: office,
    duration: "3 months",
    fee: 3000,
    description:
      "Our 3-Month Microsoft Office Course is designed to equip students with essential skills for professional document creation, data management, and presentations. You'll gain expertise in Microsoft Word, mastering document formatting, templates, and advanced editing tools. In Excel, you'll learn data analysis, formulas, pivot tables, and charts to streamline workflows. The course also covers PowerPoint, where you'll create impactful presentations with animations, transitions, and design techniques. Additionally, we introduce Outlook for efficient email management and scheduling. Through hands-on training and real-world projects, you'll develop practical expertise, culminating in a recognized certification to enhance your career prospects.",
  },
  {
    id: 2,
    name: "Graphic Designing",
    image: graphic,
    duration: "3 months",
    fee: 3000,
    description:
      "Our 3-Month Graphic Designing Course is designed to unleash creativity and equip students with industry-standard design skills. You'll master Adobe Photoshop, learning image editing, retouching, and digital art creation. In Adobe Illustrator, you'll develop expertise in vector graphics, logo design, and typography. The course also covers Adobe InDesign, where you'll design professional layouts for brochures, magazines, and marketing materials. Additionally, we introduce Canva for quick and effective social media graphics. Through hands-on projects and real-world assignments, you'll build a strong portfolio and earn a recognized certification to kickstart your career in graphic design.",
  },
  {
    id: 3,
    name: "Video Editing",
    image: video,
    duration: "3 months",
    fee: 3000,
    description:
      "Our 3-Month Video Editing Course is designed to equip students with professional video production skills. You'll master Adobe Premiere Pro, learning cutting, trimming, transitions, and color grading for high-quality video editing. The course also covers Adobe After Effects, where you'll create stunning motion graphics and visual effects. Additionally, you'll explore DaVinci Resolve for advanced color correction and professional post-production techniques. We also introduce mobile editing apps like CapCut and Kinemaster for quick edits on the go. Through hands-on projects and real-world assignments, you'll build a strong portfolio and earn a recognized certification to launch your career in video editing.",
  },
  {
    id: 4,
    name: "AutoCad 2D & 3D",
    image: autocad,
    duration: "3 months",
    fee: 3000,
    description:
      "Our 3-Month AutoCAD 2D & 3D Course is designed to teach students industry-standard drafting and modeling techniques. In AutoCAD 2D, you'll learn to create precise technical drawings, floor plans, and layouts using layers, dimensions, and annotations. The AutoCAD 3D module will introduce you to solid modeling, rendering, and visualization techniques for realistic designs. You'll gain expertise in working with architectural, mechanical, and civil engineering drawings, ensuring accuracy and professionalism. The course also covers printing and file management for seamless collaboration. Through practical assignments and real-world projects, you’ll develop a strong portfolio and receive a recognized certification to advance your career in design and drafting.",
  },
  {
    id: 5,
    name: "Web Development",
    image: development,
    duration: "3 months",
    fee: 3000,
    description:
      "Our 3-Month Web Development Course with WordPress & Custom Coding is designed to provide a complete understanding of website creation using both no-code and custom development approaches. You'll learn WordPress development, including theme customization, plugin integration, and SEO optimization to build professional websites without coding. Alongside, you'll master HTML, CSS, JavaScript, and PHP, enabling you to create custom functionalities and fully responsive designs. The course also covers Elementor, WooCommerce, and database management for building e-commerce and dynamic websites. With hands-on projects and a recognized certification, you'll be ready to develop websites for businesses, blogs, and online stores.",
  },
  {
    id: 6,
    name: "Spoken English",
    image: english,
    duration: "3 months",
    fee: 3000,
    description:
      "Our 3-Month Spoken English Course is designed to enhance your communication skills, fluency, and confidence in English. The course covers grammar, vocabulary building, and pronunciation to help you speak correctly and naturally. You'll engage in interactive speaking activities, role-plays, and real-life conversations to improve fluency. Special focus is given to public speaking, interview skills, and business communication to prepare you for professional and social interactions. Additionally, listening and comprehension exercises will help you understand native speakers easily. With practical sessions and personalized feedback, this course ensures you become a confident English speaker.",
  },
  {
    id: 7,
    name: "Web Designing",
    image: designing,
    duration: "3 months",
    fee: 3000,
    description:
      "Our 3-Month Web Designing Course equips you with the skills to create visually appealing and user-friendly websites. You will learn HTML, CSS, and JavaScript to build responsive and interactive web pages. The course covers UI/UX design principles, color theory, typography, and layout techniques to enhance user experience. You’ll also work with Bootstrap and Tailwind CSS for faster and modern web development. Additionally, you will gain hands-on experience with design tools like Figma and Adobe XD for prototyping and wireframing. By the end of the course, you'll have a portfolio of creative web designs and the confidence to work as a professional web designer.",
  },
  {
    id: 8,
    name: "CCTV Camera",
    image: cctv,
    duration: "3 months",
    fee: 3000,
    description:
      "Our 3-Month CCTV Installation & Security Systems Course provides comprehensive training on modern surveillance technologies. You will learn about CCTV camera types, wiring, and installation techniques for both residential and commercial setups. The course covers DVR/NVR configuration, IP camera setup, and remote monitoring to ensure effective surveillance management. You’ll also gain knowledge of networking essentials, troubleshooting, and maintenance for uninterrupted security operations. Additionally, we focus on video storage, data security, and legal considerations for handling surveillance footage. By the end of the course, you’ll be equipped with practical skills and certification to work as a professional CCTV technician.",
  },
  {
    id: 9,
    name: "Digital Marketing",
    image: digital,
    duration: "3 months",
    fee: 3000,
    description:
      "Our 3-Month Digital Marketing Course is designed to equip students with the latest strategies and tools for online brand growth. You will learn SEO (Search Engine Optimization) to improve website rankings, along with social media marketing (SMM) to effectively promote businesses on platforms like Facebook, Instagram, and LinkedIn. The course also covers Google Ads & PPC (Pay-Per-Click Advertising) for running successful paid campaigns. Additionally, you’ll master content marketing, email marketing, and affiliate marketing to drive engagement and conversions. With hands-on projects and certification, you’ll be ready to launch and manage digital marketing campaigns professionally.",
  },
  {
    id: 10,
    name: "IELTS",
    image: ielts,
    duration: "3 months",
    fee: 3000,
    description:
      "Our 3-Month IELTS Preparation Course is designed to help students achieve their desired band score with a structured approach. The course covers all four IELTS modules: Listening, Reading, Writing, and Speaking, with expert guidance on strategies to excel in each section. You will learn advanced vocabulary, grammar, and sentence structures to enhance your writing and speaking skills. Through mock tests and real exam simulations, you'll build confidence and time management skills for the actual test. Additionally, we provide personalized feedback and one-on-one speaking practice to help you overcome common mistakes. By the end of the course, you'll be fully prepared to take the IELTS exam and achieve your goals.",
  },
  {
    id: 11,
    name: "Basic Electrician",
    image: electrical,
    duration: "3 months",
    fee: 3000,
    description:
      "Our 3-Month Basic Electrician Course is designed to provide hands-on training and fundamental knowledge of electrical systems. You will learn electrical wiring and installation techniques for residential and commercial setups. The course covers circuit design, troubleshooting, and safety protocols to ensure efficient and hazard-free work. You'll also gain expertise in handling electrical tools and equipment, understanding their proper usage. Practical sessions will focus on fault detection, repair, and maintenance of electrical appliances. By the end of the course, you’ll be equipped with the skills required for entry-level electrician jobs and small-scale electrical projects.",
  },
  {
    id: 12,
    name: "Freelancing",
    image: freelance,
    duration: "3 months",
    fee: 3000,
    description:
      "Our 3-Month Freelancing Course is designed to equip you with the essential skills to succeed in the world of freelancing. You will learn how to identify profitable niches, build a strong personal brand, and create an effective online portfolio. The course covers the freelancer-client relationship, including how to pitch, negotiate, and handle contracts. You will also be trained in time management, project management tools, and strategies to stay productive while working independently. Additionally, we provide guidance on marketing your services through social media, freelancing platforms, and networking to attract clients. By the end of the course, you’ll be prepared to launch your freelancing career and manage projects confidently.",
  },
];

const Courses = () => {

  return (
    <>
      <section className="font-poppins mt-[5rem] mb-[3rem] px-[1rem]">
        <h1 className="text-center text-[1.7rem] xl:text-[2.5rem] lg:text-[2rem] md:text-[1.8rem] font-bold my-[5rem]">
          <span className="text-violet-600">Popular</span> Courses
        </h1>
        {cards_courses.map((cards) => (
          <div
            key={cards.id}
            id={`cards-${cards.id}`}
            className="mt-[3rem] mb-[1rem] px-[0.3rem] xl:px-[1.5rem] lg:px-[1.5rem] md:px-[1.5rem]"
          >
            <h1 className="text-[1.3rem] xl:text-[1.9rem] lg:text-[1.5rem] md:text-[1.5rem] font-semibold text-stone-800 mb-1">
              {cards.name}
            </h1>
            <div className="flex flex-col xl:flex-row lg:flex-row md:flex-col">
              <img
                src={cards.image}
                alt="course"
                className="xl:w-[30rem] lg:w-[30rem] md:w-full h-auto"
              />
              <div className="xl:ml-[1rem] lg:ml-[1rem] md:ml-[0rem] xl:pt-4 lg:pt-4 md:pt-[4px]">
                <p className="">
                  {" "}
                  <span className="font-semibold text-stone-900">
                    Duration:
                  </span>{" "}
                  {cards.duration}
                </p>
                <p className="text-red-600">
                  {" "}
                  <span className="font-semibold text-stone-900">
                    Rs:{" "}
                  </span>{" "}
                  {cards.fee}
                </p>
                <p className="xl:text-[1rem] lg:text-[0.9rem]">
                  {" "}
                  <span className="font-semibold text-stone-900">
                    Description:
                  </span>{" "}
                  {cards.description}
                </p>
                <button className="inline-flex items-center px-8 py-2 mt-2 text-sm font-medium text-center text-white bg-violet-700 rounded-[5px] hover:bg-violet-800 focus:ring-4 focus:outline-none focus:ring-blue-300 hover:cursor-pointer">
                  Enroll Now
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Courses;
