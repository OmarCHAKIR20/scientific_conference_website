import React , {useEffect} from 'react'
import { useDispatch } from 'react-redux'
import {Redirect} from 'react-router-dom'

import * as action from '../../store/actions/index'

 const Logout =()=> {


    const dispatch = useDispatch()
     let redirectPPath =  <Redirect to="/" />

   useEffect(() => {
           const redirectPath=()=>{
              dispatch(action.logout())
           }
           redirectPath()
   }, [])
  

        return(
           <div>
                     {redirectPPath}
                   
           </div>
        )
        
       
    
}





export default (Logout)

