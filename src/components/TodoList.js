// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";

class TodoList extends React.Component {
    
       render(){
           return (
               <li>{this.state.toDos.map(item =>{
                   console.log(item)
               })}</li>
           )
       }
}

export default TodoList;