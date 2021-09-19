import React from 'react'
import { Link } from "react-router-dom"
export default function Signin() {
    return (
        <div className="signin">
            <h1>SignIn</h1>
            <form >
                <label><h3>Username</h3></label>
                <input type="text" placeholder="Enter Username"></input>
                <label><h3>Password</h3></label>
                <input type="password" placeholder="Enter Password"></input>
                <button style={{ alignSelf: "center" }}>SignIn</button>
                <Link to="/signup">SignUp</Link>
            </form>
        </div>
    )
}
