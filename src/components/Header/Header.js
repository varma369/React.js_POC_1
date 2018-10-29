import React from 'react';
import Logo from '../Logo/Logo';
import classes from './Header.css';
import Clock from '../Clock/Clock'
const header = (props) => {
    return(
    <header className={classes.Header}>
        <div className={classes.Logo}>
            <Logo />
        </div>
        <div className={classes.Button}>
        </div >
        <Clock  isDashboard={props.isDashboard}  isUserProfile={props.isUserProfile}/>
    </header>
    
    );
}

export default header;