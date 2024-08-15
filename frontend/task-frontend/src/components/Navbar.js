import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <header>
            <div className = "container">
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap" rel="stylesheet"></link>
                <Link to="/">
                    <h1>Task Manager</h1>
                </Link>
            </div>
        </header>
    )
}

export default Navbar;