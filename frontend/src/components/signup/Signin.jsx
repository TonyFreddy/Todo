import React , {useState} from 'react';
import "./signup.css";
import HeadingComp from './HeadindComp';
import axios from "axios";
import {useNavigate} from "react-router-dom";
import { useDispatch } from 'react-redux';
import { authActions } from "../../store/index";
const SignIn = () => {

    const dispatch = useDispatch();
    const history = useNavigate();
    const [Inputs, SetInputs] = useState({
        email: "",
        password:""
       
       });
       const change = (e) => {
        const { name , value } = e.target;
        SetInputs({...Inputs, [name]: value})
      };
      const submit = async(e) => {
        e.preventDefault();
        await axios.post("http://localhost:2000/api/v1/signin", Inputs)
        .then((response) => {
        sessionStorage.setItem("id",response.data.others._id);
        dispatch(authActions.login());
        history("/todo");
        });
     
      };
    return(
        <div>  <div className="signup">
        <div className="container ">
            <div className="row">
                <div className="col-lg-8 d-flex justify-content-center align-items-cente">
                <div className="col-lg-4 column col-left d-flex justify-content-center align-items-center">                                                                                                                                                                                                                
                <HeadingComp first ="Sign" second="In"/>
                </div>
                    <div className=" d-flex flex-column w-100 p-5">
                        <input className="p-2 my-3 input-signup"
                        type="email" 
                        name="email"
                        placeholder="Enter Your Email"
                        value={Inputs.email}
                        onChange={change}
                        />


                        <input className="p-2 my-3 input-signup"
                        type="password" 
                        name="password"
                        placeholder="Enter Your Password"
                        value={Inputs.password}
                        onChange={change}
                        />

                      <div>
                      <button className="btn-signup p-2" onClick={submit}>
                            Sign In
                        </button>
                      </div>

                </div>
            </div>
        </div>
    </div>
    </div> </div>
    )
}

export default SignIn;