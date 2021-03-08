import React from 'react';
import TodoList from './components/TodoList'
//import Todo from './components/Todo'
import TodoForm from './components/TodoForm'
import './components/Todo.css'
import styled from 'styled-components'


const AppWrapper = styled.div`
display:grid;
grid-template-columns:25% 75%;
gap:25px;
grid-template-rows:100%;`


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
 
  constructor(){
    super();
    this.state={
        todo:[]
    }
  }

  completeTask = (clickedId) => {
     this.setState({
       todo: this.state.todo.map(item => {
         return (item.id === clickedId ? {...item, completed: !item.completed }: {...item})
       })
     })
  }


  addTodo = (errand)=>{

    const newTodo = {
      task: errand,
      id: new Date(),
      completed: false,
    }


    this.setState({
      todo: [...this.state.todo, newTodo]
    })
    //console.log(this.state.todo)

  }

  clear = () => {
    this.setState({todo:this.state.todo.filter(item => item.completed===false)})
  }


  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <AppWrapper>
        <TodoForm submit={this.addTodo} clear={this.clear}/>
        <TodoList list={this.state.todo} completed={this.completeTask}/>
        </AppWrapper>
      </div>
    );
  }
}

export default App;
