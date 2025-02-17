// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";

class TodoList extends React.Component {
    
       render(){
           return (
           <ul>
               {this.props.toDos.map((item, id) =>{
                  return <Todo item={item} key={id} />
               })}
           </ul>
               
           )
       }
}

export default TodoList;