import React from "react";
import "typeface-poppins";

const HeroSection = () => {
  return (
    <>
      <section className="bg-white font-poppins mt-[3rem]">
        <div className="flex flex-row justify-between px-6 xl:px-14 lg:px-14 md:px-14 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-bold tracking-tight leading-none md:text-[40px] lg:text-[40px] xl:text-[48px]">
              First Institute of{" "}
              <span className="text-violet-700">Professional</span> Courses in{" "}
              <span className="text-violet-700">Kahuta</span>
            </h1>
            <p className="max-w-2xl mb-6 font-regular text-gray-600 lg:mb-8 md:text-[1rem] lg:text-[1rem] xl:text-[1.19rem]">
              We are offering a huge variety of professional computer courses.
              With us, you will learn from Office Automation to Cyber Security
            </p>
            <a
              href="#"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-center text-white rounded-lg bg-violet-700 hover:bg-violet-800 focus:ring-4 focus:ring-primary-300"
            >
              Get started
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img
              src="https://eduma.thimpress.com/demo-marketplace/wp-content/uploads/sites/99/2023/08/home-banner-top.jpg"
              alt="mockup"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
