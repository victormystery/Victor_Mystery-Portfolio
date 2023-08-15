import React from "react";
import Image from "../assets/about.png";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Banner = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              //Motion doesnt seems to work properly
              // variants={fadeIn("up", 0.3)}
              // initial="hidden"
              // whiteInView={"show"}
              // viewport={{ once: false, amount: 0.7 }}
              className="text-[35px] font-bold leading-[0.8] lg:text-[50px]"
            >
              Victor <span>Osarobo</span>
            </motion.h1>

            <div className="mb-6 text-[36px] lg:text-[-60px] font-secondary font-semibold uppercase leading-[1]">
              <span className=" text-black mr-4">I am a</span>
              <TypeAnimation
                sequence={[
                  "Mobile Developer",
                  2000,
                  "Software Engineer",
                  2000,
                  "IoT Developer",
                  2000,
                ]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </div>
            <p className="mb-8 max-w-lg mx-auto lg:mx-0">
            Experienced Software Developer and IoT Expert with a passion for innovative problem-solving. I excel in collaborative environments, specializing in creating exceptional user-centric websites, applications, and IoT solutions. My proficiency encompasses software development, Python, Django, Flutter, and IoT technologies. I'm dedicated to crafting flawless digital experiences that leave a lasting impact. My expertise spans user experience, speed optimization, and industry standards. Let's discuss crafting software solutions to elevate organizations.
            </p>
            <div className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0">
              <button className="btn btn-lg">Contact me</button>
              <a href="#work" className="text-gradient btn-link">
                My Portfolio
              </a>
            </div>

            <div className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0 ">
              <a  href="https://www.linkedin.com/in/osarobo-victor/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://github.com/victormystery?tab=repositories" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://twitter.com/mystery_osoro" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
            </div>
          </div>
          <div className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]">
            <img src={Image} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
