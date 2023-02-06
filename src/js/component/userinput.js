import React,{useState} from 'react'

export default function Userinput() {
    const [todoItem, setTodoItem]= useState("default")
  return (
    <div>
        <input 
        onChange={(e)=>{
        e.preventDefault()
            setTodoItem(e.target.value)
        console.log(e.target.value,"onChange e")}}

        type="text"/>
        <div>
            <p>user to do list : {todoItem}</p>
        </div>
    </div>
  )
}
