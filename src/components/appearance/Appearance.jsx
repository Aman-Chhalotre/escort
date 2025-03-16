import React from 'react'
import CardsParent from '../cards-parent/CardsParent';

function Appearance() {
  const appearances = [
    "Shaved",
    "Trimmed",
    "Hairy",
    "Slim",
    "Tall",
    "Petite",
    "Blonde",
    "Brunette",
    "Busty",
    "Young",
    "Curvy",
    "Ebony",
    "Mature",
    "Tattooed",
    "Brown",
    "Red"
  ];
  
  return (
    <>
              <div className="flex flex-wrap gap-3 p-4 bg-gradient-to-r from-purple-700 to-purple-900 rounded-lg">
      {appearances.map((service, index) => (
        <span
          key={index}
          className="bg-pink-500 hover:bg-pink-400 duration-300 text-white font-semibold px-4 py-2 rounded-full text-sm shadow-md"
        >
          {service}
        </span>
      ))}
    </div>
    <CardsParent category={"Escort Guide by Appearance"}/>
    </>
  )
}

export default Appearance