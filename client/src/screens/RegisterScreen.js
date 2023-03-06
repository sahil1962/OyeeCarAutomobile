import React, { useState, useEffect } from 'react'
import {useDispatch, useSelector} from "react-redux"
import { registerUser } from '../actions/userAction'
import Error from '../components/Error'
import Loading from '../components/Loading'
import Success from '../components/Success'
export default function RegisterScreen() {
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [cpassword, setcpassword] = useState("")
    const registerstate = useSelector(state=>state.registerUserReducer)
    const {loading, error, success} = registerstate

    const dispatch = useDispatch() 
    function register(){
        if(password!==cpassword){
            alert("password not matched")
        }
        else if(name===""){
            alert("name can not be empty")
        }
        else if(email===""){
            alert("email can not be empty")
        }
        else if(password===""){
            alert("password can not be empty")
        }
        else if(cpassword===""){
            alert("confirm password can not be empty")
        }
        else{
            const user={
                name,
                email,
                password
            }
            console.log(user);
            dispatch(registerUser(user))
        }
    }

    return (
        <div>
            <div className='row justify-content-center '>
                <div className='col-md-5 mt-5 shadow-lg p-5 mb-5 bg-white rounded'>
                    {loading && ((<Loading/>))}
                    {success && ((<Success success="User Register Successfully"/>))}
                    {error && ((<Error error="Email Already Exists"/>))}


                    <h2 style={{ fontSize: "35px" }}>Registration</h2>
                    <div className='m-2'>
                        <input required type="text" placeholder='Name' className='form-control' value={name} onChange={(e)=>{setname(e.target.value)}} />
                        <input required type="text" placeholder='Email' className='form-control' value={email} onChange={(e)=>{setemail(e.target.value)}} />
                        <input required type="Password" placeholder='Password' className='form-control' value={password} onChange={(e)=>{setpassword(e.target.value)}} />
                        <input required type="Password" placeholder='Confirm Password' className='form-control' value={cpassword} onChange={(e)=>{setcpassword(e.target.value)}} />
                        <button onClick={register} className="btn btnBuyNowHover mt-4 mb-3">Register</button>
                        <br/>
                        <br/>
                        <a style={{color:"black"}} href='/login' className='m-2'> Click Here To Login</a>

                    </div>
                </div>
            </div>
        </div>
    )
}
