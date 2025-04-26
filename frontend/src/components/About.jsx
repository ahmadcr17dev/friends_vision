import React, { useEffect, useState, useRef } from "react";
import "typeface-poppins";
import ceo from "../images/ceo.jpg";

const About = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [counts, setCounts] = useState([0, 0, 0, 0]);

  // Given numbers to count up to
  const finalNumbers = [150, 800, 15, 30];

  // Function to animate counting
  const startCounting = () => {
    finalNumbers.forEach((num, index) => {
      let count = 0;
      const increment = Math.ceil(num / 100); // Smooth counting
      const interval = setInterval(() => {
        count += increment;
        if (count >= num) {
          count = num;
          clearInterval(interval);
        }
        setCounts((prev) => {
          const updated = [...prev];
          updated[index] = count;
          return updated;
        });
      }, 20);
    });
  };

  // Intersection Observer to detect visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  useEffect(() => {
    if (visible) {
      startCounting();
    }
  }, [visible]);

  return (
    <>
      <div
        ref={sectionRef}
        className="container mx-auto p-8 mt-[5rem] font-poppins"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Left Column: Text Section */}
          <div>
            <h2 className="text-[1.8rem] xl:text-[2.5rem] lg:text-[2.2rem] md:text-[1.8rem] font-bold text-gray-800">
              Our Achievements
            </h2>
            <p className="text-md xl:text-md lg:text-md md:text-sm text-gray-600 mt-3">
              We have accomplished remarkable milestones, serving a vast number
              of students with exceptional quality
            </p>
          </div>

          {/* Right Column: Cards Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              "Session Complete",
              "Satisfied Students",
              "Teaching Faculty",
              "Courses Offered",
            ].map((title, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-6 xl:p-6 lg:p-6 md:p-3 flex flex-col items-center"
              >
                <h3 className="text-[1.5rem] xl:text-[1.5rem] lg:text-[1.5rem] md:text-[1.3rem] font-semibold text-violet-600">
                  {counts[index] + "+"}
                </h3>
                <p className="xl:text-md lg:text-md md:text-sm text-gray-700">
                  {title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="bg-white font-poppins mt-[3rem]">
        <div className="flex flex-row justify-between px-6 xl:px-14 lg:px-14 md:px-14 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <p className="max-w-2xl mb-6 font-normal text-gray-600 lg:mb-8 md:text-[1rem] lg:text-[1rem] xl:text-[1.15rem] italic">
              "At our academy, we believe that education is not just about
              acquiring knowledge—it's about transforming lives. In todays
              digital world, practical skills and hands-on experience are more
              valuable than ever. Thats why were committed to offering
              career-focused courses that empower our students to thrive in the
              modern workplace. Whether it's mastering office automation,
              graphic design, web development, or freelancing, our mission is to
              equip you with the tools to succeed and stand out. Together,lets
              build a brighter, skillful future"
            </p>
            <p className="font-medium text-[1.13rem]">Hafiz Amir Sohaib</p>
            <p className="font-medium">
              <span className="text-violet-600 font-semibold">CEO</span> of
              Friend's Vision Academy
            </p>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src={ceo} alt="mockup" className="rounded-full" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
