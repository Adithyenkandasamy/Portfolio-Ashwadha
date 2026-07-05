import React, { useState } from "react";
import { createPortal } from "react-dom";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience, onClickCertificate }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>

      {experience.certificate && (
        <div className="mt-5">
          <button
            onClick={() => onClickCertificate(experience.certificate)}
            className="bg-tertiary py-2 px-4 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary hover:bg-[#915EFF] transition-colors"
          >
            View Certificate
          </button>
        </div>
      )}
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
              onClickCertificate={setSelectedCertificate}
            />
          ))}
        </VerticalTimeline>
      </div>

      {selectedCertificate && createPortal(
        <div 
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-80"
          onClick={() => setSelectedCertificate(null)}
        >
          <div 
            className="relative p-2 max-w-3xl w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedCertificate} 
              alt="Certificate" 
              className="w-full h-auto object-contain rounded-lg shadow-2xl max-h-[85vh]"
            />
            <button 
              className="fixed top-6 right-6 md:top-10 md:right-10 text-white bg-tertiary rounded-full w-12 h-12 flex items-center justify-center hover:bg-secondary text-2xl border-2 border-white z-[10000] shadow-xl"
              onClick={() => setSelectedCertificate(null)}
            >
              &times;
            </button>
          </div>
        </div>,
        document.body
      )}
    </>
  );
};

export default SectionWrapper(Experience, "work");
