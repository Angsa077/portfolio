import React, { useState } from 'react';

//icons
import {
  FaCss3,
  FaHtml5,
  FaLaravel,
  FaJs,
  FaReact,
} from 'react-icons/fa';

import {
  SiNextdotjs,
  SiTailwindcss,
} from 'react-icons/si';


//about data
export const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        title: 'Web Development',
        icons: [
          <FaHtml5 key="html" />,
          <FaCss3 key="css" />,
          <SiTailwindcss key="tailwind" />,
          <FaLaravel key="laravel" />,
          <FaJs key="javascript" />,
          <FaReact key="react" />,
          <SiNextdotjs key="nextjs" />,
        ],
      },
      // {
      //   title: 'UI/UX Design',
      //   icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
      // },
    ],
  },
  {
    title: 'awards',
    info: [
      {
        title: '-',
        stage: '-',
      },
      // {
      //   title: 'Adobe Design Achievement Awards - Finalist',
      //   stage: '2009 - 2010',
      // },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'Customer Service at Bank Central Asia',
        stage: '2019 s/d 2022',
      },
      // {
      //   title: 'Web Developer - ABC Agency',
      //   stage: '2010 - 2012',
      // },
      // {
      //   title: 'Intern - DEF Corporation',
      //   stage: '2008 - 2010',
      // },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'Web Developer Junior - BNSP',
        stage: '2023',
      },
      // {
      //   title: 'Computer Science Diploma - AV Technical Institute',
      //   stage: '2009',
      // },
      // {
      //   title: 'Certified Graphic Designer - ABC Institute, Los Angeles, CA',
      //   stage: '2006',
      // },
    ],
  },
];

//components
import Avatar from '../../components/Avatar';
import Circles from '../../components/Circles';

//framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

//counters
import CountUp from 'react-countup';

const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);
  return (
  <div className='h-full bg-primary/30 py-32 text-center xl:text-left'>
      <Circles />
      {/* avatar img */}
      <motion.div 
          variants={fadeIn('right', 0.2)} 
          initial='hidden'
          animate='show'
          exit='hidden'
          className='hidden xl:flex absolute bottom-0 -left-[370px]'
          >
          <Avatar />
      </motion.div>
      <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6'>
          {/* text */}
          <div className='flex-1 flex flex-col justify-center'>
            <motion.h2 
                variants={fadeIn('right', 0.2)} 
                initial='hidden'
                animate='show'
                exit='hidden'
                className='h2'>Web <span className='text-accent'>Developer</span>.
            </motion.h2>
            <motion.p 
                variants={fadeIn('right', 0.4)} 
                initial='hidden'
                animate='show'
                exit='hidden'
                className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'>
                  1 years ago, I began freelancing as a web developer. 
                  Since then, i have done work for a few company. 
            </motion.p>
          </div>
          {/* info */}
          <motion.div 
                variants={fadeIn('left', 0.4)} 
                initial='hidden'
                animate='show'
                exit='hidden'
                className='flex flex-col w-full xl:max-w-[48%] h-[180px]'>
              <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
                  {aboutData.map((item, itemIndex) =>{
                    return (
                      <div
                          key={itemIndex}
                          className={`${index === itemIndex && 'text-accent after:w-[100%] after:transition-all after:duration-300'}
                          cursor-pointer capitalize xl:text-lg relative after:w-8
                          after:h-[2px] after:bg-white after:absolute after:-bottom-1
                          after:left-0`}
                          onClick={() => setIndex(itemIndex)}
                      >
                        {item.title}
                      </div>
                    );
                  })}
              </div>
              <div className='py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start'>
                  {aboutData[index].info.map((item, itemIndex) => {
                    return (
                      <div 
                      key={itemIndex}
                      className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 
                      items-center text-white/60'
                      >
                        {/* title */}
                          <div className='font-light mb-2 md:mb-0'>{item.title}</div>
                          <div className='hidden md:flex'>-</div>
                          <div>{item.stage}</div>
                          <div className='flex gap-x-4'>
                            {/* icons */}
                            {item.icons?.map((icon, itemIndex) => {
                              return <div className='text-2xl text-white' key={itemIndex}>{icon}</div>
                            })}
                          </div>
                      </div>
                    );
                  })}
              </div>
          </motion.div>
      </div>
  </div>
  );
};

export default About;
