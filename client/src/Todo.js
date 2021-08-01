import React from 'react';

export default function Todo(props){
    return (
        <li>
            <div>
            <label htmlFor = {props.id}>{props.name}</label>
            <button>Edit</button>
            <button
                type="button"
                onClick = {() => props.deleteTask(props.id)}
            >
                Delete</button>
            </div>
        </li>
        
    )
}
