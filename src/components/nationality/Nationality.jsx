import React from "react";
import CardsParent from "../cards-parent/CardsParent";

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
  return (
    <>
      <div>
        <div className="xs:flex flex-wrap grid grid-cols-3 justify-center gap-5 p-2">
        {images?.map((img) => (
          <div className="md:h-36 h-[70px] w-[82px] md:w-48 mt-5">
            <img src={img.src} alt="" className="h-full w-full"/>
            <h1 className="bg-red-600 text-white text-center font-bold">
              {img.name}
            </h1>
          </div>
        ))}
        </div>
        <CardsParent category={"International Escorts"}/>
      </div>
    </>
  );
}

export default Nationality;
