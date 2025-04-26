import React from "react";
import 'typeface-poppins';
import python from "../images/python.png";
import networks from "../images/networks.webp";
import cyber from "../images/cyber.jpeg";
import app from "../images/app.jpg";

const cards = [
  {
    id: 1,
    title: "Python",
    description:
      "This course covers fundamental concepts like syntax, data structures, and object-oriented programming, along with advanced topics such as data analysis and automation.",
    image: `${python}`,
    duration: "3 Months",
  },
  {
    id: 2,
    title: "Networking",
    description:
      " Friend's Vision Academy provides a comprehensive understanding of network fundamentals, including LAN, WAN, routers, switches, and network security. Students will learn about IP addressing, troubleshooting, and configuring networks for efficient communication.",
    image: `${networks}`,
    duration: "3 Months",
  },
  {
    id: 3,
    title: "Cyber Security",
    description:
      " This course covers network security, ethical hacking, malware analysis, data encryption, and risk management. With hands-on training and real-world scenarios, students will learn to safeguard sensitive information, detect vulnerabilities, and respond to cyber attacks effectively",
    image: `${cyber}`,
    duration: "3 Months",
  },
  {
    id: 4,
    title: "App Development",
    description:
      "Covering both Android and iOS development, the course includes hands-on training in React Native, Flutter, and native app development.",
    image: `${app}`,
    duration: "3 Months",
  },
];

const UpcomingCourses = () => {
    return (
      <>
        <section className="font-poppins mt-[5rem] mb-[3rem] px-4 xl:px-14 lg:px-14 md:px-14 py-10 mx-auto">
          <h1 className="text-[1.5rem] xl:text-[2rem] font-bold">
            <span className="text-violet-700">Upcoming</span> Courses
          </h1>
          <div className="flex flex-wrap xl:gap-4 lg:gap-4 md:gap-4 mt-[1rem]">
            {cards.map((card) => (
              <div
                key={card.id}
                className="flex flex-col w-full sm:w-[49%] md:w-[48%] lg:w-[32%] xl:w-[24%]"
              >
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm mb-4">
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
                    <button className="inline-flex items-center px-5 py-2 text-sm font-medium text-center text-white bg-violet-700 rounded-[5px] hover:bg-violet-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                      Read more
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
        </section>
      </>
    );
}

export default UpcomingCourses;