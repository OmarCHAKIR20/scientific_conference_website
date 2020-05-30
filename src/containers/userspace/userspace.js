import React, { useState, useEffect , useRef } from "react";
import {Link  } from 'react-router-dom'
import Conferenceslists from '../../components/conferenceslist/conferencelists'
import Spinner from '../../components/UI/Spinner'
import { } from 'react-redux'
import axios from 'axios'

const Userspace = () => {

   //  const state = useSelector(state=>state)

    let dropDown = useRef(null) 
    const [Loading , setLoading] = useState(false);
    const [Content , setContent] = useState([]);
    const [search, setSearch] = useState("");
  const [filteredContent, setFilteredContent] = useState([]);
  const [drop, setDrop] = useState(true); 
  
   // var name   = email.substring(0, email.lastIndexOf("@"));


    useEffect(()=>{
        setLoading(true);
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(res=>{
            setContent(res.data);
            setLoading(false);
        })
        .catch(err=>{
            console.log(err)
        })
    },[])

    useEffect(() => {
        setFilteredContent(
          Content.filter(co =>
            co.title.toLowerCase().includes(search.toLowerCase())
          )
        );
      }, [search, Content]);

    const dropDownHandler =()=>{
      if (drop === true) {
          dropDown.classList.add("show")
          setDrop(false)
      }else if (drop === false){
        dropDown.classList.remove("show")
        setDrop(true)
      }
           
    }

 

   
    if(Loading){
          return <Spinner />
    }
    
   
    return (
        <div>
       
        <div className="navbar">
          <div className="dropdown">
          <button className="dropbtn" onClick={dropDownHandler }> <header className="user-space " >
         <h1 className="userSpace"><span>Welcome : </span></h1>

            </header>
            <i className="fa fa-caret-down"></i>
          </button>
          <div className="dropdown-content" ref={elt => dropDown=elt} >
           
            <Link to="/Contact">Contact</Link>
         
            <Link to="#">Settings</Link>
            <Link to="/logout" >Logout</Link>
          </div>
          </div> 
        </div>
           <header className="h1-header " >
      <h1  ><span>CONFERENCES </span> LIST</h1>
            </header>
        <div className="form">
       
      <input className="TableContainer"  
        type="text"
        autoComplete="off"
        required
        onChange={e => setSearch(e.target.value)}
      />
      <label className="label-name" for="name">
      <span className="content-name">Search</span>
      </label>

        </div>

       <table className="ConferenceTable">
            <tr>
                <th>Id</th>
                <th>Conference title</th>
                <th>Start Date</th>
                <th>Location </th>
                <th>Content</th>
               
            </tr>
      {filteredContent.map((content, idx) => (
        <Conferenceslists key={idx} {...content} />
      ))}
      </table>
        </div>
    );
}


export default Userspace;

