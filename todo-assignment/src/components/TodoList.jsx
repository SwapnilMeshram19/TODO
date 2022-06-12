import React from "react";
import List from "./List";


const TodoList =(prop)=>{
    var listTodo=prop[0].todoList;
    return (
        <div className="todo-list">
            <h1>Todo List</h1>
            {
                listTodo.map((ele)=>
                <List {...ele} key={ele.id}/>
                )
            }
        </div>
    )
}

export default TodoList;