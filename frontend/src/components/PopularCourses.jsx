import React, { useState, useEffect, useRef } from "react";
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
import styled from "styled-components";
import { NavLink, useNavigate } from "react-router-dom";

const cards = [
  {
    id: 1,
    title: "Office Automation",
    description:
      "This course covers Microsoft Office Suite (Word, Excel, PowerPoint), data management, email handling, and basic IT skills.",
    image: `${office}`,
    duration: "3 Months",
  },
  {
    id: 2,
    title: "Graphic Designing",
    description:
      " Learn essential tools like Adobe Photoshop, Illustrator, and InDesign, and master concepts like typography, color theory, and layout design.",
    image: `${graphic}`,
    duration: "3 Months",
  },
  {
    id: 3,
    title: "Video Editing",
    description:
      " Learn cutting, transitions, visual effects, audio synchronization, and color grading techniques to produce stunning videos for social media, films, and corporate projects.",
    image: `${video}`,
    duration: "3 Months",
  },
  {
    id: 4,
    title: "AutoCad 2D & 3D",
    description:
      "Master the art of drafting and design with our AutoCAD 2D & 3D Course! Learn to create precise technical drawings, architectural layouts, and 3D models from scratch.",
    image: `${autocad}`,
    duration: "3 Months",
  },
  {
    id: 5,
    title: "Web Development",
    description:
      " Learn to build dynamic and responsive websites using HTML, CSS, JavaScript, and modern frameworks. Master front-end and back-end technologies, database integration, and website deployment.",
    image: `${development}`,
    duration: "3 Months",
  },
  {
    id: 6,
    title: "Spoken English",
    description:
      "The Spoken English Course at our academy is designed to enhance your communication skills, build confidence, and improve fluency in everyday conversations.",
    image: `${english}`,
    duration: "3 Months",
  },
  {
    id: 7,
    title: "Web Designing",
    description:
      "With hands-on projects and expert guidance, you'll master UI/UX principles, layout techniques, and the latest design trends, preparing you for a successful career in web development and design.",
    image: `${designing}`,
    duration: "3 Months",
  },
  {
    id: 8,
    title: "CCTV Camera",
    description:
      " You will learn about various camera types, DVR/NVR setup, network integration, and troubleshooting techniques. Gain hands-on experience to secure residential, commercial, and industrial spaces effectively.",
    image: `${cctv}`,
    duration: "3 Months",
  },
  {
    id: 9,
    title: "Digital Marketing",
    description:
      "Learn how to create impactful marketing strategies, master social media platforms, optimize websites for SEO, and execute data-driven campaigns. ",
    image: `${digital}`,
    duration: "3 Months",
  },
  {
    id: 10,
    title: "Basic Electrician",
    description:
      " Covering essential topics such as wiring techniques, circuit analysis, and troubleshooting, this hands-on course prepares learners for entry-level positions in the electrical industry. ",
    image: `${electrical}`,
    duration: "3 Months",
  },
  {
    id: 11,
    title: "IELTS",
    description:
      "The course covers all four test components: Listening, Reading, Writing, and Speaking. With expert instructors, practice tests, and personalized feedback, students gain the confidence and competence needed to excel in the IELTS exam.",
    image: `${ielts}`,
    duration: "3 Months",
  },
  {
    id: 12,
    title: "Freelancing",
    description:
      "Our Freelancing Course at Friend's Vision Academy is designed to equip you with the skills needed to start and grow a successful online career. Learn how to create a compelling portfolio, find high-paying clients, and master freelancing platforms like Fiverr and Upwork.",
    image: `${freelance}`,
    duration: "3 Months",
  },
];

const Styledsection = styled.section`
  @media (max-width: 500px) and (min-width: 0px) {
    #next_arrow {
      display: none;
    }
    #previous_arrow {
      display: none;
    }
  }
`;

const PopularCourses = () => {
  const getVisibleCards = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 500) return 1;
    if (screenWidth <= 768) return 2;
    if (screenWidth <= 1030) return 3;
    return 4;
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(getVisibleCards());
  const totalCards = cards.length;
  const totalDots = Math.ceil(totalCards / visibleCards); // Number of dots needed
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => setVisibleCards(getVisibleCards());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - visibleCards : 0
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + visibleCards < totalCards
        ? prevIndex + visibleCards
        : prevIndex
    );
  };

  const handleDotClick = (dotIndex) => {
    setCurrentIndex(dotIndex * visibleCards);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const swipeDistance = touchStartX.current - touchEndX.current;
    if (swipeDistance > 50) {
      handleNext();
    } else if (swipeDistance < -50) {
      handlePrev();
    }
  };

  return (
    <>
      <Styledsection className="font-poppins mt-[5rem] mb-[3rem] px-4 xl:px-14 lg:px-14 md:px-14 py-10 mx-auto">
        <h1 className="text-[1.5rem] xl:text-[2rem] font-bold">
          <span className="text-violet-700">Popular</span> Courses
        </h1>
        <div className="relative w-full mx-auto mt-[1rem]">
          {/* Navigation Arrows */}
          <button
            id="previous_arrow"
            onClick={handlePrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-violet-600 text-white p-2 rounded-full z-10"
          >
            ❮
          </button>
          <button
            id="next_arrow"
            onClick={handleNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-violet-600 text-white p-2 rounded-full z-10"
          >
            ❯
          </button>

          {/* Cards Container */}
          <div
            className="overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{
                transform: `translateX(-${
                  (currentIndex / visibleCards) * 100
                }%)`,
              }}
            >
              {cards.map((card) => (
                <div
                  key={card.id}
                  className="px-[7px] min-w-[100%] sm:min-w-[50%] md:min-w-[50%] lg:min-w-[33.33%] xl:min-w-[25%]"
                >
                  <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm">
                    <img
                      className="rounded-t-lg w-full h-[12rem]"
                      src={card.image}
                      alt="Course Pics"
                    />
                    <div className="p-5">
                      <h5 className="mb-2 text-[1.3rem] xl:text-2xl lg:text-2xl md:text-2xl font-bold tracking-tight text-gray-900">
                        {card.title}
                      </h5>
                      <p className="mb-3 font-normal text-gray-700">
                        {card.description.slice(0, 60) + "..."}
                      </p>
                      <p className="font-light mb-3">
                        Duration:
                        <span className="font-medium text-gray-700">
                          {" " + card.duration}
                        </span>
                      </p>
                      <button
                        className="inline-flex items-center px-5 py-2 text-sm font-medium text-center text-white bg-violet-700 rounded-[5px] hover:bg-violet-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                        // onClick={() => navigate("courses")}
                      >
                        <NavLink to="/courses">
                          Read More
                        </NavLink>
                        {/* Read more */}
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
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-4">
            {Array.from({ length: totalDots }).map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-1 h-1 xl:w-8 xl:h-1 lg:w-8 lg:h-1 md:w-5 md:h-1 mx-1 rounded-full ${
                  currentIndex / visibleCards === index
                    ? "bg-violet-700"
                    : "bg-gray-400"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </Styledsection>
    </>
  );
};

export default PopularCourses;
