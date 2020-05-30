import * as actionType from './actionType'
import axios from 'axios';




export const authStart=()=>{
    return{
          type : actionType.AUTH_START
    }
}

export const authSuccess=(token , userId)=>{
    return{
        type : actionType.AUTH_SUCCESS,
        idToken : token,
        userId : userId
    }
}

export const authFail=(error)=>{
    return{
        type : actionType.AUTH_FAIL,
        error : error
    }
}
export const logout=()=>{
     localStorage.removeItem('token')
     localStorage.removeItem('expirationDate')
     localStorage.removeItem('userId')
    return{
        type : actionType.AUTH_LOGOUT
    }
}

export const authTimeOut = (expirationTime)=>{
    return dispatch=>{
        console.log(expirationTime)
       setTimeout(()=>{
         dispatch(logout())
       },expirationTime * 1000)
    }
}

export const auth=(email , password , isSignup)=>{
    return dispatch=>{
        console.log(email +  password +  isSignup)
          dispatch(authStart())
          const authData = {
              email : email , 
              password : password , 
              returnSecureToken : true
          }
          console.log(authData)
           let url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBN6Gm7QRXiDzkErOI86uJaM5lYurlWjgg"
          if (!isSignup) {
             url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBN6Gm7QRXiDzkErOI86uJaM5lYurlWjgg"
          }
             axios.post(url , authData)
          .then(res=>{
              console.log(res)
              const expirationDate = new Date(new Date().getTime() + res.data.expiresIn * 1000)
              localStorage.setItem('token',res.data.idToken)
              localStorage.setItem('expirationDate', expirationDate )
              localStorage.setItem('userId', res.data.localId )
              dispatch(authSuccess(res.data.idToken ,  res.data.localId))
              dispatch(authTimeOut(res.data.expiresIn))
          }).catch(error=>{
              console.log(error )
                 //dispatch(authFail(error.response.data.error))
          })
    }
}

export const setAuthRedirectPath=(path)=>{
   return{
       type : actionType.SET_AUTH_REDIRECT_PATH,
       path : path
   }
}


export const authCheckStatus=()=>{
    return dispatch=>{
     const token = localStorage.getItem('token')
     if (!token) {
         dispatch(logout())
     }else{
         const expirationDate = new Date (localStorage.getItem('expirationDate'))
        if (expirationDate <= new Date()) {
            dispatch(logout())
        }else{
            const userId = localStorage.getItem('userId')
             dispatch(authSuccess(token , userId))
             dispatch(authTimeOut((expirationDate.getTime() - new Date().getTime() )/1000))
        }
        
     }
    }
}