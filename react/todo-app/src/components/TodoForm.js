import { useState } from 'react';

export default function TodoForm({add}) {

    const [title, setTitle] = useState('')    

    const submit = (e) => {
        e.preventDefault()
        add(title)
        setTitle('')
    }

    return (
        <form onSubmit={submit}>
            <input type='text' placeholder='title' value={title} onChange={(e)=> setTitle(e.target.value)}></input>
            <button type='submit'>add</button>
        </form>
    )
}