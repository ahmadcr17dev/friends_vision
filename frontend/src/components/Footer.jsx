import React from 'react';
import "typeface-poppins";
import file from "../images/file.png";
import { FaWhatsapp } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";

const Footer = () => {
    return (
      <>
        <footer className="bg-white font-poppins mt-[10rem]">
          <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
            <div className="md:flex md:justify-between">
              <div className="mb-6 md:mb-0">
                <a href="https://flowbite.com/" className="flex items-center">
                  <img
                    src={file}
                    className="h-14 me-3 rounded-full"
                    alt="Friend's Vision"
                  />
                  <span className="self-center text-2xl font-semibold whitespace-nowrap">
                    Friend's Vision
                  </span>
                </a>
                <p className="mt-6 text-gray-600 ">
                  Ahsan Satti Plaza, 3rd Floor near THQ Hospital Kahuta <br /> District
                  Rawalpindi
                </p>
                <div className="flex flex-row mt-4 text-gray-800">
                  <p className="text-[1.5rem] mr-2">
                    <FaWhatsapp />
                  </p>
                  <p>+92 333 6813726</p>
                </div>
                <div className="flex flex-row text-gray-800 mt-4">
                  <p className="text-[1.3rem] mr-2">
                    {" "}
                    <FaPhone />{" "}
                  </p>
                  <p>051 3312486</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                <div>
                  <h2 className="mb-6 text-md font-semibold text-gray-900 uppercase">
                    Courses
                  </h2>
                  <ul className="text-gray-500 font-medium">
                    <li className="my-2">
                      <a
                        href="https://flowbite.com/"
                        className="hover:underline"
                      >
                        Office Automation
                      </a>
                    </li>
                    <li className="my-2">
                      <a
                        href="https://tailwindcss.com/"
                        className="hover:underline"
                      >
                        Digital Marketing
                      </a>
                    </li>
                    <li className="my-2">
                      <a
                        href="https://tailwindcss.com/"
                        className="hover:underline"
                      >
                        Web Development
                      </a>
                    </li>
                    <li className="my-2">
                      <a
                        href="https://tailwindcss.com/"
                        className="hover:underline"
                      >
                        Graphic Designing
                      </a>
                    </li>
                    <li className="my-2">
                      <a
                        href="https://tailwindcss.com/"
                        className="hover:underline"
                      >
                        More 10+
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="mb-6 text-md font-semibold text-gray-900 uppercase">
                    Classes
                  </h2>
                  <ul className="text-gray-500 font-medium">
                    <li className="mb-2">
                      <a
                        href="https://github.com/themesberg/flowbite"
                        className="hover:underline "
                      >
                        Grade IX
                      </a>
                    </li>
                    <li className="my-2">
                      <a
                        href="https://discord.gg/4eeurUVvTy"
                        className="hover:underline"
                      >
                        Grade X
                      </a>
                    </li>
                    <li className="my-2">
                      <a
                        href="https://discord.gg/4eeurUVvTy"
                        className="hover:underline"
                      >
                        Grade XI
                      </a>
                    </li>
                    <li className="my-2">
                      <a
                        href="https://discord.gg/4eeurUVvTy"
                        className="hover:underline"
                      >
                        Grade XII
                      </a>
                    </li>
                    <li className="my-2">
                      <a
                        href="https://discord.gg/4eeurUVvTy"
                        className="hover:underline"
                      >
                        Bachelor's
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="mb-6 text-md font-semibold text-gray-900 uppercase">
                    Legal
                  </h2>
                  <ul className="text-gray-500 font-medium">
                    <li className="my-2">
                      <a href="#" className="hover:underline">
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:underline">
                        Terms &amp; Conditions
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
            <div className="sm:flex sm:items-center sm:justify-between">
              <span className="text-[1rem] text-gray-500 sm:text-center">
                © 2023{" "}
                <a href="https://flowbite.com/" className="hover:underline">
                  Friend's Vision™
                </a>
                . All Rights Reserved.
              </span>
              <div className="flex mt-4 sm:justify-center sm:mt-0">
                <a
                  href="https://www.facebook.com"
                  className="text-gray-500 hover:text-gray-900"
                >
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 8 19"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">Facebook page</span>
                </a>
                <a
                  href="https://www.twitter.com"
                  className="text-gray-500 hover:text-gray-900 ms-5"
                >
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 17"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">Twitter page</span>
                </a>
                <a
                  href="https://www.instagram.com"
                  className="text-gray-500 hover:text-gray-900 ms-5"
                >
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.75 2A5.75 5.75 0 0 0 2 7.75v8.5A5.75 5.75 0 0 0 7.75 22h8.5A5.75 5.75 0 0 0 22 16.25v-8.5A5.75 5.75 0 0 0 16.25 2h-8.5Zm-4.25 5.75A4.25 4.25 0 0 1 7.75 3.5h8.5A4.25 4.25 0 0 1 20.5 7.75v8.5A4.25 4.25 0 0 1 16.25 20.5h-8.5A4.25 4.25 0 0 1 3.5 16.25v-8.5ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-3.5 5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0ZM17.5 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">Instagram page</span>
                </a>
                <a
                  href="https://www.tiktok.com"
                  className="text-gray-500 hover:text-gray-900 ms-5"
                >
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.5 1.5c1.5 2 3.2 3 5.5 3v3c-2 0-3.9-.6-5.5-1.8v6.3a7.5 7.5 0 1 1-7.5-7.5h1.3v3h-1.3a4.5 4.5 0 1 0 4.5 4.5V1.5h3Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">TikTok page</span>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
}

export default Footer;