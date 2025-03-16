import React, { useEffect, useState } from "react";
import CardsParent from "../cards-parent/CardsParent";
import useEscort from "../../context/useEscortContext";
import { AxiosFetch } from "../../apiCall/ApiCall";

function Nationality() {
  const images = [
    {
      src: "/images/european.jpg",
      name: "European",
    },
    {
      src: "/images/italian.jpg",
      name: "Italian",
    },
    {
      src: "/images/colombian.jpg",
      name: "Colombian",
    },
    {
      src: "/images/ukrainian.png",
      name: "Ukrainian",
    },
    {
      src: "/images/brazilian.jpg",
      name: "Brazilian",
    },
    {
      src: "/images/russian.jpg",
      name: "Russian",
    },
    {
      src: "/images/asian.jpg",
      name: "Asian",
    },
    {
      src: "/images/latin.jpg",
      name: "latin",
    },
    {
      src: "/images/british.jpg",
      name: "British",
    },
  ];

   const [recommendedEscorts, setRecommendedEscorts] = useState();
    const [message, setMessage] = useState('')
     
       const {escorts} = useEscort();
     
       
       useEffect(() => {
         if (escorts.length > 0) {
           const shuffled = [...escorts] // Copy array to avoid mutation
             .sort(() => 0.5 - Math.random()) // Shuffle array
             .slice(0, 20); // Take first 20 items
     
           setRecommendedEscorts(shuffled);
         }
       }, [escorts]); 
   
     
   
     const handleClick = async (service) =>{
       const params = new URLSearchParams({
         service : service
       })
       const response = await AxiosFetch(`/api/escorts/filter?${params.toString()}`)
       if(response.escorts){
         console.log(response.escorts)
         navigate(`/searchResults/${service}`, {
           state : {data : response.escorts}
         })
       } else if(response.message){
        setMessage(response.message)
       }
     }

  return (
    <>
      <div>
        <div className="xs:flex flex-wrap grid grid-cols-3 justify-center gap-5 p-2">
        {images?.map((img, index) => (
          <div key={index} className="md:h-36 h-[70px] w-[82px] md:w-48 mt-5 cursor-pointer" onClick={()=>{handleClick(img.name)}}>
            <img src={img.src} alt="" className="h-full w-full"/>
            <h1 className="bg-red-600 text-white text-center font-bold">
              {img.name}
            </h1>
          </div>
        ))}
        </div>
        {message&&<p   className="text-xl font-bold text-pink-500 text-center">{message}</p>}
        <CardsParent category={"International Escorts"} Escorts={recommendedEscorts}/>
      </div>
    </>
  );
}

export default Nationality;
