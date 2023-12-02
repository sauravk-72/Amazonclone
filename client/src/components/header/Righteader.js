import { React, useContext } from 'react'
import Avatar from '@mui/material/Avatar';
import { LoginContext } from '../context/ContextProvider';
import { NavLink } from 'react-router-dom';
import { Divider } from '@mui/material';
import "./rightheader.css"
import LogoutIcon from '@mui/icons-material/Logout';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


const Rightheader = ({ logclose}) => {
    const history = useNavigate();
    const { account, setAccount } = useContext(LoginContext);
    const logoutuser = async () => {
        const res2 = await fetch("https://amazonclonebackbysk.onrender.com/lougout", {
            method: "GET",
            headers: {
                Authorization:localStorage.getItem("token"),
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            
        });

        const data2 = await res2.json();
        console.log(data2);

        if (res2.status !== 201) {
            console.log("error");
        } else {
            console.log("data valid log");
            // alert("logout")
            toast.success("User logout", {
                position: "top-center",
            })
            history("/");
            setAccount(false);

        }
    };


    return (
        <>
            <div className="rightheader">
                <div className="right_nav">
                    {
                        account ? <Avatar className='avtar2'>{account.fname[0].toUpperCase()}</Avatar> :
                            <Avatar className='avtar'></Avatar>
                    }
                    {account ? <h3>Helloo, {account.fname.toUpperCase()}</h3> : ""}
                </div>
                <div className="nav_btn" onClick={() => logclose()}>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/">Shop By category</NavLink>

                    <Divider style={{ width: "100%", marginLeft: "-20px", marginBottom:"20px" }} />

                    <NavLink to="/">Today's Deal</NavLink>
                    {
                        account ? <NavLink to="/buynow">Your orders</NavLink> : <NavLink to="/login">Your orders</NavLink>
                    }


                    <Divider style={{ width: "100%", marginLeft: "-20px" , marginBottom:"20px"  }} />

                    


                    {
                        account ? 
                        <div className="flag">
                            <LogoutIcon style={{fontSize:18,marginRight:4}} />
                            <h3 onClick={logoutuser} style={{cursor:"pointer",fontWeight:500}}>Logout</h3>
                        </div>:
                        <NavLink to="login">Sign In</NavLink>
                    }
                </div>
            </div>
        </>
    )
}

export default Rightheader