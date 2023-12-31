import React from "react";
import { Link } from "react-router-dom";
const ApplicationInterfaces = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      {" "}
      <div className="py-8 px-4  mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className=" justify-center justify-self-center mx-aut mb-4 lg:mb-0">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-teal-700 dark:text-white">
            Application Interfaces
          </h2>
          <h3 className="mb-4 text-4xl tracking-tight font-bold text-slate-700 dark:text-white">
            Learn about the features of the Jumpers platform
          </h3>
          <p className="max-w-2xl mb-6 font-light text-slate-700 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Now learn about all the interfaces of the Jumpers application{" "}
          </p>
        </div>
      </div>
      <div className="grid max-w-screen-xl px-4 pb-8 justify-center justify-self-center mx-auto lg:gap-8 xl:gap-0 lg:pb-16 lg:grid-cols-12">
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img
            src="https://jumpersksa.com/uploads/application_interfaces/1081651215161.png"
            alt="mockup"
          />
        </div>
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-bold tracking-tight leading-none md:text-5xl xl:text-6xl text-slate-700 dark:text-white">
            The interface of the company or institution{" "}
          </h1>
          <p className="max-w-2xl mb-6 font-light text-slate-700 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            As an owner of a company or institution, you can request qualified
            employees in all fields in the blink of an eye through the giant
            Jumpers application
          </p>
          <button
            type="button"
            class="focus:outline-none w-full md:w-48 text-white bg-teal-700	 hover:bg-teal-800 focus:ring-4 focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800"
          >
            Google Play
          </button>

          <button
            type="button"
            class="focus:outline-none w-full md:w-48 text-white bg-teal-700	 hover:bg-teal-800 focus:ring-4 focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800"
          >
            App Store
          </button>
        </div>
      </div>
      <div className="grid max-w-screen-xl px-4 py-8 justify-center justify-self-center mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-bold tracking-tight leading-none md:text-5xl xl:text-6xl text-slate-700 dark:text-white">
            Jumpers interface
          </h1>
          <p className="max-w-2xl mb-6 font-light text-slate-700 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            An interface for distinguished jumpers who want to get the job of a
            lifetime in the largest companies in the Kingdom. You can view your
            CV in a flash and send it to companies wishing to obtain Saudi or
            foreign workers in the Kingdom of Saudi Arabia.
          </p>
          <button
            type="button"
            class="focus:outline-none w-full md:w-48 text-white bg-teal-700	 hover:bg-teal-800 focus:ring-4 focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800"
          >
            Google Play
          </button>

          <button
            type="button"
            class="focus:outline-none w-full md:w-48 text-white bg-teal-700	 hover:bg-teal-800 focus:ring-4 focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800"
          >
            App Store
          </button>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img
            src="https://jumpersksa.com/uploads/application_interfaces/1341651215224.png"
            alt="mockup"
          />
        </div>
      </div>
    </section>
  );
};

export default ApplicationInterfaces;
