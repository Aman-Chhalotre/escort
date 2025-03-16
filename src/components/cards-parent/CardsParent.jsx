import React, { use, useEffect } from 'react'
import Card from '../cards/Card'

function CardsParent({category, Escorts}) {
    // const escorts = [
    //     {
    //         name : "Louise",
    //         age : 21,
    //         height : 165,
    //         weight : 51,
    //         chest : "B",
    //         priceOneHour : 700,
    //         priceTwoHour : 1000,
    //         priceFourHour : 1400,
    //         location : "Mayafai",
    //         image : "/images/Helcy.webp",
    //         video : "/videos/escort.mp4",
    //         views : 345,
    //         suggestion : "Recommended",
    //         status: "pending" 

    //       },
    //     {
    //         name : "Louise",
    //         age : 21,
    //         height : 165,
    //         weight : 51,
    //         chest : "B",
    //         priceOneHour : 700,
    //         priceTwoHour : 1000,
    //         priceFourHour : 1400,
    //         location : "Mayafai",
    //         image : "/images/Helcy.webp",
    //         views : 345,
    //         suggestion : "Recommended",
    //         status: "approved" 
    //       },
    //     {
    //         name : "Louise",
    //         age : 21,
    //         height : 165,
    //         weight : 51,
    //         chest : "B",
    //         priceOneHour : 700,
    //         priceTwoHour : 1000,
    //         priceFourHour : 1400,
    //         location : "Mayafai",
    //         image : "/images/Helcy.webp",
    //         views : 345,
    //         suggestion : "Recommended",
    //         status: "pending" 
    //       },
    //     {
    //         name : "Louise",
    //         age : 21,
    //         height : 165,
    //         weight : 51,
    //         chest : "B",
    //         priceOneHour : 700,
    //         priceTwoHour : 1000,
    //         priceFourHour : 1400,
    //         location : "Mayafai",
    //         image : "/images/Helcy.webp",
    //         views : 345,
    //         suggestion : "Recommended",
    //         status: "pending" 
    //       },
    //     {
    //         name : "Louise",
    //         age : 21,
    //         height : 165,
    //         weight : 51,
    //         chest : "B",
    //         priceOneHour : 700,
    //         priceTwoHour : 1000,
    //         priceFourHour : 1400,
    //         location : "Mayafai",
    //         image : "/images/Helcy.webp",
    //         views : 345,
    //         suggestion : "Recommended",
    //         status: "approved" 
    //       },
    //     {
    //         name : "Louise",
    //         age : 21,
    //         height : 165,
    //         weight : 51,
    //         chest : "B",
    //         priceOneHour : 700,
    //         priceTwoHour : 1000,
    //         priceFourHour : 1400,
    //         location : "Mayafai",
    //         image : "/images/Helcy.webp",
    //         views : 345,
    //         suggestion : "Recommended",
    //         status: "pending" 
    //       },
    //     {
    //         name : "Louise",
    //         age : 21,
    //         height : 165,
    //         weight : 51,
    //         chest : "B",
    //         priceOneHour : 700,
    //         priceTwoHour : 1000,
    //         priceFourHour : 1400,
    //         location : "Mayafai",
    //         image : "/images/Helcy.webp",
    //         views : 345,
    //         suggestion : "Recommended",
    //         status: "pending" 
    //       },
    //     {
    //         name : "Louise",
    //         age : 21,
    //         height : 165,
    //         weight : 51,
    //         chest : "B",
    //         priceOneHour : 700,
    //         priceTwoHour : 1000,
    //         priceFourHour : 1400,
    //         location : "Mayafai",
    //         image : "/images/Helcy.webp",
    //         views : 345,
    //         suggestion : "Recommended",
    //         status: "pending" 
    //       },
    //     {
    //         name : "Louise",
    //         age : 21,
    //         height : 165,
    //         weight : 51,
    //         chest : "B",
    //         priceOneHour : 700,
    //         priceTwoHour : 1000,
    //         priceFourHour : 1400,
    //         location : "Mayafai",
    //         image : "/images/Helcy.webp",
    //         views : 345,
    //         suggestion : "Recommended",
    //         status: "pending" 
    //       },
    //     {
    //         name : "Louise",
    //         age : 21,
    //         height : 165,
    //         weight : 51,
    //         chest : "B",
    //         priceOneHour : 700,
    //         priceTwoHour : 1000,
    //         priceFourHour : 1400,
    //         location : "Mayafai",
    //         image : "/images/Helcy.webp",
    //         views : 345,
    //         suggestion : "Recommended",
    //         status: "pending" 
    //       },
    //     {
    //         name : "Louise",
    //         age : 21,
    //         height : 165,
    //         weight : 51,
    //         chest : "B",
    //         priceOneHour : 700,
    //         priceTwoHour : 1000,
    //         priceFourHour : 1400,
    //         location : "Mayafai",
    //         image : "/images/Helcy.webp",
    //         views : 345,
    //         suggestion : "Recommended",
    //         status: "approved" 
    //       },
    //     {
    //         name : "Louise",
    //         age : 21,
    //         height : 165,
    //         weight : 51,
    //         chest : "B",
    //         priceOneHour : 700,
    //         priceTwoHour : 1000,
    //         priceFourHour : 1400,
    //         location : "Mayafai",
    //         image : "/images/Helcy.webp",
    //         views : 345,
    //         suggestion : "Recommended",
    //         status: "approved" 
    //       },
    // ]

    
      // console.log(recommendedEscorts)

  return (
    <>
    <div className='my-10 flex flex-col items-center'>
      <h1 className='w-fit md:text-2xl text-lg font-semibold text-white text-center mb-10 pb-3 border-b-4 border-pink-600'>{category}</h1>
        <div className='grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 w-[85%] justify-self-center'>
            {Escorts?.map((escort, index)=>(
              <div key={index}>
                <Card  escort={escort}/>
              </div>
            ))}
        </div>
    </div>
    </>
  )
}

export default CardsParent