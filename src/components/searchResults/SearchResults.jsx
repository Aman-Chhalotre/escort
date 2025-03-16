import React, { use, useEffect, useState } from "react";
import CardsParent from "../cards-parent/CardsParent";
import useEscort from "../../context/useEscortContext";
import { AxiosFetch } from "../../apiCall/ApiCall";
import { useLocation } from "react-router-dom";

function SearchResults() {
    const [SearchResultsEscorts, setServicesEscorts] = useState();
    const [resultService, setResultService] = useState();
    const [message, setMessage] = useState()
    
    const location = useLocation();
    const {data}  = location.state || {};


    useEffect(() => {
        setServicesEscorts(data);
    }, []); 

  const services = [
    "Erotic massage",
    "Cunnilingus",
    "Fingering",
    "Striptease",
    "Incall",
    "Outcall",
    "Strap-On",
    "30 Minutes",
    "MMF",
    "Golden Shower",
    "Classic vaginal sex",
    "Couples",
    "Duo",
  ];

    const handleClick = async (service) =>{
      const params = new URLSearchParams({
        service : service
      })
      const response = await AxiosFetch(`/api/escorts/filter?${params.toString()}`)
      if(response.escorts){
        setServicesEscorts(response.escorts)
        setMessage()
        setResultService(service)
      } else {
        console.log(response.message)
        setServicesEscorts()
        setMessage(response.message)
      }
    }
  

  return (
    <>
      <div className="flex flex-wrap gap-3 p-4 bg-gradient-to-r from-purple-700 to-purple-900 rounded-lg">
        {services.map((service, index) => (
          <span
            key={index}
            className="bg-pink-500 hover:bg-pink-400 duration-300 text-white font-semibold md:px-4 px-2 md:py-2 py-1 rounded-full md:text-sm text-xs shadow-md"
            onClick={()=>{handleClick(service)}}
          >
            {service}
          </span>
        ))}
      </div>
      {message&&<h1 className="text-3xl font-bold text-pink-500">{message}</h1>}
      {SearchResultsEscorts?.length > 0 &&(<CardsParent category={`${resultService} Escort Services`} Escorts={SearchResultsEscorts}/>)}

      {/* <div className=" text-white h-[400px] overflow-auto leading-7">
        <h1 className="text-pink-500 text-xl font-bold">
          Escort Services - Your Way to a New Experience
        </h1>
        <div className="border-b-4 border-pink-500 rounded-2xl w-52 mt-1"></div>
        <p>
          What is an ideal date for you? If you cannot imagine a perfect evening
          without a beautiful companion, you are in the right place! We are glad
          to present you a wonderful way to have an unforgettable date - with
          our gorgeous escort girls. We are sure you will have only positive
          emotions afterward. Interested to know more? If you have never heard
          of us, do not worry. Having worked with us once, you will want to come
          back to us again and again. Now we invite you to take a closer look at
          us, the services we offer, and below you will get answers to all your
          questions.
        </p>

        <h1 className="text-pink-500 text-xl font-bold">
          We and Our Principles
        </h1>
        <div className="border-b-4 border-pink-500 rounded-2xl w-52 mt-1"></div>
        <p>
          We are not just a company that has a catalog of models. We think that
          a woman is beautiful at any age. Therefore, in our catalog, there are
          not only young girls, but also older women. It all depends on you and
          your wishes, and we will choose the ideal female escort for you.{" "}
          <br />
          We carefully select women before adding them to our database. We
          consider many factors such as:
          <br />
          Education
          <br />
          Body type
          <br />
          Character
          <br />
          Habits
          <br />
          Ethnic origin
          <br />
          We guarantee full openness and honesty where they are needed. And on
          the contrary: we are silent about what no one should know about. We
          guarantee full confidentiality, and everything we hear from the
          customer will remain unrevealed. All our customers worry about their
          image and reputation, which is normal. We are fully open to answer all
          your questions. So, you will not have problems or misunderstanding
          booking a particular service. We will be glad to tell you about all
          our responsibilities as well as yours. We do respect all our customers
          and expect the same. All these principles help us to be on the list of
          top escort service agencies in London.
        </p>

        <h1 className="text-pink-500 text-xl font-bold">
          Incall And Outcall Services
        </h1>
        <div className="border-b-4 border-pink-500 rounded-2xl w-52 mt-1"></div>
        <p>
          Of course, it can be problematic to understand everything at once,
          especially if you have never searched for escort services in London.
          But that is what we are for - we are an experienced company that will
          do everything for you. <br />
          The two most popular services of our agency are incall and outcall
          services. Incall meetings take place on our territory and we are fully
          responsible for them. The algorithm of actions is as follows:
          <br />
          Our managers listen carefully to all your wishes regarding the model.
          <br />
          You will be offered several options based on your criteria, or you can
          browse the catalog and choose a model yourself.
          <br />
          You discuss with the manager the date and time when it will be
          convenient for you to arrive.
          <br />
          The manager tells you the price based on your wishes and consults you
          on the payment process.
          <br />
          Then you arrive on the appointed date and time to meet with the chosen
          escort.
          <br />
          Outcall services are another type of meeting. In this case, the
          meeting with the model takes place on the territory chosen by a
          customer. These places include a restaurant, an apartment, a hotel,
          and others. I.e. the man is fully responsible for everything that
          happens during such meetings. If you want to know more about outcall
          services, feel free to contact us. Our managers will be glad to help
          you and consult about all the details.
        </p>

        <h1 className="text-pink-500 text-xl font-bold">
          Incall And Outcall Services
        </h1>
        <div className="border-b-4 border-pink-500 rounded-2xl w-52 mt-1"></div>
        <p>
          As an experienced agency, we know that all men have different tastes
          and preferences. Some men have extraordinary fantasies and wishes. We
          also have something to offer men who love something naughty and
          unusual. For example, men with such interesting preferences can book
          exclusive options. One of them is the strapon service, and our models
          will use this famous accessory the way you wish.
          <br />
          Do you want to experience something special? Then you should try some
          special techniques, and our ladies are ready to offer one that has
          almost no restrictions, except for your wishes. At the same time, it
          has many possibilities. If you don't mind exploring a woman’s beauty
          with your own hands, then this service is for you. It will help to
          study the body better and understand its ‘weak’ areas and most
          sensitive places. Do you want to feel like a magician, as if the whole
          world is in your hands? Do you want to see how many angels are ready
          to dance on the tip of your finger? Then fingering is what you should
          try undoubtedly.
          <br />
          Like no one else, we understand that sometimes you want to be away
          from reality. Yes, we cannot take you from one place to another, but
          we can do something to make you forget about all the things you worry
          about. Have you already guessed what we are talking about? Here are
          some facts about it.
          <br />
          The term for this concept was invented by the British at the beginning
          of the 20th century.
          <br />
          During this process, partners transmit approximately 80 million
          bacteria to each other.
          <br />
          In one minute of this activity, you burn from 5 to 26 calories.
          <br />
          It was originally called "Florentine" because it was associated with
          Italian passion.
          <br />
          Yes, we are talking about deep French kissing. Our DFK service is
          carried out by experienced models, who can take you to another reality
          with one movement of their lips.
          <br />
          As a company with extensive experience, we are tolerant of men with
          different preferences and interests. And we respect every single man,
          even if he is partial to various things or actions. Even specialists
          compare fetishes with food: some people like chicken, while others
          prefer beef.
          <br />
          It doesn’t matter to us why you like this or that object, how you got
          this fetish. But we are ready to do everything to make you feel as
          comfortable as possible, and our skillful models will demonstrate your
          fetish in all its glory. Do you want to know more about our fetish
          escorts? Welcome to contact us.
          <br />
        </p>

        <h1 className="text-pink-500 text-xl font-bold">
        A Final Step
        </h1>
        <div className="border-b-4 border-pink-500 rounded-2xl w-52 mt-1"></div>
        <p>
        As an experienced escort agency, we care about our customers’ comfort. We appreciate each of them respecting their interests and wishes. We do our best to make them return again and again. We strive to be the best and monitor the quality of escort services we provide. Therefore, if you want to spend a wonderful evening in the company of a charming woman, do not hesitate to contact us. We are open to all your ideas, and you only need to take one action. You are always welcome to look through the profiles in our catalog or contact us to book a perfect model for you.
        </p>
      </div> */}
    </>
  );
}

export default SearchResults;
