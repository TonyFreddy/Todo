import React from 'react';
import '../navbar/Navbar.css';
import { RiContactsBook2Fill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { authActions } from "../../store/index";


const Navbar = () => {
  
  const isloggedIn = useSelector((state) => state.isloggedIn);  
  
  const dispatch = useDispatch();
  const logout = () =>{
        sessionStorage.clear("id");
        dispatch(authActions.logout());
  } 
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <RiContactsBook2Fill />  ToDo
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item ">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link active" aria-current="page" to="/about">
                  About us
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link active" aria-current="page" to="/todo">
                  Todo
                </Link>
              </li>
{(!isloggedIn && <><li className="nav-item mx-2">
                <Link className="nav-link active btn-nav" aria-current="page" to="/signup">
                  SignUp
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link active btn-nav" aria-current="page" to="/signin">
                  SignIn
                </Link>
              </li>
              </>
              )}
       {isloggedIn && <li className="nav-item mx-2" onClick={logout}>
                <Link className="nav-link active btn-nav " aria-current="page" to="#">
                  LogOut
                </Link>
                
              </li>
              
              }
              
              
              <li className="nav-item mx-2">
                <Link className="nav-link active" aria-current="page" to="#">
                  <img className="img-fluid user-png" 
                    src="https://iconape.com/wp-content/png_logo_vector/user-circle.png" alt="user" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
