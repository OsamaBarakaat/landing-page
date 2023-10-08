import React from "react";
import Hero from "../components/Hero";
import WhoWeAre from "../components/WhoWeAre";
import Sectors from "../components/Sectors";
import Features from "../components/Features";
import Feedback from "../components/Feedback";
import ApplicationInterfaces from "../components/ApplicationInterfaces";
import SingleSectorComponent from "../components/SingleSectorComponent";

const Home = () => {
  return (
    <>
      <Hero />
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
      <WhoWeAre />
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
      <Sectors />
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
      <Features />
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
      <Feedback />
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
      <ApplicationInterfaces />
    </>
  );
};

export default Home;
