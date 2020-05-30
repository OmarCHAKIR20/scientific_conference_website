import React , {useState} from 'react';
import {useSelector , useDispatch} from 'react-redux'
import * as action from '../../../store/actions/index'
import { Redirect } from 'react-router-dom';



const Login = ({stateProp}, props) => {

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

  let authRedirect = null
  if (state.token != null) {
   authRedirect =  <Redirect  to="/userspace"  />
  }
  

    return (
        <div className="form-container sign-in-container">
        {errorMessage}
        {authRedirect}
        <form >
          <h1>Sign in</h1>
          <span>or use your account</span>
          <input type="email" placeholder="Email" name="email" onChange={(e)=>(setEmail(e.target.value))} />
          <input type="password" placeholder="Password" name="password" onChange={(e)=>(setPassword(e.target.value))} />
          <button>Forgot your password?</button>
          <button onClick={submitHandler}    ref={props.containerRef} >Sign in </button>
        </form>
      </div>
    );

}



export default (Login);
