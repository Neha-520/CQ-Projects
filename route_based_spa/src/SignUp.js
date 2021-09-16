import React from 'react'
import { Link } from "react-router-dom"
export default function SignUp() {
    return (
        <div className="signup">
            <h1>SignUp</h1>
            <form >
                <label><h3>Username</h3></label>
                <input type="text" placeholder="Enter Username"></input>
                <label><h3>Email</h3></label>
                <input type="email" placeholder="Enter your email"></input>
                <label><h3>Password</h3></label>
                <input type="password" placeholder="Enter Password"></input>
                <button>SignUp</button>
                <Link to="/signin">SignIn</Link>
            </form>
        </div>
    )
}
