import React, {  useEffect ,useRef } from "react";
import '../../App.scss';
import hoverEffect from 'hover-effect';

import {handleUpcomingConf} from '../../components/navigation/animations/animations'

import disolve from '../../assets/4.png'
import turkey from '../../assets/turkey.jpg';
import turkey_2 from '../../assets/turkey_2.jpg';
import PDF from '../../assets/ACECS-2020.pdf';





const Home = () => {

  let photo = useRef(null);
  let para = useRef(null);
  let title = useRef(null)
  let title_2 = useRef(null)
  

  useEffect(() => {
  
    new hoverEffect({
      parent: photo,
      intensity: 0.5,
      image1: turkey ,
      image2: turkey_2,
      displacementImage: disolve
    });
      handleUpcomingConf(para , photo   ,title ,title_2)
    
  }, [])

    return (
      <div className="background">
         <div className="hover-container" ref={el => photo=el}></div>
         <div className="hero-title">  <h1 ref={el => title =el} ><span>UP COMING</span></h1> <br/> 
         <h1 ref={el => title_2 =el}>20 June 2020 / Turkey-Yilzid </h1>
          </div>
         <div className="hero-para" ref={el => para =el}> 
             <p>
             7th International Conference on          Automation, Control Engineering &         Computer Science (ACECS-2020)
             </p>
         </div>
        
         <div className="hero-button"><p><a href={PDF} target="_target">More</a> </p></div>
         
         <div className="contact-info">
                Email: acecs@conf-event.com <br/>
                Turkey : (+216) 73 242 813
        </div>
          </div>
    )
      
    
}

export default Home;
