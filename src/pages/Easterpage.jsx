import React, { useEffect,useRef } from 'react'
import gsap from "gsap"
import { useNavigate } from 'react-router-dom';

function Easterpage() {
   
  
const titleRef = useRef();
const textRef = useRef();

useEffect(() => {
  gsap.to(titleRef.current, {
    scale:3,
    duration: 2,
    ease: "expo.inOut"
  });

    gsap.to(textRef.current, {
     opacity:1,
    duration: 1.3,
    ease: "elastic.inOut",
    delay:2
  });


}, []);

  
  return (
    <div className='avenger overflow-hidden text-white flex items-center justify-center w-full flex-col gap-10 h-screen bg-neutral-900'>
    
    <h1 ref={titleRef} className=' text-2xl scale-[700] md:mt-0 mt-10'> <span>A</span></h1>

   <div ref={textRef} className='w-full opacity-0 md:w-3xl h-[80%] md:h-[27rem] rounded-2xl bg-white flex items-center flex-col justify-center gap-3 text-zinc-900'> 
          <h1 className='text-3xl'>You have unlock the AI verse code..?  </h1>
          <h1 className='bg-neutral-800 px-10 py-2 text-center tracking-wider text-white text-4xl '>" with great power comes great responsibility "</h1>
          <h1 className='spider text-3xl text-center px-20'> <span className='bg-red-500 px-3 text-white'>Mission :</span> Find one of the three guys from the following list in CT Department and say the Phrase above to get a cool reward </h1>
          <h1 className='text-2xl mt-2'>Eklawaya Chauhan</h1>
          <h2 className='text-2xl'>Jaykrishana khond</h2>
          <h2 className='text-2xl'>Pranay Shirulkar </h2>
   </div>

    
    </div>
  )
}

export default Easterpage