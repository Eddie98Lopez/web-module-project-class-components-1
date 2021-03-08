import React from 'react'
import styled from 'styled-components'

const FormWrapper = styled.form`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;

& input{
    width:90%;
    padding:1rem;
    border-radius:20px;
    outline:none;
    border: 2px solid gray;
    margin:.5rem

}

& button{
    width:100%;
    padding:1rem;
    border-radius:25px;
    font-size: 1rem;
    margin:.5rem;
    outline:none;
    border:none;
    background: rgb(191, 191, 191);
    color:black;
    font-weight:600;
    cursor:pointer;
    &:hover {
        background:gray;
        color:white;
        transition: .2s ease-in;
    }
}`

class TodoForm extends React.Component{

    constructor(){
        super();
        this.state={
            task:''
        }
    }

    handleChange = e =>{
        const {name,value} = e.target
        this.setState({...this.state, [name]:value})
    }

    onSubmit = e => {
        e.preventDefault();
        this.props.submit(this.state.task)
        this.setState({task:''})
    }

    clear = e => {
        e.preventDefault();
        this.props.clear()

    }



    render(){
        return(
            <div>
                <FormWrapper onSubmit={this.onSubmit}>
                    <input 
                    name='task'
                    value={this.state.task}
                    type='text'
                    placeholder='...add a task'
                    onChange={this.handleChange}/>

                    <button onClick={this.onSubmit}>Add Task</button>
                    <button onClick={this.clear}>Clear Completed</button>
                </FormWrapper>

            </div>
        )
    }
}

export default TodoForm