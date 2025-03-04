import React, { useRef, useState } from 'react'
import "./App.css";
function App(){
  const title = useRef()
  const description = useRef()
  const[todo , setTodo]=useState([])


  function addTodo (e){
    e.preventDefault();
    console.log(title.current.value);
    console.log(description.current.value);
    
    todo.push({
      title: title.current.value ,
      description: description.current.value,
      Id : Date.now()
    })
    setTodo([...todo])
    empty();
  }


  const deleteTodo = (index)=>{
    todo.splice(index , 1 )
    setTodo([...todo])
  }
  

  const editTodo = (index)=>{
    const updatedValTi = prompt(`Enter Your New Title`)
    const updatedValDesc = prompt(`Enter Your New Description`)
    todo[index].title = updatedValTi
    todo[index].description= updatedValDesc
    setTodo([...todo])
  }
  const empty = () => { title.current.value = ""; description.current.value = ""};

  return(
    <>
    <h1>TODO APP</h1>
    <form onSubmit={addTodo}>
      <input type="text" placeholder="Tilte" ref={title} />
      <input type="text" placeholder="Description" ref={description} />
      <button>Add TODO</button>
    </form>
    <div>
    {todo.length > 0 ? todo.map((item , index)=>{
        return <div key={item.Id}>
          <h1>Title: {item.title}</h1>
          <h1>Desc: {item.description}</h1><br />
          <button onClick={()=>editTodo(index)}>edit</button>
          <button onClick={()=>deleteTodo(index)}>Delete</button>
        </div>
      }): <h1>No todos Found.....</h1>}
      </div>
      </>
  )
  
}

export default App