import React, { use, useEffect, useState } from "react";
import CardsParent from "./cards-parent/CardsParent";
import useEscort from "../context/useEscortContext";

function Landing() {
  const [recommendedEscorts, setRecommendedEscorts] = useState();
  

  const {escorts} = useEscort();

  
  useEffect(() => {

    if (escorts?.length > 0) {
      const shuffled = [...escorts] // Copy array to avoid mutation
        .sort(() => 0.5 - Math.random()) // Shuffle array
        .slice(0, 12); // Take first 12 items

      setRecommendedEscorts(shuffled);
    }
  }, [escorts]); 

  return (
    <>
    {escorts?.length > 0 &&
      <section>
      <CardsParent category={"Escort Club in Palma"} Escorts={recommendedEscorts}/>
      <CardsParent category={"Recently added escorts"} Escorts={recommendedEscorts}/>
    </section>
    }
    </>
  );
}

export default Landing;
