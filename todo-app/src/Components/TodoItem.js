import React from 'react'
export default function TodoItem({title, content, id, deleteTodo}) {
    const handleClick = (event) => deleteTodo(id)
    return (
        <li className='todo-item'>
            <h2>{title}</h2>
            <h3>{content}</h3>
            <button onClick={handleClick} className='delete-button'>Delete</button>
        </li>
    )
}