import React, { useEffect, useState } from "react";
import CardsParent from "../cards-parent/CardsParent";
import useEscort from "../../context/useEscortContext";
import { AxiosFetch } from "../../apiCall/ApiCall";

function Fetish() {
  const fetish = [
    "Face sitting",
    "Footjob",
    "Handjob",
    "Fisting",
    "Foot fetish",
    "Mistress",
    "Rimming",
    "Spanking",
    "Submissive",
    "BDSM",
    "Bondage",
    "Deepthroat",
    "Domination",
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
    {message&&<h1 className="text-3xl font-bold text-pink-500">{message}</h1>}
      <div className="flex flex-wrap gap-3 p-4 bg-gradient-to-r from-purple-700 to-purple-900 rounded-lg">
        {fetish.map((service, index) => (
          <span
            key={index}
            className="bg-pink-500 hover:bg-pink-400 duration-300 text-white font-semibold px-4 py-2 rounded-full text-sm shadow-md cursor-pointer"
            onClick={()=>{handleClick(service)}}
          >
            {service}
          </span>
        ))}
      </div>
      <CardsParent category={"Fetish Escort Service"} Escorts={recommendedEscorts}/>

      <div className=" text-white h-[400px] overflow-auto leading-7">
        <h1 className="text-pink-500 text-xl font-bold">
          Let's Open the Doors to Fetish Services
        </h1>
        <div className="border-b-4 border-pink-500 rounded-2xl w-52 mt-1"></div>
        <p>
          Our fantasies are an immense world where we can be anyone. And it is
          not at all necessary to hide your fantasies, even the darkest ones.
          Scientists even say that having fetishes is good for your mental
          health. But let’s figure out together what a fetish is and what its
          varieties are. <br />
          Until the 19th century, a fetish was any object endowed with
          supernatural powers. Nowadays, a fetish is an object that a person
          assigns a special meaning and everyone has their own meaning. The
          object of a fetish can be anything: objects, parts of the human body,
          materials. Even just thinking about them can cause sexual arousal.
          However, for real sexual release, there must be a material object that
          you can touch, smell, or taste. But we offer another way - our fetish
          escorts!
          <br />
          Their main goal is to help you to get rid of your boring and strict
          public image, giving free rein to your imagination and taking a break
          from your usual daily routine.
        </p>

        <h1 className="text-pink-500 text-xl font-bold">
          Reveal Your Hidden Fetishes
        </h1>
        <div className="border-b-4 border-pink-500 rounded-2xl w-52 mt-1"></div>
        <p>
          How do fetishes appear in our lives? There are two professional
          opinions about that. According to the 1st one, that is a result of
          acquired reflex. But here everything is not so simple and each case is
          unique. However, we can say for sure that the human brain is capable
          of giving a sexual context to anything or phenomenon.
          <br />
          The second opinion correlates the connection between fetishes and
          imprints, which can be called emotional memory. For example, emotions
          during the first sexual experience, orgasm, thoughts, and feelings at
          that moment.
          <br />
          To reveal your hidden fetishes, return to your childhood. Try to
          recollect your adolescence or youth. Try to remember what you liked
          most of all, and which objects impressed you. No doubt, fetishes
          originate in your past. Regardless of the reason for the formation of
          your fetish, we guarantee that our kinky escorts will give you true
          pleasure and help you to find yourself in a different reality
        </p>

        <h1 className="text-pink-500 text-xl font-bold">
          The Most Popular Varieties of Fetish
        </h1>
        <div className="border-b-4 border-pink-500 rounded-2xl w-52 mt-1"></div>
        <p>
          According to various studies, the presence of fetishes is more typical
          for men. It is assumed that the reason for this is a difference in
          perception: men are more aroused by visual stimuli, for example,
          photos of a naked body.
          <br />
          Varieties of sexual fetishes:
          <br />
          parts of the body;
          <br />
          appearance;
          <br />
          distinctive features (piercings, tattoos, etc.);
          <br />
          clothes and accessories (underwear, shoes);
          <br />
          specific material (leather, vinyl, spandex, latex, or even fur);
          <br />
          social situations (experiences and emotions in certain conditions);
          <br />
          role-playing games with uniforms, and so on.
          <br />
          For both men and women, the most common fetish is for various parts of
          the body. Men are especially partial to women's legs, which look
          completely different when accessorized with fishnet stockings or
          crotchless tights. Therefore, if you cannot resist the beauty of
          women’s legs, foot fetish services are right for you. Our models have
          extensive experience in this type of entertainment. These can be
          different manipulations – tickling massage or stroking.
          <br />
          When it comes to a fetish for a certain material, latex is on top of
          the list. This is a special material that is often called “second
          skin”. It perfectly fits every curve of the body, emphasizing all the
          charms of the figure. This helps our models to show off their full
          beauty. For different people, the same object can be a kink for
          various reasons. Some people are crazy about leather items because of
          their texture, while others might be attracted to the smell. And some
          just admire the way latex looks on the body.
          <br />
          Sometimes varieties of fetish are combined. For example, latex is
          often used and implied when talking about BDSM aesthetics. BDSM
          services in Palma are a special type of entertainment that has been
          in demand for many years.
        </p>

        <h1 className="text-pink-500 text-xl font-bold">
          Types of Fetish Services for Male Submissives
        </h1>
        <div className="border-b-4 border-pink-500 rounded-2xl w-52 mt-1"></div>
        <p>
          The desire to be a submissive is an individual topic. In the absence
          of psycho-emotional disorders, the desire to obey is the norm and a
          kind of whim. For some men, this is nothing more than a way to relax
          and feel like a different person.
          <br />
          This especially applies to those who live the opposite life:
          directors, bosses, and all those who are used to giving orders
          themselves. Therefore, we understand perfectly well that such men want
          to be weak and vulnerable at least for a while. Such men want to feel
          the strength of a woman letting her be in charge. Especially for such
          purposes, our agency has created all the conditions that allow you to
          feel all the power of women. And our experienced female dominance
          escorts will help you to accomplish all this.
          <br />
          The devices used by our models are made of high-quality materials so
          as not to lose their aesthetic appearance and not cause harm to your
          body. The main thing is that they are easy to hold and control the
          force when used.
          <br />
          These devices are:
          <br />
          a paddle – a wooden plate with a thick leather handle;
          <br />
          a stack – a flexible leather cane braided with a clapper at the end;
          <br />
          a flogger – a whip with many strips of soft leather;
          <br />
          bracelets and greaves – leather bracelets for arms and legs with
          carabiners;
          <br />
          bonding devices – ropes or belts, etc.
          <br />
          If you are sure this type of service is right for you, then it’s time
          to determine your level of subordination. It is also important to know
          your limits and boundaries that you cannot cross, either mentally or
          physically. Be as honest with yourself as possible, and create a
          visual picture in your head, this will help you to understand yourself
          better. The rest will be made by our fetish escorts.
          <br />
          <br />
        </p>

        <h1 className="text-pink-500 text-xl font-bold">
          What Do You Do If You're a Rookie?
        </h1>
        <div className="border-b-4 border-pink-500 rounded-2xl w-52 mt-1"></div>
        <p>
          Do you even know what your nature is capable of? To understand exactly
          what you can agree to be submissive, you need to start practicing.
          Certainly, the first experience should not include hard games with
          floggers, anal fisting, and hanging from the ceiling.
          <br />
          Start with something simple. In our catalog, we have several services
          that are suitable for rookies in BDSM. For example, we can provide you
          with an escort who will not use anything special besides her relevant
          look and a concrete manner of communication. If you like it and
          understand you want more, you can move on to something serious.
          <br />
          If this is your first submissive experience, just share your wishes
          and vision with our managers. We’ll do our best to choose the model
          that can help you to open up and be yourself. We also guarantee
          complete safety and control over the situation.
          <br />
          Our models never break agreements and will not do anything that is not
          allowed or has not been discussed. Femdoms of our agency will do
          everything the way you want but at the same time, your desires are
          nothing to them, since they will masterfully demonstrate to you who is
          a boss!
        </p>
        <h1 className="text-pink-500 text-xl font-bold">
          Booking Fetish Services
        </h1>
        <div className="border-b-4 border-pink-500 rounded-2xl w-52 mt-1"></div>
        <p>
          Exploring your sexuality level is important and necessary. Kink
          experiences in a safe environment will help you to feel comfortable in
          a new role. And remember that fetishism is not a disease, but a hobby
          that causes sexual desire. It is one of the many options for
          interaction between people, which, with the right approach, can become
          a way of life, entertainment, or a way to diversify your intimate
          life. If you want to expand your sexual horizons and make it more
          exciting and exciting, then feel free to contact us. Hurry up to get
          acquainted with our exclusive escorts who will open the doors for you
          to a world of completely new sensations!
        </p>
      </div>
    </>
  );
}

export default Fetish;
