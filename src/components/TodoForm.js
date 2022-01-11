import React from "react";

class TodoForm extends React.Component{
    render(){
        return(
            <form>
                <input type='text' placeholder="...todo"></input>
                <button onClick={this.addToDo}>Add ToDo</button>
                <button>Clear ToDo</button>
            </form>
        )
    }
}

export default TodoForm;