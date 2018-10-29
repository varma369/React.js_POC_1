import React from 'react'
import classes from './Footer.css'

const footer=()=>{
    const navURL="https://www.google.co.in/"
    return(
    <footer className={classes.Footer}>
    <div >
        <center><a href={navURL}>Services . </a>
         <a href={navURL}>History . </a>
         <a href={navURL}>Contact </a></center>
     </div>
     </footer>
     ) 
}

export default footer