import React, { useState } from 'react'
import "./signup.css"
import { NavLink } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Address = () => {
    const [adata, setAdata] = useState({
        fname: "",
        email: "",
        mobile: "",
        address: "",
        state: "",
        city:"",
        zip:""
    });
    console.log(adata);
    const adddata = (e) => {
        const { name, value } = e.target;
        setAdata(() => {
            return {
                ...adata,
                [name]: value
            }
        })
    }

    const senddata = async (e) => {
        e.preventDefault();
        const { fname, email, mobile, address, state,city,zip } = adata;

        const res = await fetch("https://amazonclonebackbysk.onrender.com/address", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                fname, email, mobile, address, state,city,zip
            })
        });

        const data = await res.json();
        // console.log(data);


        if (res.status === 422 || !data) {
            // alert("no data")
            toast.warn("Invalid details", {
                position: "top-center",
            })
        } else {
            // alert("Data succesfully added");
            toast.success("Data succesfully added", {
                position: "top-center",
            })
            setAdata({ ...adata, fname: "", email: "", mobile: "", address: "", state: "",city:"",zip:"" });
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
                            <h1>Address</h1>
                            <div className='form_data'>
                                <label htmlFor='fname'>Name</label>
                                <input type='text'
                                    onChange={adddata}
                                    value={adata.fname}
                                    name="fname" id='fname' />
                            </div>
                            <div className='form_data'>
                                <label htmlFor='email'>Email</label>
                                <input type='text'
                                    onChange={adddata}
                                    value={adata.email} name="email" id='email' />
                            </div>
                            <div className='form_data'>
                                <label htmlFor='number'>Mobile No.</label>
                                <input type='text'
                                    onChange={adddata}
                                    value={adata.mobile}
                                    name="mobile" id='mobile' />
                            </div>
                            <div className='form_data'>
                                <label htmlFor='address'>Address</label>
                                <input type='text'
                                    onChange={adddata}
                                    value={adata.address}
                                    name="address" id='address' />
                            </div>
                            <div className='form_data'>
                                <label htmlFor='state'>State</label>
                                <input type='text'
                                    onChange={adddata}
                                    value={adata.state}
                                    name="state" id='state' />
                            </div>
                            <div className='form_data'>
                                <label htmlFor='city'>City</label>
                                <input type='text'
                                    onChange={adddata}
                                    value={adata.city}
                                    name="city" id='city' />
                            </div>
                            <div className='form_data'>
                                <label htmlFor='zip'>Zip Code</label>
                                <input type='text'
                                    onChange={adddata}
                                    value={adata.zip}
                                    name="zip" id='zip' />
                            </div>
                            <button className='signin_btn'  onClick={senddata}>Pay Now </button>
                            
                        </form>
                    </div>
                    <ToastContainer />
                </div>
            </section>
        </>
  )
}

export default Address
