import {motion} from 'framer-motion';
import { useState } from 'react';
import './App.css';

function App() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="App">
      <motion.div 
        layout
        transition={{layout: {duration:1, type: "spring"}}}
        onClick={() => setIsOpen(!isOpen)} className='card'
        style={{borderRadius: "2rem", boxShadow: '0px, 10px, 30px rgba(0, 0, 0, 0.5)'}}>

        <motion.h2>Framer-motion 🚀</motion.h2>
        {isOpen &&
        <motion.div
          className='expand'
          initial={{opacity: 0}}
          animate={{opacity:1}}
          transition={{duration: 1}}
          >
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ex exercitationem aliquid ipsum quae alias, fugiat voluptatum tempore autem maxime?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, debitis!</p>
      </motion.div>
        }
      </motion.div>
    </div>
  );
}

export default App;
