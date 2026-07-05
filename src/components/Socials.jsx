import React from "react";
import { motion } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { socialGithub, socialLinkedin, socialGmail, socialLeetcode } from "../assets";

const socials = [
  { name: "LinkedIn", link: "https://www.linkedin.com/in/ashwadha-chandrasekar/", icon: socialLinkedin },
  { name: "Email", link: "mailto:ashwadhac@gmail.com", icon: socialGmail },
  { name: "GitHub", link: "https://github.com/ashwadhac", icon: socialGithub },
  { name: "LeetCode", link: "https://leetcode.com/u/ashwadha_07_/", icon: socialLeetcode },
];

const SocialCard = ({ index, name, link, icon }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, scale: 0 },
      show: { opacity: 1, scale: 1, transition: { type: "spring", delay: index * 0.15, duration: 0.5 } },
    }}
    className="green-pink-gradient p-[1px] rounded-full cursor-pointer"
    onClick={() => window.open(link, "_blank")}
  >
    <div className="bg-tertiary rounded-full w-14 h-14 flex items-center justify-center">
      <img src={icon} alt={name} className="w-7 h-7 object-contain" />
    </div>
  </motion.div>
);

const Socials = () => {
  return (
    <div className="mt-6 flex justify-center items-center gap-5">
      {socials.map((social, index) => (
        <SocialCard key={social.name} index={index} {...social} />
      ))}
    </div>
  );
};

export default SectionWrapper(Socials, "");
