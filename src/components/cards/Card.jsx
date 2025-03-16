import { useState } from "react";
import { Link } from "react-router-dom";

export default function Card({ escort }) {
  const [zIndex, setZIndex] = useState(20);

  return (
    <Link to={`/escorts/${escort.name}`} state={{
      ...escort
    }} >
      <div className="bg-[#DFB2B2] p-2 rounded-lg shadow-lg grid grid-cols-2">
        <div className="relative " 
          onMouseEnter={()=>setZIndex(0)}
          onMouseLeave={()=>setZIndex(20)}
        >
          <img
            src={escort.image}
            alt={escort.name}
            className={`object-cover h-[317px] absolute rounded-lg z-${zIndex}`}
          />
          <video src={escort.video} autoPlay={true} muted={true} className="object-cover rounded-lg relative h-[317px]"></video>
          
          <div className="absolute top-2 left-2  p-1 rounded-full bg-[#00000096] text-white text-[11px] font-medium z-20">{escort.suggestion}</div>
          <div className="absolute top-1.5 right-2  p-2 rounded-full z-20">❤️</div>
          {escort.video&&(
          <div className="absolute bottom-2 left-2 bg-black text-white text-xs px-2 py-1 rounded z-20">
            Video
          </div>
          )}
          <div className="absolute bottom-2 right-2 text-white text-xs flex items-center gap-1 z-20">
            👁 {escort.views}
          </div>
        </div>
        <div className="mt-4 text-center md:px-5 px-2 space-y-3">
          <h2 className="md:text-lg text-sm font-bold text-pink-700">{escort.name}</h2>
          <ul className="text-gray-800 mt-2 space-y-1">
            <li className="flex items-center md:text-lg text-sm justify-between gap-1">
              <strong><span className="text-[10px]">➕ </span>Age : </strong> <span className="font-bold">{escort.age}</span>
            </li>
            <li className="flex items-center justify-between md:text-lg text-sm gap-1">
              <strong><span className="text-[10px]">➕ </span>Height : </strong> <span className="font-bold">{escort.height}</span>
            </li>
            <li className="flex items-center justify-between md:text-lg text-sm gap-1">
              <strong><span className="text-[10px]">➕ </span>Weight : </strong> <span className="font-bold">{escort.weight}</span>
            </li>
            <li className="flex items-center justify-between md:text-lg text-sm gap-1">
              <strong><span className="text-[10px]">➕ </span>Chest : </strong> <span className="font-bold">{escort.chest}</span>
            </li>
            <li className="flex items-center justify-between md:text-lg text-sm gap-1">
              <strong><span className="text-[10px]">➕ </span>1 hour : </strong> <span className="font-bold">{escort.priceOneHour}</span>
            </li>
            <li className="flex items-center justify-between md:text-lg text-sm gap-1">
              <strong><span className="text-[10px]">➕ </span>2 hours : </strong> <span className="font-bold">{escort.priceTwoHour}</span>
            </li>
            <li className="flex items-center justify-between md:text-lg text-sm gap-1">
              <strong><span className="text-[10px]">➕ </span>4 hours : </strong> <span className="font-bold">{escort.priceFourHour}</span>
            </li>
            
          </ul>
          <h2 className="text-base font-bold text-pink-700">{escort.location}</h2>
        </div>
      </div>
    </Link>
  );
}
