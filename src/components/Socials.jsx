import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { socialGithub, socialLinkedin, socialGmail, socialLeetcode } from "../assets";

const socials = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/ashwadha-chandrasekar/",
    icon: socialLinkedin,
  },
  {
    name: "Email",
    link: "mailto:ashwadhac@gmail.com",
    icon: socialGmail,
  },
  {
    name: "GitHub",
    link: "https://github.com/ashwadhac",
    icon: socialGithub,
  },
  {
    name: "LeetCode",
    link: "https://leetcode.com/u/ashwadha_07_/",
    icon: socialLeetcode,
  },
];

const SocialCard = ({ index, name, link, icon }) => (
  <Tilt className='w-full'>
    <motion.div
      variants={fadeIn("up", "spring", index * 0.25, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card cursor-pointer'
      onClick={() => window.open(link, "_blank")}
    >
      <div
        options={{
          max: 45,
          scale: 1.05,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-8 px-12 min-h-[220px] flex justify-center items-center flex-col gap-4'
      >
        <img 
          src={icon} 
          alt={name}
          className="w-20 h-20 object-contain"
        />
        <h3 className='text-white text-[24px] font-bold text-center tracking-wider'>
          {name}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const Socials = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[250px] flex flex-col justify-center`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Get in touch</p>
          <h2 className={styles.sectionHeadText}>My Socials.</h2>
        </motion.div>
      </div>
      <div className={`-mt-16 pb-14 ${styles.paddingX} grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-4xl mx-auto`}>
        {socials.map((social, index) => (
          <SocialCard key={social.name} index={index} {...social} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Socials, "");
