import React from 'react'
import ProductLogo from '../../assets/Logo.jpg'
import classes from './Logo.css';
const logo=(props)=>(
    <div className={classes.Logo}>
    <img src={ProductLogo} alt="MyProduct" />
    </div> 
);
export default logo;
