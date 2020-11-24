import React from 'react'
import { TextField } from '@material-ui/core';


export default function Input(props) {
    const {name, value, label, onChange} = props;
    return (
        <TextField 
        label={label}
        name={name}
        variant="outlined"
        value={value}
        onChange={onChange}
         />
    )
}

