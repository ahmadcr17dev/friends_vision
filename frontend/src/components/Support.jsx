import React from "react";
import "typeface-poppins";
import tick from "../images/tick.png";

const cards = [
  {
    id: 1,
    title: "Highly Experienced",
    image: tick,
    description:
      "At Friend's Vision Academy, we take pride in our highly experienced faculty, dedicated to providing top-quality education. Our instructors are experts in their respective fields, bringing years of teaching experience and practical knowledge to ensure students receive the best guidance. With a focus on concept-based learning, hands-on training, and personalized mentorship, we prepare students for academic success and professional excellence",
  },
  {
    id: 2,
    title: "Questions, Quizes & Courses",
    image: tick,
    description:
      "At Friend’s Vision Academy, we believe in making learning interactive and engaging through well-structured questions and quizzes. These assessments are designed to test students’ knowledge, boost their confidence, and reinforce key concepts in a fun and effective way. By participating in quizzes, students can track their progress, identify areas for improvement, and strengthen their understanding of various subjects.",
  },
  {
    id: 3,
    title: "Dedicated Support",
    image: tick,
    description:
      "At Friend’s Vision Academy, we are committed to providing dedicated support to ensure every student receives the guidance they need. Our experienced instructors and support team are always available to assist with queries, clarify doubts, and offer personalized help. Whether it’s academic challenges, course-related concerns, or career advice, we are here to support students at every step of their learning journey.",
  },
];

const Support = () => {
  return (
    <>
      <section className="mt-[5rem] mb-[3rem] font-poppins px-4 xl:px-14 lg:px-14 md:px-14 py-10 mx-auto">
        <h1 className="text-center font-bold text-[1.5rem] xl:text-[2.5rem] lg:text-[2.15rem] md:text-[1.8rem]">
          What To Expect From{" "}
          <span className="text-violet-700"> Friend's Vision? </span>{" "}
        </h1>
        <div className="flex flex-wrap justify-center xl:gap-6 lg:gap-10 md:gap-4 mt-[3rem] text-center">
          {cards.map((card) => (
            <div
              key={card.id}
              className="flex flex-col w-full sm:w-[48%] md:w-[48%] lg:w-[30%] p-4"
            >
              <img
                src={card.image}
                alt="icon 1"
                className="w-12 h-12 mx-auto"
              />
              <h1 className="text-[1.3rem] xl:text-[1.4rem] lg:text-[1.1rem] md:text-[1.2rem] font-semibold my-6">
                {card.title}
              </h1>
              <p className="text-gray-600 text-[0.8rem] xl:text-[1rem] lg:text-[0.8rem] md:text-[0.8rem]">
                {card.description.slice(0, 140) + "..."}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Support;
