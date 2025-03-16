import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import CardsParent from "../cards-parent/CardsParent";
import useEscort from "../../context/useEscortContext";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

function Profile() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const location = useLocation();
  const data = location.state || {};
  const [recommendedEscorts, setRecommendedEscorts] = useState();
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const { escorts } = useEscort();
  const assets = [...data.videos, ...data.images];
  useEffect(() => {
    if (escorts.length > 0) {
      const shuffled = [...escorts] // Copy array to avoid mutation
        .sort(() => 0.5 - Math.random()) // Shuffle array
        .slice(0, 3); // Take first 12 items
      setRecommendedEscorts(shuffled);
    }
  }, [escorts]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % assets.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + assets.length) % assets.length
    );
  };

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };

    // Handle touch events for swipe gestures
    const handleTouchStart = (e) => {
      touchStartX.current = e.touches[0].clientX;
    };
  
    const handleTouchEnd = (e) => {
      touchEndX.current = e.changedTouches[0].clientX;
      const diff = touchStartX.current - touchEndX.current;
  
      if (diff > 50) {
        handleNext(); // Swipe Left → Next Image
      } else if (diff < -50) {
        handlePrev(); // Swipe Right → Previous Image
      }
    };
  return (
    <>
      <div>
        <div className="min-h-screen bg-purple-900 text-white flex items-center justify-center sm:p-6 p-1">
          <div className="grid lg:grid-cols-3 gap-5 max-w-6xl w-full ">
            {/* Left Panel - Parameters */}
            <div className="bg-white text-black p-6 rounded-xl shadow-lg">
              <h2 className="text-pink-500 text-xl font-bold underline">
                Parameters
              </h2>
              <h3 className="text-2xl font-bold">{data.name}</h3>
              <ul className="mt-4 text-sm space-y-1">
                <li>
                  <strong>Age:</strong> {data.age}
                </li>
                <li>
                  <strong>Height{"(ft)"}:</strong> {data.height}
                </li>
                <li>
                  <strong>Weight{"(kg)"}:</strong> {data.weight}
                </li>
                <li>
                  <strong>Chest:</strong> {data.chest}
                </li>
                <li>
                  <strong>Nationality:</strong> {`${data.country}`}
                </li>
                <li>
                  <strong>Available for:</strong>{" "}
                  {`${data.services[0]}, ${data.services[1]}`}
                </li>
              </ul>
              <h3 className="text-pink-500 text-lg font-bold mt-4 underline">
                Language
              </h3>
              {/* <p>English</p> */}
            </div>

            {/* Center Panel - Profile Image */}
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-2">
                <button className="text-5xl" onClick={handlePrev}>
                  <IoIosArrowBack />
                </button>
                {assets[currentIndex].includes(".mp4") ? (
                  <video
                    src={assets[currentIndex]}
                    className="rounded-xl shadow-lg object-fill sm:w-[250px] w-[200px] sm:h-[400px] h-[350px] ease-in duration-200"
                    autoPlay
                    controls
                  />
                ) : (
                  <img
                    src={assets[currentIndex]}
                    alt="Profile"
                    className="rounded-xl shadow-lg object-fill sm:w-[250px] w-[200px] sm:h-[400px] h-[350px] ease-in duration-200"
                    draggable='false'
                  />
                )}
                <button className="text-5xl" onClick={handleNext}>
                  <IoIosArrowForward />
                </button>
              </div>

              <div className="photoSection relative w-full overflow-x-auto mt-4 pb-2">
                <div className="flex space-x-2 w-max px-4 justify-self-center" 
                 onTouchStart={handleTouchStart}
                 onTouchEnd={handleTouchEnd}>
                  {assets.map((asset, index) => (
                    <div key={index} className="md:w-16 w-8 md:h-24 h-10">
                      {asset.includes(".mp4") ? (
                        <video
                          src={asset}
                          className={`w-full h-full object-cover cursor-pointer rounded-lg border-2 ${
                            index === currentIndex
                              ? "border-pink-500"
                              : "border-transparent"
                          }`}
                          onClick={() => handleThumbnailClick(index)}
                          autoPlay
                          loop
                          muted
                          playsInline
                          disablePictureInPicture
                          controlsList="nodownload noplaybackrate nofullscreen"
                        />
                      ) : (
                        <img
                          src={asset}
                          alt="Thumbnail"
                          className={`w-full h-full object-cover cursor-pointer rounded-lg border-2 ${
                            index === currentIndex
                              ? "border-pink-500"
                              : "border-transparent"
                          }`}
                          onClick={() => handleThumbnailClick(index)}
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Panel - Pricing and Services */}
            <div className="bg-white text-black p-6 rounded-xl shadow-lg">
              <h2 className="text-pink-500 text-xl font-bold underline">
                Price
              </h2>
              <ul className="text-sm mt-4">
                {data.rates.map((rate) => (
                  <li>
                    {rate.hours} hour: <strong>{rate.rate}  £</strong>
                  </li>
                ))}
              </ul>
              <h2 className="text-pink-500 text-xl font-bold mt-4 underline">
                Services
              </h2>
              <div className=" sm:w-[320px] w-[250px]">
                <p className="text-sm mt-2 font-bold h-28 overflow-y-scroll overflow-x-hidden break-words">
                  {data.services.map((service) => (
                    <span>
                      {service}{" "}
                      <span className="text-[10px] whitespace-normal">♦️</span>{" "}
                    </span>
                  ))}
                </p>
              </div>
              <button className="mt-4 bg-pink-500 text-white px-4 py-2 rounded-lg w-full font-bold">
                Get Started
              </button>
            </div>
          </div>
        </div>

        <div className=" bg-purple-900 flex flex-col items-center justify-center ">
          {/* Contact Info */}
          <div className="text-center text-white mb-6 text-xl">
            <p>
              Whatsapp:{" "}
              <span className="text-pink-400 font-semibold">37254619660</span>
            </p>
          </div>
          {/* Buttons */}
          <div className="flex flex-col gap-4 mt-6">
            <button className="bg-transparent border border-pink-500 text-pink-500 px-6 py-2 rounded-lg font-semibold hover:bg-pink-500 hover:text-white transition">
              Book now
            </button>
          </div>

          {/* Content Sections */}
          <div className="flex md:flex-row flex-col items-center justify-between gap-8 w-full max-w-6xl pb-10">
            {/* Left Box (Description) */}
            <div className="w-full md:w-[400px] bg-white p-4 text-sm rounded-lg shadow-lg max-h-[400px] overflow-y-auto">
              <h2 className="text-pink-500 font-bold text-xl text-center mb-3">
                Description
              </h2>
              <p className="text-black font-semibold">{data.bio}</p>
            </div>
            <button className="bg-pink-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-pink-600 transition">
              Write review
            </button>

            {/* Right Box (Areas Available) */}
            <div className="w-full max-h-96 md:w-[400px] bg-white p-4 rounded-lg shadow-lg">
              <h2 className="text-pink-500 font-bold text-lg text-center mb-3">
                <span className="underline">Areas where</span> {data.name}{" "}
                available 
              </h2>
              <div className="grid grid-cols-2 gap-2 text-black text-sm font-semibold">
                <p className="flex items-center">
                  <span className="text-pink-500 mr-2">✦</span> {data.location}
                </p>
                {/* <p className="flex items-center">
                  <span className="text-pink-500 mr-2">✦</span> Mayfair
                </p>
                <p className="flex items-center">
                  <span className="text-pink-500 mr-2">✦</span> Central London
                </p>
                <p className="flex items-center">
                  <span className="text-pink-500 mr-2">✦</span> Soho
                </p>
                <p className="flex items-center">
                  <span className="text-pink-500 mr-2">✦</span> Chelsea
                </p>
                <p className="flex items-center">
                  <span className="text-pink-500 mr-2">✦</span> South Kensington
                </p>
                <p className="flex items-center">
                  <span className="text-pink-500 mr-2">✦</span> Kensington
                </p>
                <p className="flex items-center">
                  <span className="text-pink-500 mr-2">✦</span> Tulse Hill
                </p> */}
              </div>
            </div>
          </div>
          <CardsParent
            category={`Related to ${data.name}`}
            Escorts={recommendedEscorts}
          />
        </div>
      </div>
    </>
  );
}

export default Profile;
