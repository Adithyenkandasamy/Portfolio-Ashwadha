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
  <motion.div
    variants={fadeIn("", "spring", index * 0.25, 0.75)}
    className="w-full sm:w-[250px]"
  >
    <Tilt
      options={{
        max: 25,
        scale: 1.1,
        speed: 450,
      }}
      className="bg-black-200 p-8 rounded-3xl w-full flex flex-col justify-center items-center shadow-lg cursor-pointer border border-tertiary hover:border-secondary hover:shadow-secondary transition-all min-h-[200px]"
    >
      <div 
        onClick={() => window.open(link, "_blank")}
        className="w-full h-full flex flex-col items-center justify-center gap-4"
      >
        <img 
          src={icon} 
          alt={name}
          className="w-16 h-16 object-contain"
        />
        <p className="text-white font-bold text-[20px] tracking-wider text-center">{name}</p>
      </div>
    </Tilt>
  </motion.div>
);

const Socials = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px] flex flex-col justify-center`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Get in touch</p>
          <h2 className={styles.sectionHeadText}>My Socials.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7 justify-center`}>
        {socials.map((social, index) => (
          <SocialCard key={social.name} index={index} {...social} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Socials, "");
