import React from 'react'
import styled from 'styled-components'

const TodoWrapper = styled.div`
padding-left:1rem;


& li{
    padding:1.3rem;
    border-bottom:1px solid gray}`


class Todo extends React.Component{
   

    onChange = e =>{
        this.props.completed(this.props.task.id)
        //console.log(e.target)
    }

    render(){
        return(
            <TodoWrapper onClick={this.onChange} id={this.props.task.id} className={this.props.task.completed === true? 'completed' : ''} >
                <li>{this.props.task.task}</li>
                

            </TodoWrapper>
        )
    }
}

export default Todo