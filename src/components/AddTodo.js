import React, { Component } from 'react';

class AddTodo extends React.Component {
    handleSubmit() {
        const obj = {
            content: document.querySelector(".new").value,
            completed: false
        }
        this.props.addTodo(obj);
        document.querySelector(".new").value = "";
    }
    handleKeyPress(e) {
        if(e.keyCode === 13) {
            this.handleSubmit()
        }
    }
    render() {
        return <div className="AddTodo" onKeyUp={this.handleKeyPress.bind(this)}>
            <input className="new" tyle="text"/>
            <button onClick={this.handleSubmit.bind(this)} className="btn addBtn">Add</button>
        </div>
    }
}

export default AddTodo;