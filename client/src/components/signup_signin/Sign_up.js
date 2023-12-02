import React, { useState } from 'react'
import "./signup.css"
import { NavLink } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Sign_up = () => {

    const [udata, setUdata] = useState({
        fname: "",
        email: "",
        mobile: "",
        password: "",
        cpassword: ""
    });
    console.log(udata);
    const adddata = (e) => {
        const { name, value } = e.target;
        setUdata(() => {
            return {
                ...udata,
                [name]: value
            }
        })
    }

    const senddata = async (e) => {
        //on clicking button it will not reload the page
        e.preventDefault();
        //as soon as the user enter the data it will be stored in udata
        const { fname, email, mobile, password, cpassword } = udata;

        const res = await fetch("https://amazonclonebackbysk.onrender.com/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                fname, email, mobile, password, cpassword
            })
        });

        //const data = await res.json();
        // console.log(data);
        const json = await res.json();
        console.log(json)

        if (res.status === 422 || !json) {
            // alert("no data")
            toast.warn("No data", {
                position: "top-center",
            })
        } else {
            // alert("data succesfully adde");
            localStorage.setItem("token",json.token)
            toast.success("Account created successfully", {
                position: "top-center",
            })
            //as sson as data is added successfully we will blank the data
            setUdata({ ...udata, fname: "", email: "", mobile: "", password: "", cpassword: "" });
        }
    }

    return (
        <>
            <section>
                <div className='sign_container'>
                    <div className='sign_header'>
                        <img src='./blacklogoamazon.png' alt="" />
                    </div>
                    <div className='sign_form'>
                        <form>
                            <h1>Sign-Up</h1>
                            <div className='form_data'>
                                <label htmlFor='fname'>Name</label>
                                <input type='text'
                                    onChange={adddata}
                                    value={udata.fname}
                                    name="fname" id='fname' />
                            </div>
                            <div className='form_data'>
                                <label htmlFor='email'>Email</label>
                                <input type='text'
                                    onChange={adddata}
                                    value={udata.email} name="email" id='email' />
                            </div>
                            <div className='form_data'>
                                <label htmlFor='number'>Mobile No.</label>
                                <input type='text'
                                    onChange={adddata}
                                    value={udata.mobile}
                                    name="mobile" id='mobile' />
                            </div>
                            <div className='form_data'>
                                <label htmlFor='password'>Password</label>
                                <input type='password'
                                    onChange={adddata}
                                    value={udata.password}
                                    name="password" id='password' />
                            </div>
                            <div className='form_data'>
                                <label htmlFor='password'>Password Again</label>
                                <input type='cpassword'
                                    onChange={adddata}
                                    value={udata.cpassword}
                                    name="cpassword" id='cpassword' />
                            </div>
                            <button className='signin_btn' onClick={senddata}>Continue</button>
                            <div className='signin_info'>
                                <p>Already have an account?</p>
                                <NavLink to="/login">Sign In</NavLink>
                            </div>
                        </form>
                    </div>
                    <ToastContainer />
                </div>
            </section>
        </>
    )
}

export default Sign_up
