import React, { useEffect, useState } from "react";
import CardsParent from "../cards-parent/CardsParent";
import { AxiosFetch } from "../../apiCall/ApiCall";
import { Link } from "react-router-dom";

function Locations() {
  const [location, setLocation] = useState({});
  const [localEscorts, setLocalEscorts] = useState()

  // useEffect(() => {
  //   fetch("https://api64.ipify.org?format=json")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log("User's IP:", data.ip);
  //       console.log("Country:", data.country);
  //       fetch(`http://ip-api.com/json/${data.ip}`)
  //         .then((response) => response.json())
  //         .then((data) => {
  //           setLocation(data);
  //           console.log("User's Location:", data);
  //           console.log("City:", data.city);
  //           console.log("Region:", data.regionName);
  //           console.log("Country:", data.country);
  //           console.log("Latitude:", data.lat);
  //           console.log("Longitude:", data.lon);
  //         })
  //         .catch((error) => console.error("Error fetching location:", error));
  //     })
  //     .catch((error) => console.error("Error fetching IP:", error));
  // }, []);

  useEffect(()=>{
    const response = AxiosFetch(`/api/escorts/filter?${location}=${encodeURIComponent(location)}`)
    if(response.data){
      setLocalEscorts(response.data)
    }
  },[location])

  const escorts = [
    {
      image: "/images/central-london.webp",
      location: "Palma",
      text: "Central Palma is the heart of the city, known for its vibrant culture, iconic landmarks and lively nightlife on every street. Local girls offer exceptional encounters to suit your preferences and vacation style. Wherever you go - Soho, Mayfair or Covent Garden - find experienced Palma escorts who will provide you with first-class service. Enjoy unforgettable moments with selected escort girls in Central Palma and let us guide you through each neighborhood.",
      locations: [
        "Aldgate",
        "Barbican",
        "Bayswater",
        "Covent Garden",
        "Fitzrovia",
        "Mayfair",
        "Moorgate",
        "Pimlico",
        "Shoreditch",
        "Soho",
        "South Kensington",
        "Kensington",
        "Sloane Square",
        "West End",
      ],
      flexDirection: "flex-row",
    },
    // {
    //   image: "/images/South-London.webp",
    //   location: "South London",
    //   text: "South London combines glamor and modern moods, offering scenic views along the Thames. These views will not leave anyone indifferent. Our London models are available throughout South London. They will guide you from Clapham to Greenwich, ready to satiate your pastime with their charisma and graciousness. Explore this exciting area with cute and pretty escorts, perfect for a relaxed evening or a vibrant night out.",
    //   locations: [
    //     "Battersea",
    //     "Bermondsey",
    //     "Blackheath",
    //     "Brixton",
    //     "Camberwell",
    //     "Clapham",
    //     "Clapham Common",
    //     "Clapham North",
    //     "Dulwich",
    //     "East Dulwich",
    //     "East Putney",
    //     "Greenwich",
    //     "Herne Hill",
    //     " Hither Green",
    //     "New Cross",
    //     "Peckham",
    //     "Peckham Rye",
    //     "Putney",
    //     "Putney Heath",
    //     "South Wimbledon",
    //     "Tulse Hill",
    //     "Vauxhall",
    //     "West Dulwich",
    //     "Wandsworth",
    //     "Brockley",
    //     "Charlton",
    //   ],
    //   flexDirection: "flex-row-reverse",
    // },
    // {
    //   image: "/images/North-London.webp",
    //   location: "North London",
    //   text: "North London is known to all for its trendy neighbourhoods, luxurious parks and cultural centres. Wherever you are in Camden, Islington or Hampstead, our London models will provide the best experience to make every moment unforgettable. We will introduce you to local escorts who know how to brighten up your weekend by providing the best time and satisfaction. Enjoy the perfect balance of charm and sophistication with our escort services in North London.",
    //   locations: [
    //     "Barnet",
    //     "Belsize Park",
    //     "Camden",
    //     " Camden Town",
    //     "Edmonton",
    //     "Finchley",
    //     "Fitzrovia",
    //     "Hampstead",
    //     "Harlesden",
    //     "High Barnet",
    //     "Highbury",
    //     "Hornchurch",
    //     "Islington",
    //     "Kentish Town",
    //     "Kilburn",
    //     "Ladbroke Grove",
    //     "Lewisham",
    //     "Leytonstone",
    //     "Tottenham",
    //     "Wealdstone",
    //     "Wembley",
    //     "Wood Green",
    //     "Brent",
    //     "Cricklewood",
    //   ],
    //   flexDirection: "flex-row",
    // },
    // {
    //   image: "/images/East-London.webp",
    //   location: "East London",
    //   text: "East London is a vibrant neighbourhood rich in creativity, nightlife and unique attractions you won't find anywhere else. From trendy Shoreditch to elegant Canary Wharf, local escort services offer personalised companionship to match the energy of this impressive area. Find delightful models in East London who are ready to make your evenings memorable with their charm and passion for making new acquaintances. Experience the best of the best with reliable escort women.",
    //   locations: [
    //     "Barking",
    //     "Bethnal Green",
    //     " Blackwall",
    //     " Brick Lane",
    //     "Cambridge Heath",
    //     "Canary Wharf",
    //     "Dalston",
    //     "Globe Town",
    //     "Hackney",
    //     "Hackney Central",
    //     "Hoxton",
    //     " Isle of Dogs",
    //     "Ilford",
    //     "Leytonstone",
    //     "Redbridge",
    //     " Wanstead",
    //     "Waltham Forest",
    //     "Walthamstow",
    //   ],
    //   flexDirection: "flex-row-reverse",
    // },
    // {
    //   image: "/images/East-London.webp",
    //   location: "West London",
    //   text: "West London combines the charm and romance of every street, offering upmarket neighbourhoods such as Kensington, Chelsea and Notting Hill. London girls in this beautiful neighbourhood provide personalised services with grace and discretion. Whether you're attending an event or exploring the neighbourhood, local escort girls near you will provide a pleasurable experience that combines elegance and intimacy.",
    //   locations: [
    //     "Brompton",
    //     "Chelsea",
    //     "Earl's Court",
    //     "Fulham",
    //     "Harrow On The Hill",
    //     "Kew",
    //     "Ladbroke Grove",
    //     "Notting Hill",
    //     "Richmond",
    //     "Richmond Hill",
    //   ],
    //   flexDirection: "flex-row",
    // },
  ];

  const Card = ({ escort }) => {
    return (
      <div className=" text-white pb-16 w-full border-b border-pink-500">
        <div className={`flex ${escort.flexDirection} items-center gap-6`}>
          <div className="relative w-full md:w-1/3">
            <img
              src={escort.image}
              alt="Palma Night Scene"
              className="h-full w-full rounded-lg shadow-lg shadow-pink-500"
            />
          </div>
          <div className="w-full md:w-2/3 text-center">
            <h2 className="text-center text-2xl font-bold mb-4">
              {escort.location}
            </h2>
            <div className="border-b-2 border-pink-400 w-24 mx-auto mb-6"></div>
            <p className="text-sm md:text-base text-center leading-relaxed">
              {escort.text}
            </p>
            <div className="mt-4 flex flex-wrap justify-center md:justify-start gap-3 text-pink-300">
              {escort?.locations?.map((area, index) => (
                <Link to={"/"}
                  key={index}
                  className="text-sm md:text-base hover:text-pink-500 cursor-pointer"
                >
                  {area}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="my-10 flex flex-col items-center">
        <h1 className="w-fit text-2xl font-semibold text-white text-center mb-10 pb-3 border-b-4 border-pink-600">
          Local Escorts Near Me
        </h1>
        <div className=" space-y-32">
          {escorts.map((escort, index) => (
            <div key={index}>
              <Card escort={escort} />
            </div>
          ))}
        </div>
        <CardsParent category={"Local Female Escort Near Me"} Escorts={localEscorts}/>
      </div>
    </>
  );
}

export default Locations;
