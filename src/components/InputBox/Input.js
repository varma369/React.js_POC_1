import React from 'react';
import classes from './Input.css';
const input=(props)=>{
    let inputClasses = '';

    if (props.invalid && props.shouldValidate.required) {
       console.log(props.shouldValidate.required +"="+props.invalid)
        inputClasses=classes.Invalid;
    }
              let  inputElement = <input
                className={inputClasses}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} 
              />;
    
    return(
        <div className={classes.Input}>
             <label className={classes.Label}>{props.label}</label> 
             {inputElement}
        </div>
    );
}
export default input;