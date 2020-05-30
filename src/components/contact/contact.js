import React , {useState } from 'react';
import axios from '../../axios'
import { Redirect } from 'react-router-dom';



const Contact = () => {

    const [FirstName , setFirstName] = useState(null)
    const [LastName , setLastName] = useState(null)
    const [Email , setEmail] = useState(null)
    const [Text , setText] = useState(null)
    const [redirect , setRedirect] = useState(false)
    const [error , setError] = useState('')
    const submitHandler =e=>{
      e.preventDefault();
      const data={
        FirstName : FirstName,
         lastName : LastName,
         Email : Email,
         Text : Text
      }
      axios.post('/feedback.json' , data )
      .then(res=>{
        console.log(res)
        setRedirect(true)
      })
      .catch(err=>{
         setError(error)
      })
        
    }
    let redirectPath = null

    if (redirect) {
       redirectPath = <Redirect to="/userspace" />
    }

    return (
        <div className="wrapperForm">
        <div className="form-wrapper">
        {redirectPath}
          <h1>GET IN TOUCH  </h1>
          <form  noValidate>
            <div className="firstName">
              <label htmlFor="firstName">First Name</label>
              <input
             
                placeholder="First Name"
                type="text"
                name="firstName"
                onChange={e=>setFirstName(e.target.value)}
                noValidate
              />
             
            </div>
            <div className="lastName">
              <label htmlFor="lastName">Last Name</label>
              <input
                placeholder="Last Name"
                type="text"
                name="lastName"
                onChange={e=>setLastName(e.target.value)}
                noValidate
              />
              
            </div>
            <div className="email">
              <label htmlFor="email">Email</label>
              <input
           
                placeholder="Email"
                type="email"
                name="email"
                onChange={e=>setEmail(e.target.value)}
                noValidate
                
              />
              
            </div>
            <div className="password">
              <label htmlFor="password">Express Your Self</label>
              <textarea

                placeholder="Write..."
                type="textarea"
                name="password"
                onChange={e=>setText(e.target.value)}
                noValidate
             
              />
              
            </div>
            <div className="createAccount">
              <button type="submit" onClick={submitHandler}>Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
}

export default Contact;
