import React , {useState} from 'react';
import {useSelector , useDispatch} from 'react-redux'
import * as action from '../../../store/actions/index'



const Register = ({stateProp} , props) => {

    const state = useSelector((state=> state))
    const dispatch = useDispatch()
    


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
 

      const submitHandler=e=>{
          e.preventDefault()
            dispatch(action.auth(email , password , !stateProp)) 
      }

      if (state.loading) {
           return "loading..."
      }
      let errorMessage = null

      if (state.error) {
           errorMessage = state.error.message 
      }
      


    
    return (
        <div className="form-container sign-up-container">
        {errorMessage}
        <form  >
            <h1>Create Account</h1>
            
            <span>or use your email for registration</span>
         
            <input type="email" placeholder="Email" name="email" onChange={(e)=>setEmail(e.target.value)}/>
            <input type="password" placeholder="Password" name="password" onChange={(e)=>setPassword(e.target.value)}  />    
            <button onClick={submitHandler} >Sign Up </button>
        </form>
    </div>
    );
}



export default (Register);
