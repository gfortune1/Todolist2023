import React,{useState} from 'react'

export default function Userinput() {
    const [todoItem, setTodoItem]= useState("")
  return (
    <div><input onChange={(e)=>{
        e.preventDefault()
        console.log(e.target.value,"onChange e")}}type="text"/></div>
  )
}
