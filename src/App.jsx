import React from "react";
import image1 from "./assets/Image/image1.png";
import image2 from "./assets/Image/image2.png";
import image3 from "./assets/Image/image3.png";
import image4 from "./assets/Image/image4.png";
import { motion } from "framer-motion";

function App() {
  return (
    <div>
      <div className="ml-[150px]">
        <div className="mt-[30px] ">
          <h1 className="text-2xl">Your SkillShikshya Journey</h1>
          <p className="font-bold text-[35px]">
            <span className="text-green-600">Step</span> <span>In.</span>{" "}
            <span className="text-green-600">Skill</span> <span>Up.</span>{" "}
            <span className="text-green-600">Stand</span> <span>Out.</span> 🚀{" "}
          </p>
        </div>

        <div className="flex gap-10 mt-[30px]">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex">
              <div className="w-[150px] absolute mt-[10px]">
                <img src={image1} alt="" className="h-[250px] w-[400px]" />
              </div>
              <div className=" flex flex-col items-end pt-[20px]  pr-[20px] ml-[20px]  bg-red-400 h-[240px] w-[450px] rounded-[20px]">
                <h1 className="text-[22px] font-bold text-white">
                  Start With Clarity
                </h1>
                <h1 className="text-white text-[16px] mt-[10px] font-semibold">
                  Step into a better learning path.
                </h1>
                <p className="text-white text-[14px] mt-[20px] text-right w-[290px]">
                  Overwhelmed by too many learning options? SkillShikshya
                  provides a clear, curated roadmap from the start. Whether
                  you're a beginner or upskilling, we have a path tailored to
                  your growth.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex justify-between bg-teal-600 h-[240px] w-[450px] rounded-[20px]">
              <div className="flex flex-col justify-center ml-[20px] w-[290px]">
                <h1 className="text-[22px] font-bold text-white">
                  Learn By Doing
                </h1>
                <h1 className="text-white text-[16px] mt-[10px] font-semibold">
                  Practical Skills, real Projects.
                </h1>
                <p className="text-white text-[14px] mt-[20px]">
                  Theory is great, but action is better. At SkillShikshya, you
                  learn by doing. Hands-on projects and real-world scenarios
                  help you build, break, and create-leading to true mastery.
                </p>
              </div>
              <div className="w-[150px]">
                <img
                  src={image2}
                  alt=""
                  className="h-[260px] w-[200px] mt-[10px] pr-[10px]"
                />
              </div>
            </div>
          </motion.div>
        </div>

        <div className=" flex gap-8 mt-[30px] ">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex">
              <div className="absolute mt-[60px]">
                <img src={image3} alt="" className="h-[200px] w-[220px]" />
              </div>
              <div className="text-right ml-[20px] pr-[20px] flex justify-center flex-col mr-[20px]  bg-purple-500 h-[240px] w-[450px] rounded-[20px]">
                <h1 className="text-[22px] font-bold text-white">
                  Get Mentored & Supported
                </h1>
                <h1 className="text-white text-[16px] mt-[10px] font-semibold">
                  You're not learning alone.
                </h1>
                <p className="text-white text-[14px] mt-[20px] ml-[185px]">
                  Stuck or need feedback? SkillShikshya's community of mentors
                  and learners has your back with live support, interactive
                  discussions, and expert insights. You're never on your own.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex">
              <div className="absolute ml-[230px] mt-[40px]">
                <img src={image4} alt="" className="h-[230px] w-[220px]" />
              </div>
              <div
                style={{ backgroundColor: "#A77547" }}
                className="flex flex-col pt-[10px] pl-[20px]  h-[240px] w-[450px] rounded-[20px]"
              >
                <h1 className="text-[22px] font-bold text-white">
                  Achieve & Showcase
                </h1>
                <h1 className="text-white text-[16px] mt-[10px] font-semibold">
                  Bild your portfolio, get job-ready.
                </h1>
                <p className="text-white text-[14px] mt-[20px] w-[290px]">
                  Your journey ends with achievement. Each completed project
                  builds a portfolio showcasing your skills and job readiness,
                  bringing you closer to that dream job, promotion, or your own
                  venture.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default App;
