import React, { useState, useContext } from "react"
import AuthForm from "./AuthForm.js" 
import { UserContext } from "./context/UserProvider.js"

const initInputs = { username: "", password: ""} 

export default function Auth(){
  const [ inputs, setInputs ] = useState(initInputs)
  const [ toggle, setToggle ] = useState(false)

  const {} = useContext(UserContext)

  function handleChange(e){
    const { name, value } = e.target
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value
    }))
  }
  function handleSignup(e){
    e.preventDefault()
    //signup function from context
  }
  function handleLogin(e){
    e.preventDefault()
    //login function from context
  }
  function toggleForm(){
    setToggle(prev => !prev)
    //resetAuthErr function from context
  }

  return(
    <div>
      {!toggle ?
        <>
          <AuthForm
            handleChange={}
            handleSubmit={}
            inputs={}
            btnText=""
            errMsg={} />
          <p onClick={}>Already a member?</p>
        </>
        :
        <>
          <AuthForm
            handleChange={}
            handleSubmit={}
            inputs={}
            btnText=""
            errMsg={} />
          <p onClick={}>Not a member?</p>
        </>
      }
    </div>
  )
}