import React, { useReducer, useState } from 'react'
import { ACTIONS } from '../reducers/actions'
import { reducer } from '../reducers/todoReducer'
import Todo from './todo/Todo'

const ParentComponent = () => {

    const [todos, dispatch] = useReducer(reducer, [])
    const [name, setName] = useState('')
    function handleSubmit(e) {
        e.preventDefault()
        dispatch({ type: ACTIONS.ADD_TODO, payload: { name } })
        setName('')
    }
    console.log(todos)
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={e => setName(e.target.value)} />
            </form>
            {todos.map(todo => {
                return <Todo key={todo.id} todo={todo} dispatch={dispatch} />
            })}
        </div>
    )
}

export default ParentComponent