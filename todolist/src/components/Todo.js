import { useState } from "react"
import TodoListTask from "./TodoList"

function TaskList()
{
    const [todo,settodo]=useState("")
    const [todoList,settodoList]=useState([])
   const  handleChangetodo=(event)=>
   {
    settodo(event.target.value)
   }
   const  task=(event)=>
    {  event.preventDefault();
        let templist=todoList;
        templist.push(todo);
        settodoList(templist);
        console.log(todoList);
        settodo("")
    }

return(
    <div>
        <form onSubmit={task}> 
            <input onChange={handleChangetodo} type={todo}></input>
            <button type="submit">Add</button>
        </form>
        {todoList.map((item,index)=>
        <TodoListTask name={item} key={index}></TodoListTask>
        )}
      
    </div>
)
}
export default TaskList