// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react'
import Todo from './Todo'
import styled from 'styled-components'

const ListWrapper = styled.div`
height:80vh;
width:90%;
background:rgb(219, 219, 219);
border-radius:20px;
padding: 1.5rem;
font-size:1.25rem;
font-family:sans-serif;
font-weight:600;
color:rgb(102,102,102);
`

class TodoList extends React.Component{

   

    render(){
        return(
            <ListWrapper>
                {this.props.list.map( task => <Todo key={task.id} task={task} completed={this.props.completed}/>)}
            </ListWrapper>
        )
    }
}

export default TodoList
