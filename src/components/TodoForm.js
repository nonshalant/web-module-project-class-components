import React from "react";

class TodoForm extends React.Component{
    constructor(){
        super();
        this.state = {
            input: '',
        }
    }

    changeText = (e) =>{
        e.preventDefault();
        this.props.changeText(this.state.input)
    }

    handleChange = (e)=>{
        this.setState({
            ...this.state,
            input: e.target.value,
        });
    }


    render(){
        return(
            <form>
                <input type='text' placeholder="...todo" onChange={this.handleChange}></input>
                <button onClick={this.changeText}>Add ToDo</button>
                
            </form>
        )
    }
}

export default TodoForm;