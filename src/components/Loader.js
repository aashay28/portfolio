import React from 'react';
import { motion, easeInOut } from 'framer-motion';

import Image from './Image';

// Import images

const container = {
  show: {
    transition: {
      staggerChildren: 0.35,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 200 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: easeInOut,
      duration: 1.6,
    },
  },
  exit: {
    opacity: 0,
    y: -200,
    transition: {
      ease: easeInOut,
      duration: 0.8,
    },
  },
};

const itemMain = {
  hidden: { opacity: 0, y: 200 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: easeInOut,
      duration: 1.6,
    },
  },
};

console.log('PUBLIC_URL', process.env.REACT_APP_API_BASE_URL);
const Loader = ({ setLoading }) => {
  return (
    <motion.div className='loader'>
      <motion.div
        variants={container}
        onAnimationComplete={() => setLoading(false)}
        initial='hidden'
        animate='show'
        exit='exit'
        className='loader-inner'
      >
        <ImageBlock variants={item} id='image-1' />
        <motion.div variants={itemMain} className='transition-image'>
          <motion.img
            layoutId='main-image-1'
            src={process.env.REACT_APP_API_BASE_URL + `/images/image-2.jpg`}
          />
        </motion.div>
        <ImageBlock variants={item} id='image-3' />
        <ImageBlock variants={item} id='image-4' />
        <ImageBlock variants={item} id='image-5' />
      </motion.div>
    </motion.div>
  );
};

export const ImageBlock = ({ posX, posY, variants, id }) => {
  return (
    <motion.div
      variants={variants}
      className={`image-block ${id}`}
      style={{
        top: `${posY}vh`,
        left: `${posX}vw `,
      }}
    >
      <Image
        src={process.env.REACT_APP_API_BASE_URL + `/images/${id}.webp`}
        fallback={process.env.REACT_APP_API_BASE_URL + `/images/${id}.jpg`}
        alt={id}
      />
    </motion.div>
  );
};
export default Loader;
