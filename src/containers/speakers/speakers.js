

import React ,{ useEffect , useState} from 'react';
import AOS from 'aos';
import '../../../node_modules/aos/dist/aos.css'; 

import '../../App.scss'
import img from '../../assets/people.jpg'
import img_two from '../../assets/img_two.jpg'

const Speakers = () => {

  const [Loading , setLoading] = useState(false);
 
            
      useEffect(()=>{
   
        AOS.init({
        offset :150,
        duration : 1000
        });

        setLoading(false);
      },[])
      if (Loading ) {
         return <p>loading ... </p>
      }
    return (
        <div>
        <header class="main-header">
      <h1><span>OUR </span> SPEAKERS</h1>
      <p>
        Join our conference and discover new topics with one of the best speakers
      </p>
            </header>
        <div className="committes">
          
           <section className="card" >
           <img className="img2" src={img_two}  alt="image1"  />
             <div>
                 <h3>Dr. Mohamed Razali (Malaysia)</h3>
                 <p>Chairman of the Board and the Chief Executive Officer of Nusantara Technologies.</p>
             </div>
            </section>
            <section className="card" data-aos={"fade-left"}>
            <img  className="img2" src={img_two}  alt="image1"  />
             <div>
             <h3>Dr. Ahmed Rhif (Tunisia)</h3>
             <p>Chairman of the Board and the Chief Executive Officer of Nusantara Technologies.</p>
             </div>
            </section>
            <section className="card" data-aos="fade-right">
            <img  className="img2" src={img_two}  alt="image1"  />
             <div>
             <h3>Prof. Hiroko Kawamorita (Turkey)</h3>
               <p>Chairman of the Board and the Chief Executive Officer of Nusantara Technologies.</p>
             </div>
            </section>

            <section className="card" data-aos="fade-left">
            <img  className="img2" src={img_two} alt="image1"  />
             <div>
             <h3>Prof. Yoshinori Moriwaki (Japan)</h3>
               <p>Chairman of the Board and the Chief Executive Officer of Nusantara Technologies.</p>
             </div>
            </section>
           </div>
        </div>
       
    );
}

export default Speakers;
