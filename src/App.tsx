import React from 'react';
import './App.css';
import {TaskType, Todolist} from "./Todolist";

function App() {

    let tasks1: TaskType[] = [
        {id: 1, title: 'CSS', isDone: true},
        {id: 2, title: 'JS', isDone: true},
        {id: 3, title: 'React', isDone: false},
    ]

    let tasks2: TaskType[] = [
        {id: 1, title: 'Bread', isDone: true},
        {id: 2, title: 'Milk', isDone: true},
        {id: 3, title: 'Beer', isDone: false},
    ]

    return (
        <div className="App">
            <Todolist title={'What to learn'} tasks={tasks1}/>
            <Todolist title={'What to by'} tasks={tasks2}/>
        </div>
    );
}

export default App;
