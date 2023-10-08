import React from "react";

const Hero = () => {
  return (
    <section id="" className="bg-white dark:bg-gray-900">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="place-self-center justify-center justify-self-center mx-auto lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-bold tracking-tight leading-none md:text-5xl xl:text-6xl text-teal-700 dark:text-white">
            Jumpers Platform Interactive and Media Head
          </h1>
          <p className="max-w-2xl mb-6 font-light text-slate-700 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Would you like to work in organizing events? Or even in TV programs
            and barista studios, do you like to be creative with coffee? Do you
            feel that you have the ability to act in secondary roles? Jumpers
            platform provides all these opportunities and more. All you have to
            do is register your data and skills and benefit from Jumpers’ many
            advantages.
          </p>
          <button
            type="button"
            class="focus:outline-none w-full md:w-48 text-white bg-teal-700	 hover:bg-teal-800 focus:ring-4 focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800"
          >
            Looking for employees
          </button>

          <button
            type="button"
            class="focus:outline-none w-full md:w-48 text-white bg-teal-700	 hover:bg-teal-800 focus:ring-4 focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800"
          >
            Job Seekers (Jumbers)
          </button>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img src="https://jumpersksa.com/jumper.gif" alt="mockup" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
