import React, { useState, useEffect } from 'react'
import {useDispatch, useSelector} from "react-redux"
import { loginUser } from '../actions/userAction'
import Error from '../components/Error'
import Loading from '../components/Loading'

export default function LoginScreen() {

    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const dispatch = useDispatch() 
    const loginstate = useSelector(state=>state.loginUserReducer)
    const {loading, error} = loginstate

    useEffect(()=>{
        if(localStorage.getItem("currentUser")){
            window.location.href="/"
        }
    }, [])

 
    function login(){
        if(email===""){
            alert("email can not be empty")
        }
        else if(password===""){
            alert("password can not be empty")
        }
        else{
            const user={email, password}
            console.log(user);
            dispatch(loginUser(user))
        }
    }

    return (
        <div>
            <div className='row justify-content-center mt-5'>
                <div className='col-md-5 mt-5 shadow-lg p-5 mb-5 bg-white rounded'>
                    <h2 className='/' style={{ fontSize: "35px" }}>Login</h2>
                    
                    {loading && ((<Loading/>))}
                    {error && ((<Error error="Invalid Credentials"/>))}
                    
                    <div className='m-2'>
                        <input required type="text" placeholder='Email' className='form-control' value={email} onChange={(e)=>{setemail(e.target.value)}} />
                        <input required type="Password" placeholder='Password' className='form-control' value={password} onChange={(e)=>{setpassword(e.target.value)}} />
                        <button onClick={login} className="btn btnBuyNowHover mt-4 mb-3">Login</button>
                        <br/>
                        <br/>
                        <a style={{color:"black"}} href='/register' className='m-2'> Click Here To Register</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
