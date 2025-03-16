import React, { useEffect, useState } from 'react'
import CardsParent from '../cards-parent/CardsParent'
import { IoMdSearch } from "react-icons/io";
import useEscort from '../../context/useEscortContext';

function Escorts() {
    const [Escorts, setEscorts] = useState();
  
    const {escorts} = useEscort();
  
    
    useEffect(() => {
      if (escorts.length > 0) {
        const shuffled = [...escorts] // Copy array to avoid mutation
          .sort(() => 0.5 - Math.random()) // Shuffle array
          .slice(0, 12); // Take first 12 items
  
          setEscorts(shuffled);
      }
    }, [escorts]); 
  return (
    <>
        <div>
          <div className='w-80 rounded-lg p-2 bg-gray-200 flex items-center'> 
            
            <input type="text" className='bg-transparent w-full border-none outline-none' placeholder='Search girl...'/>
            <IoMdSearch className='text-2xl text-gray-500'/>
          </div>
            <CardsParent category={"High-Class Escorts in London"} Escorts={Escorts}/>
        </div>
    </>
  )
}

export default Escorts