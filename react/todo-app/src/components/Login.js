import { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

export default function Login() {

    

    let navigate = useNavigate();
    const [user, setUser] = useState({ email: '', password: '' })

    const signIn = (e) => {
        e.preventDefault()
        console.log(user)
        axios.post('http://localhost:3000/login', {
            ...user
        }).then((data) => {
            navigate("/")
            localStorage.setItem("user", JSON.stringify(data.data.data))
        })
    }

    return (
        <form onSubmit={signIn}>
            <input type="email" placeholder="masukkan email" onChange={(e) => setUser({ ...user, email: e.target.value })}></input>
            <input type="password" placeholder="masukkan password" onChange={(e) => setUser({ ...user, password: e.target.value })}></input>
            <button type="submit">Sign In</button>
        </form>
    )
}