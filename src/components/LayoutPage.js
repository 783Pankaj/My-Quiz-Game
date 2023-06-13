import React from 'react'
import { NavLink } from 'react-router-dom'

const LayoutPage = () => {
       return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a href="http://localhost:3000/">Game</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-5 mb-lg-0">
                            <li>
                                <NavLink to="/" className="pk">Home</NavLink>
                            </li>

                            <li>
                                <NavLink to="/quiz" className="pk">Quiz Game</NavLink>
                            </li>
                            <li>
                                <NavLink to="/about" className="pk">About</NavLink>
                            </li>
                            <li>
                                <NavLink to='/contact' className="pk">Contact</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/login'} className="pk" >Login</NavLink>
                            </li> 
                            <li>
                                <NavLink to={'/logout'} className="pk" >LogOut</NavLink>
                            </li> 
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default LayoutPage;
