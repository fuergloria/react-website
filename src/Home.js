import "./home.css";
import {MOREPICS, PICS } from "./Data";
import * as ReactBootstrap from 'react-bootstrap';
import {useEffect, useState, useRef} from 'react';
import { Link, useLocation } from "react-router-dom";

const StartView = () =>{
  return (
    <div className="start-view container-fluid">
        <Headline />
        <AboutMe />
        <SubHeadline headline="Malerei" subtext="Die folgenden Bilder wurden alle von mir mit Acrylfarben angefertigt."/>
    </div>
  )
}

const Headline = () => {
  return (
    <div className="container-fluid headline">
      <h1>Hallo, ich bin Gloria Fürnkäs</h1>
      <h2>software engineering - business - art</h2>
    </div>
  );
}

const AboutMe = () => {
  return(
    <div className="row aboutme">
      <Header />
      <Description />
    </div>
  )
}

const Header = () => {
  return(
    <div className="col-4 header">
      <h2>Über mich</h2>
    </div>
  )
}

const Description = () => {
  return (
    <div className="col description p-4" >
      <p className="w-75">
        Mein Studium im Bereich Technik und Management hat meine Leidenschaft für das Programmieren entfacht.
        Neben meiner Begeisterung für Technik finde ich großen Gefallen daran, zu malen und Dinge zu gestalten. 
        Dieser kreative Ausgleich hilft mir, stets neue Perspektiven in meine Arbeit einzubringen und innovativ zu bleiben.
        Diese Website ist ein Spiegelbild meiner beiden Welten – sie zeigt sowohl meine technischen Fähigkeiten als auch meine künstlerische Seite.
        In meiner Freizeit schöpfe ich darüber hinaus neue Energie beim Yoga, durch Meditation oder beim Aufenthalt in der Natur.
      </p>
    </div>
  )
}

const SubHeadline = ({headline, subtext}) => {


  return(
    <div className="container-fluid text-center">
      <h2>{headline}</h2>
      <p>{subtext}</p>
      {headline === "Malerei" && 
      (
      <Link to="/" state={{scrollTo: 'picture'}}>
      <svg
          xmlns="http://www.w3.org/2000/svg"
          width={16}
          height={16}
          fill="currentColor"
          className="bi bi-chevron-compact-down icon-down"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67"
          />
        </svg>
        </Link>
      
      )}
    </div>
  )
}

const PictureDisplay = ({pics, pictureRef}) =>{

  let half = Math.ceil(pics.length / 2);

  return(
    <div className="d-flex justify-content-center">
      <div className="row w-75" 
      {...(pictureRef?{ref:pictureRef}:{})}>
        <div className="col-md-6">
          {pics.slice(0,half).map((pic, index) => (
            <PictureContainer key={index} pic={pic} />
          ))}
        </div>
        <div className="col-md-6">
          {pics.slice(half).map((pic, index) => (
            <PictureContainer key={index} pic={pic} />
          ))}
        </div>
      </div>
    </div>
    
  )
}

const PictureContainer = ({pic}) => {
  return (
    <>

      {pic.type === "normal" && (
        <div className="mb-3 img-container"> 
          <img
            src={process.env.PUBLIC_URL+ pic.source}
            alt={pic.alttext}
            className="img-fluid"
          />
       </div>
       
      )}
      
      {pic.type === "switch" && (
        <div className="pic-switch-container">
          <img
            src={pic.source[0]}
            alt={pic.alttext}
            className="img-fluid pic-switch"
          />
          <img
            src={pic.source[1]}
            alt={pic.alttext}
            className="img-fluid pic-switch-hover"
          />
        </div>
      )}
      
      {pic.type === "rondell" && (
        <PictureCarousel pics={pic} />
      )}
      
      {pic.type === "turned" && (
        <div className="mb-3 img-container"> 
        <img
          src={pic.source}
          alt={pic.alttext}
          className="img-fluid pic-turn"
        />
        </div>
      )}
      
      {pic.type === "basket" && (
        <Basketpong pic={pic} />
      )}
      
      {pic.type === "flower" && (
        <Flower pic={pic} />
      )}
    </>
  );
};

const PictureCarousel = ({pics}) => {

  const [index, setIndex] = useState(0);

  const sources = pics.source;


  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex % sources.length);
  }


  return(
    <ReactBootstrap.Carousel 
      activeIndex = {index}
      onSelect={handleSelect}
      className="w-100"
      interval={3000}
      slide={true}
      wrap={true}
    >
      {sources.map((s,i) => (
        <ReactBootstrap.Carousel.Item key={i}>
          <img
            className="d-block w-100"
            src={s}
            alt={pics.alttext}
          />
         {(i===0) && (
          <ReactBootstrap.Carousel.Caption>
            <h3>Klicke um zu sehen wie ich angefertigt werde</h3>
          </ReactBootstrap.Carousel.Caption>
         )
         }
         </ReactBootstrap.Carousel.Item>
      ))}
    </ReactBootstrap.Carousel>
  )
}


const Basketpong = ({pic}) => {
  

  return (
    <div className="mb-3 img-container"> 
      <img
        src={pic.source}
        alt={pic.alttext}
        className="img-fluid basketpong-pic"
      />
      <div className="net">
        <Basketball id={1} />
        <Basketball id={2} />
        <Basketball id={3} />
      </div>
    </div>
    
  )
}

const Basketball = ({id}) => {

  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    
    if(!isAnimating) {
      setIsAnimating(true);

      setTimeout(()=> {
        setIsAnimating(false);
      }, 1500);
    }

  };

  return(
    <img
    src="./basketball-clipart.png"
    alt="basketball"
    className={`basketball basketball${id} ${isAnimating ? `basketball-throw${id}` : ''}`}
    onClick = {handleClick}
  />
  )
}


const Flower = ({pic}) => {
  const [clicked, setClicked] = useState(false);

  const[isVisible, setIsVisible] = useState(false);
  const progressRef = useRef(null);

  useEffect(()=>{
    const observer = new IntersectionObserver(
      ([entry]) => {
        if(entry.isIntersecting){
          setIsVisible(true);
          observer.disconnect(); //stop observing once triggered
        }
      }, 
      {threshold: 0.9}
    );

    if(progressRef.current){
      observer.observe(progressRef.current);
    }

    return () => {
      if(progressRef.current){
        observer.unobserve(progressRef.current);
      }
    };
  }, []);

  const handleClick = () =>{
    setClicked(!clicked);
  }

  return(
    <div className='mb-3 img-container flower-container'ref={progressRef}
    > 
    <img 
        src={pic.source}
        alt={pic.alttext}
        className={`img-fluid booty ${isVisible && 'wiggle'}`}
        onClick={handleClick}
    />
    <img 
        src="./flowers-try.png"
        alt="Blume"
        className={`flower ${clicked ? 'flower-active' : '' }`}
    />
    </div>
  )
}

const Home = () => {

  const pictureRef = useRef(null);
  const location = useLocation();

  useEffect(()=> {
    if(location.state?.scrollTo === 'picture'){
      pictureRef.current?.scrollIntoView({behavior: 'smooth'});
    }
  }, [location]);

  return(
    <>
      <div className="home">
        <StartView />
        <PictureDisplay pics={PICS} pictureRef={pictureRef}/>
        
        <SubHeadline headline="weitere Kunstprojekte" subtext="Auch neben herkömmlichen Bildern, liebe ich es kreativ zu werden. Bei den folgenden Gegenständen gibt es auch hier auf der Seite etwas zu entdecken." />
        <PictureDisplay pics={MOREPICS}/>
      </div>
      

    </>
    
  )
}

export default Home;