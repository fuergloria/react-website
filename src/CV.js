import './cv.css';
import React, {useState, useRef, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import {ITSKILLS, LANGUAGES, SOFTSKILLS, EDUCATION, WORKEXPERIENCE} from './Data.js';


const Profile = () => {
  return(
    <div className='container px-4 w-75'>
      <ProfileOverview/>
      <AboutMe/>
    </div>
  )
}

const ProfileOverview = () => {
  return(
    <div className="profile-overview row d-flex justify-content-center">
    <ProfilePic/>
    <ProfileDescription/>
    </div>
  )
}

const ProfilePic=()=>{
  return(
    <div className="d-flex align-items-center col-sm-4">
      <img className="profile-pic mx-auto align-center" src="/profilepic.jpg"/>
    </div>   
  )
}

const ProfileDescription=()=>{
  return(
    <div className="col d-flex align-items-center justify-content-center">
      <div>
      <h4 className='text-center color-custom'>Kurzprofil</h4>
      <BulletPoints/>
      </div>
    </div>
  )
}

const BulletPoints = () => {

  const profiledescriptiondata = [
    {id:0, header: "Fokus:", info:"Frontend-Entwicklung mit soliden Kenntnissen in HTML, CSS, JavaScript und Python(Flask)"},
    {id:1, header: "Technologische Flexibiliät:", info:"Schnelle Einarbeitung in neue Programmiersprachen und Tools (z. B. Java, Go, Haskell) "},
    {id:2, header: "Analytisches Denken: ", info:"Fundiertes Wissen durch Studium der TUM-BWL und praktische Erfahrungen "},
    {id:3, header: "Projekterfahrung: ", info:"Entwicklung von Webanwendungen und Digitalisierung interner Geschäftsprozesse"},
    {id:4, header: "Kombination von Technik und Kreativität:", info:"Fähigkeit, funktionale und ästhetische Lösungen zu schaffen"}
  ];

  return(
    <ul>
      {profiledescriptiondata.map((item) => (
        <li key={item.id}>
          <strong>{item.header}</strong>
          <p>{item.info}</p>
        </li>
      ))}
    </ul>

  );
}

const AboutMe = () => {
  return(
    <div className='row' style={{textAlign: "justify", textAlignLast: "center"}}>
      <h4 className='color-custom'>Wie es beruflich weiter gehen soll</h4>
      <br/>
      <p >
        Mein beruflicher Fokus liegt auf der Softwareentwicklung, insbesondere im Frontend-Bereich.
        Während ich noch dabei bin, meine praktischen Erfahrungen weiter auszubauen,
        habe ich durch mein Studium an der TUM ein solides Fundament in den Anforderungen der Softwareentwicklung
        gelegt.
        Ich bin in der Lage, mich selbstständig in neue Programmiersprachen und Technologien einzuarbeiten
        – was sich auch durch die Entwicklung dieser Website zeigt.
        <br/>
        Vielleicht fällt Ihnen in meinem Lebenslauf mein begonnenes Biologie-Studium auf.
        Damals wollte ich meine Begeisterung für die Natur in meiner beruflichen Laufbahn erkunden.
        Doch im Laufe der Zeit habe ich erkannt, dass meine Stärken und Interessen stärker im Bereich der
        Softwareentwicklung liegen,
        wo ich meine analytischen und kreativen Fähigkeiten optimal einbringen kann.</p>
    </div>
  );
}


const Header = ({text}) => {

  return(
    <>
    <hr/>
    <h4 className='text-center color-custom'>{text}</h4>
    <hr/>
    </>
    
  )
}


const Skills = () => {

  return (
    <>
    <Header text="Kenntnisse und Kompetenzen"/>
    <SkillSet skillset={ITSKILLS} name="Meine Software-Kenntnisse"/>
    <SkillSet skillset={LANGUAGES} name="Meine Sprachkenntnisse"/>
    <SkillSet skillset={SOFTSKILLS} name="Meine Kompetenzen"/>
    </>
  )
  
}

const SkillSet = ({skillset, name}) => {

  //Group skills into pairs
  const skillRows = skillset.reduce((rows, skill, index) =>{
    if (index % 2 === 0){
      rows.push([skill]);
    }
    else{
      rows[rows.length-1].push(skill);
    }
    return rows;
  } , []
  );

  return (
    <div className='container mb-4'>
      <h6 className='text-center'><b>{name}</b></h6>
      {skillRows.map((rowSkills, rowIndex) => (
        <div className='row mb-2' key={rowIndex}>
          {rowSkills.map((skill, index) => (
            <SkillItem key={index} {...skill}/>
          ))}
        </div>
      ))}
    </div>
  );
}


const SkillRow = ({skills}) => {
  return(
  
  <div className='row mb-2'>
    {skills.map((skill, index)=> (
      <SkillItem key={index} {...skill}/>
    ))}
  </div>)
  
}


const SkillItem = ({name, percent}) => {

  const[isVisible, setIsVisible] = useState(false);
  const progressRef = useRef(null);

  useEffect(()=> {
    const observer = new IntersectionObserver(

      ([entry]) => {
        if (entry.isIntersecting){
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {threshold: 0.1} //Trigger when 10% of element is visible
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


  const skilldefs = {
    role: "progressbar",
    "aria-label": "20px high",
    "aria-valuemin": 0,
    "aria-valuenow": parseInt(percent),
    "aria-valuemax": 100
  };
 
  return(  
      <>
      <div className='col-2 word-break '>{name}</div>
      <div className='progress col-3 p-0 align-self-center' ref={progressRef}>
        <div className='progress-bar' {...skilldefs} style={{width : isVisible ? percent : 0 , height: "20px", transition: 'width 1s ease-in-out'}}></div>        
      </div>
      <div className='col-1'><span>{percent}</span></div>
      </>
    )
}


const TimelineSection = () => {

  return (
    <>
      <Header text="Ausbildung"/>
      <Timeline input={EDUCATION}/>
      <Header text="Berufserfahrungen"/>
      <Timeline input={WORKEXPERIENCE}/>
    </>
  )
}

//{date: "09/2024 - 11/2024", institution: "Harvard University", role: "Kurs CS50: Introduction to Computer Science", info:""}

const Timeline = ({input}) => {

     return(
    <div className='position-relative timeline-container'>
      <div className='position-absolute  timeline-line' ></div>
      {input.map((item, index)=>  (
      <TimelineItem key={index} item={item}/>))}
    </div>   
    
  )
}

const TimelineItem = ({index, item}) => {

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

  return(
    <div className={`timeline-item container ${item.side}`}  key={index} ref={progressRef} style={{visibility: isVisible ? "visible" : "hidden", 
      transition: 'visibility 2s ease-in-out'}}>

      <div className='timeline-dot'></div>
      {Array.isArray(item.date) ? (
        <>
        {item.date.map((d, i) => <h6 key={i}>{d}</h6>)}
        </>
      ) : <h6 className='fw-semibold'>{item.date}</h6>
      }

      <h5 className='fw-semibold'>{item.institution}</h5>
      <h6 className='fw-semibold'>{item.role}</h6>

      {Array.isArray(item.info) && item.info.length > 0 ? (
        <ul className='list-unstyled'>
          {item.info.map((detail, detailIndex) => (
            <li key={detailIndex}>
              {/* If detail is an array, render nested list */}
              {Array.isArray(detail) ? (
                <ul className='list-unstyled'> 
                  {detail.map((detail2, detail2Index) => (
                    <li key={detail2Index}>{detail2}</li>
                  ))}
                </ul>
              ) : (
                // Otherwise, render string directly
                detail
              )}
            </li>
          ))}
        </ul>
      ) : typeof item.info === "string" ? (
        <p>{item.info}</p>
      ) : null}
      
    </div>

    
  );

}

const ContactSection = ({contactRef}) => {
  return(
    <div className='contact-section' ref={contactRef}>
      <hr className='mb-0'></hr>
      <Contact/>
      <Download />
    </div>
  )
}


const Contact = () => {
  return(
    <div className='d-flex justify-content-center my-3' >
      <div className="contact d-flex d-inline-block row m-2 p-3">
      <ContactInfo />
      <ContactForm />
    </div>
    </div>
    
  )
}

const ContactInfo = () => {
  return(
    <div className='col-5 d-flex flex-column text-center justify-content-center'>
      <h2>Kontakt</h2>
      <p>Ich freue mich über Ihr Interesse! Für weitere Informationen oder Anfragen, können Sie mich gerne telefonisch oder per E-Mail erreichen.
         Sie können auch das Kontaktformular nutzen und ich melde mich schnellstmöglich zurück.</p>
      <p><b>Telefon:</b> +49 160 90939614</p>
      <p><b>Email:</b>fuernkaes.gloria@web.de</p>
    </div>
  )
}

const ContactForm = () => {

  const [formData, setFormData] = useState({
    namefield: '',
    email: '',
    phonenumber: '',
    message: ''
  });

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
    const response = await fetch('https://formspree.io/f/mjkbvwrn', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    if(response.ok) {
      alert('Nachricht erfolgreich gesendet');

      //Reset form after successful submission
      setFormData({
        namefield: '',
        email: '',
        phonenumber: '',
        message: '' 
      });
    }
    else {
      alert('Fehler beim Senden der Nachricht');
    }

  } catch(error) {
    console.error('Fehler:', error);
    alert('Es ist ein Fehler aufgetreten.');
  }
  };



  return(
    <div className='col text-center justify-content-center'>

      <form onSubmit={handleSubmit}>

        <input className='form-control mb-3' type='text' name='namefield' aria-required="true" 
          maxLength={100} autoComplete='off' aria-label='Name' placeholder='Name' 
          value={formData.namefield} aria-invalid="true" onChange={handleChange}></input>

        <input type="email" name="email" className="form-control mb-3" id="email" required="" 
          placeholder="E-mail" pattern="^.+@.+\.[a-zA-Z]{2,63}$" maxlength={250} autocomplete="off" 
          aria-label="E-Mail-Adresse" value={formData.email} aria-invalid="true" onChange={handleChange}/>

        <input type="tel" name="phonenumber" className="form-control mb-3" id="phone" pattern="^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$"
          placeholder="Telefonnummer" maxlength={50} autocomplete="off" aria-invalid="true" aria-label="Telefon" value={formData.phonenumber} onChange={handleChange} />

        <textarea name="message" className="form-control mb-3" id="message" rows="4" required="" 
          placeholder="Ihre Nachricht" value={formData.message} aria-invalid="true" onChange={handleChange}/>

        <button type="submit" className="btn btn-submit btn-primary mb-3">Absenden</button>
      </form>
    </div>
  )
}

const Download = () => {

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = "./Lebenslauf.pdf"
    link.download = "Lebenslauf_Gloria_Fürnkäs";

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
  };


  return(
    <div className='container w-10 d-flex flex-column align-items-center'>
      <img 
        className="w-25" 
        src='/download-icon.png'
        onClick={handleDownload}
        style={{cursor:"pointer"}}
        alt="Download Lebenslauf"      
      />
      <p className='color-white'><b>Lebenslauf</b></p>
    </div>
  )
}

const CV = () => {

  const contactRef = useRef(null);

  const location = useLocation();

  React.useEffect(()=> {
    if(location.state?.scrollTo === 'contact'){
      contactRef.current?.scrollIntoView({behavior: 'smooth'});
    }
  }, [location]);

  return(
    <>
  <Profile/>
  <Skills/>
  <TimelineSection/>
  <ContactSection contactRef={contactRef} />
  </>
  )
};

export default CV;
