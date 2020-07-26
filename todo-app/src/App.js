import React from 'react';
import './App.css';
import TodoContainer from './Components/TodoContainer'
import TodoForm from './Components/TodoForm'
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

  addTodo = (newTodo) => {
    this.setState({
      todos: [...this.state.todos, newTodo]
    })

    fetch(todosURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTodo)
    })
  }

  deleteTodo =(id) => {

    let filtered = this.state.todos.filter(todo => todo.id != id)
    this.setState({
      todos: filtered
    })

    fetch(todosURL + '/' + id, {method: 'DELETE'} )

  }

  render(){
    return (
      <div className="App">
        <h1>J-Task</h1>
        <TodoForm addTodo={this.addTodo} />
        <TodoContainer deleteTodo={this.deleteTodo} todos={this.state.todos} />
      </div>
    )
  }
}

export default App;
