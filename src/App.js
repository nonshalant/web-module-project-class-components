import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor(){
    super();
    this.state = {
      toDos : [
        {
        task: 'Organize Garage',
        id: 1528817077286,
        completed: false
      },
      {
        task: 'Bake Cookies',
        id: 1528817084358,
        completed: true
      },
    ]
    }
  }
    
  
  handleClear = () =>{
    this.setState({
      ...this.state,
      todos : this.state.toDos.filter(item => {
        return item.completed === false
      })
    }
    )
  }

  changeText = (task) =>{
    const newTodo = {
      task: task,
      id: Date.now(),
      completed: false
    };

    this.setState({
      ...this.state,
      toDos: [...this.state.toDos, newTodo]
    })
  }
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList toDos = {this.state.toDos} id = {this.state.id}/>
        <TodoForm changeText={this.changeText}/>
        <button onClick={this.handleClear}>Clear ToDo</button>
      </div>
    );
  }
}

export default App;
