import { useState } from "react";

let Todo=()=>{
    const[todo,setTodo]=useState("")
    const[todoList,setTodolist]=useState([])
    return(
        <div>
            <h1>todo list</h1>
            <form onSubmit={(e)=>{
             e.preventDefault()
             todoList.push(todo)
             console.log({todoList}) 
             setTodo("")                         
            }}>
                <input type="text" value={todo} onChange={(e)=>{setTodo(e.target.value)}}></input><br></br>
                <button type="submit">ADD ITEM</button>
                <p>{}</p>
            </form>
        </div>
    );
}
export default Todo;