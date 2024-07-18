import React from 'react'
import '../navbar/Navbar.css';
import {RiContactsBook2Fill} from "react-icons/ri"
import {link} from "react-router-dom";

const Navbar = () => {
  return (
    <div>
    <nav className="navbar navbar-expand-lg">
      <div className="container">
       <link  className="navbar-brand" to="/">
          
           <RiContactsBook2Fill />  ToDo
          
           </link> 
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item ">
               <link  className="nav-link active" aria-current="page" to="/">
                Home
               </link> 
            </li>
            <li className="nav-item mx-2">
               <link  className="nav-link active" aria-current="page" to="/about">
                About us
               </link> 
            </li>
            <li className="nav-item mx-2">
               <link  className="nav-link active" aria-current="page" to="/todo">
                Todo
               </link> 
            </li>
            <li className="nav-item mx-2">
               <link  className="nav-link active btn-nav" aria-current="page" to="/signup">
                SignUp
               </link> 
            </li>  
            <li className="nav-item mx-2">
               <link  className="nav-link active btn-nav" aria-current="page" to="signin">
                SignIn
               </link> 
            </li> 
            <li className="nav-item mx-2">
               <link  className="nav-link active btn-nav " aria-current="page" to="#">
                LogOut
               </link> 
            </li>  
            
            <li className="nav-item mx-2">
               <link  className="nav-link active   " aria-current="page" to="#">
                <img className="img-fluid user-png" 
                src ="https://iconape.com/wp-content/png_logo_vector/user-circle.png"/>
               </link> 
            </li>

            </ul>
            
        </div>
        </div>
    </nav>
    </div>
  )
}

export default Navbar