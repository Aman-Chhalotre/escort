import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Card({ escort }) {
  const [zIndex, setZIndex] = useState(20);
  const [city, setCity] = useState("");
  const [state, setState] = useState();

  useEffect(() => {
      fetch("https://api64.ipify.org?format=json")
        .then((response) => response.json())
        .then((data) => {
          console.log("User's IP:", data.ip);
          console.log("Country:", data.country);
          fetch(`http://ip-api.com/json/${data.ip}`)
            .then((response) => response.json())
            .then((data) => { 
              console.log("User's Location:", data);
              console.log("City:", data.city);
              setCity(data.city)
              setState(data.regionName);
              console.log("Country:", data.country);
              console.log("Latitude:", data.lat);
              console.log("Longitude:", data.lon);
            })
            .catch((error) => console.error("Error fetching location:", error));
        })
        .catch((error) => console.error("Error fetching IP:", error));

    }, []); 

  return (
    <Link to={`/escorts/${escort.name}`} state={{
      ...escort
    }} className="">
      <div className="bg-[#DFB2B2]  p-2 rounded-lg shadow-lg grid grid-cols-2">
        <div className="relative " 
          onMouseEnter={()=>setZIndex(0)}
          onMouseLeave={()=>setZIndex(20)}
        >
          <img
            src={escort.profile_photo}
            alt={escort.name}
            className={`object-cover h-[317px] absolute rounded-lg z-${zIndex}`}
          />
          <video src={escort.videos} autoPlay={true} muted={true} className="object-cover rounded-lg relative h-[317px]"></video>
          
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
            {escort.rates.map((item, index)=>(
              <li className="flex items-center justify-between md:text-lg text-sm gap-1" key={index}>
                <strong><span className="text-[10px]">➕ </span>{item.hours}</strong> <span className="font-bold">{item.rate}</span>
              </li>
            )).slice(0,2)}
            
          </ul>
          <h2 className="text-base font-bold text-pink-700">{city} ,{state}</h2>
        </div>
      </div>
    </Link>
  );
}
