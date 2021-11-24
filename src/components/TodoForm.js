import React, { useState } from "react"

const initInputs = { title: "", description: "", imgUrl: ""}

export default function TodoForm(props){
  const [ inputs, setInputs ] = useState(initInputs)
  const { addTodo } = props

  function handleChange(e){
    const { name, value } = e.target
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value
    }))
  }
  function handleSubmit(e){
    e.preventDefault()
    addTodo(inputs)
    setUserState(initInputs)
  }
  


  return(
    <form>
      <input
        type="text"
        name=""
        value={}
        onChange={handleChange}
        placeholder="" />
      <input
        type="text"
        name=""
        value={}
        onChange={handleChange}
        placeholder="" />
      <input
        type="text"
        name=""
        value={}
        onChange={handleChange}
        placeholder="" />
      <button>Add Todo</button>
      <p style={{color: "red"}}>{ errMsg }</p>
    </form>
  )
}