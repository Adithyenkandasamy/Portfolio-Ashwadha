import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { socialGithub, socialLinkedin, socialGmail, socialLeetcode } from "../assets";

const socials = [
  { name: "LinkedIn", link: "https://www.linkedin.com/in/ashwadha-chandrasekar/", icon: socialLinkedin },
  { name: "Email", link: "mailto:ashwadhac@gmail.com", icon: socialGmail },
  { name: "GitHub", link: "https://github.com/ashwadhac", icon: socialGithub },
  { name: "LeetCode", link: "https://leetcode.com/u/ashwadha_07_/", icon: socialLeetcode },
];

const SocialCard = ({ index, name, link, icon }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ type: "spring", delay: index * 0.15, duration: 0.5 }}
    whileHover={{ scale: 1.2 }}
    transitionEnd={{ scale: 1 }}
    className="green-pink-gradient p-[1px] rounded-full cursor-pointer"
    onClick={() => window.open(link, "_blank")}
  >
    <div className="bg-tertiary rounded-full w-20 h-20 flex items-center justify-center">
      <img src={icon} alt={name} className="w-10 h-10 object-contain" />
    </div>
  </motion.div>
);

const Socials = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div className="bg-tertiary rounded-2xl sm:px-16 px-6 sm:py-12 py-8 flex flex-col items-center">
        <motion.div variants={textVariant()} className="text-center">
          <p className={styles.sectionSubText}>Get in touch</p>
          <h2 className={styles.sectionHeadText}>Social links.</h2>
        </motion.div>
        <div className="mt-8 flex justify-center items-center gap-6">
          {socials.map((social, index) => (
            <SocialCard key={social.name} index={index} {...social} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Socials, "");
