import { React, useContext, useEffect, useState } from 'react'
import "./navbaar.css";
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Avatar from '@mui/material/Avatar';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { LoginContext } from '../context/ContextProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import Rightheader from './Righteader';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import LogoutIcon from '@mui/icons-material/Logout';

const Navbaar = () => {
    const { account, setAccount } = useContext(LoginContext);
    //console.log(account);

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const history = useNavigate();

    const [dropen, setDropen] = useState(false)

    const getdetailvaliduser = async () => {
        const res = await fetch("https://amazonclonebackbysk.onrender.com/validuser", {
            method: "GET",
            headers: {
                Authorization:localStorage.getItem("token"),
                Accept: "application/json",
                "Content-Type": "application/json"
            },
           
        });

        const data = await res.json();
        console.log(data);

        if (res.status !== 201) {
            console.log("error");
        } else {
            console.log("data valid");
            setAccount(data);
        }
    };


    const handleopen = () => {
        setDropen(true)
    }

    const handledrclose = () => {
        setDropen(false)
    }

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
            toast.success("user logput", {
                position: "top-center",
            })
            history("/");
            setAccount(false);

        }
    };
    useEffect(() => {
        getdetailvaliduser()
    }, [])

    return (
        <header>
            <nav>
                <div className="left">

                    <IconButton className='hamburger' onClick={handleopen}>
                        <MenuIcon style={{ color: "#fff" }} />
                    </IconButton>
                    <Drawer open={dropen} onClose={handledrclose}>
                        <Rightheader logclose={handledrclose}>

                        </Rightheader>
                    </Drawer>

                    <div className="navlogo">
                        <NavLink to="/">< img src="./amazon_PNG25.png" alt="n" /></NavLink>
                    </div>
                    <div className="nav_searchbaar">
                        <input type="text" name="text" id="" placeholder="Search your products" />
                    </div>
                    <div className='search_icon'>
                        <SearchIcon id="search" />
                    </div>
                </div>
                <div className='right'>
                    <div className='nav_btn'>
                        <NavLink to="/login">Sign In</NavLink>
                    </div>
                    <div className='cart_btn'>
                        {
                            account ? <NavLink to="/buynow">
                                <Badge  color="primary">
                                    <ShoppingCartIcon id="icon" />
                                </Badge>
                            </NavLink> : <NavLink to="/login">
                                <Badge  color="primary">
                                    <ShoppingCartIcon id="icon" />
                                </Badge>
                            </NavLink>
                        }
                        <NavLink to="/buynow"><p>Cart</p></NavLink>
                    </div>
                    {
                        account ? <Avatar className='avatar2'
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}>S</Avatar> :
                            <Avatar className='avatar'
                                id="basic-button"
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}></Avatar>
                    }

                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={handleClose}>My account</MenuItem>
                        {
                            account ? <MenuItem onClick={handleClose} onClick={logoutuser}><LogoutIcon style={{ fontSize: 16, marginRight: 3 }} />Logout</MenuItem> : ""
                        }

                    </Menu>

                </div>
            </nav>
        </header>
    )
}

export default Navbaar