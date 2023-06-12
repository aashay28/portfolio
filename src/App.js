import { useEffect, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import './sass/main.scss';

// Components
import Header from './components/Header';
import Banner from './components/Banner';
import Loader from './components/Loader';

function App() {
  const [loading, setLoading] = useState(true);
  const prefersReducedMotion = useReducedMotion();
  useEffect(() => {
    loading
      ? document.querySelector('body').classList.add('loading')
      : document.querySelector('body').classList.remove('loading');
  }, [loading]);

  return (
    <AnimatePresence>
      {loading ? (
        <motion.div key='loader'>
          <Loader setLoading={setLoading} />
        </motion.div>
      ) : (
        <>
          <Header />
          <Banner />
          {!loading && (
            <div
              className='transition-image final'
              initial={!prefersReducedMotion && { opacity: 0 }}
              animate={!prefersReducedMotion && { opacity: 1 }}
            >
              <motion.img
                transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1.6 }}
                src={process.env.PUBLIC_URL + `/images/image-2.jpg`}
                layoutId='main-image-1'
              />
            </div>
          )}
        </>
      )}
    </AnimatePresence>
  );
}

export default App;
