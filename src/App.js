import React from 'react';
import AddTodo from './components/AddTodo';
import './style.css';

let id = 0;

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        }
    }
    addTodo(todo) {
        if (todo.content !== "") {
            id += 1;
            todo.id = id;
            let todos = [...this.state.todos, todo];
            this.setState({
                todos
            })
        }
        setTimeout(() => { console.log(this.state.todos) }, 1000)
    }
    deleteTodo(e) {
        const todos = this.state.todos.filter(todo => {
            return todo.id !== parseInt(e.currentTarget.getAttribute("data-id"))
        })
        this.setState({
            todos
        })
    }
    completeHandler(e) {
        let index = parseInt(e.currentTarget.getAttribute("data-index"));
        let todo = this.state.todos[index];
        todo.completed = !todo.completed;
        this.setState({
            todos: this.state.todos
        })
        document.querySelectorAll(".todoContent")[index].classList.toggle("completed")
    }
    render() {
        const todos = this.state.todos;
        const todoList = todos.map((todo, index) => {
            return <div className="todoItem" key={todo.id}>
                <input className="checkbox" type="checkbox" checked={todo.completed} onChange={this.completeHandler.bind(this)} data-index={index} />
                <div className="todoContent">{todo.content}</div>
                <span data-id={todo.id} onClick={this.deleteTodo.bind(this)} style={{color:"#fff"}}>x</span>
            </div>
        })
        return <div className="container">
            <h1 style={{ color: "white" }}>To Do List</h1>
            <AddTodo addTodo={this.addTodo.bind(this)} />
            <div className="toDoList">{todoList}</div>
        </div>
    }
}

export default App;