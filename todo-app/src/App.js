import React from 'react';
import './App.css';
import TodoContainer from './Components/TodoContainer'
const todosURL = 'http://localhost:3000/todos'
class App extends React.Component {
  state = {
    todos: []
  }

  componentDidMount(){
    this.getTodos()
  }

  getTodos = () => {
    fetch(todosURL)
      .then(response => response.json())
      .then(todos => this.setState({todos}))
  }

  render(){
    return (
      <div className="App">
        <h1>J-Task</h1>
        <TodoContainer todos={this.state.todos} />
      </div>
    );
  }

}

export default App;
