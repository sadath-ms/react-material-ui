import React, {useState} from 'react'
import {makeStyles} from '@material-ui/core';


export function useForm(instialValue) {

    const [values, setValues] = useState(instialValue);

    const handleInputChange= e => {
        const {name, value} = e.target
        setValues({
            ...values,
            [name]: value
        })
    }
    return {
        values, 
        setValues,
        handleInputChange
    }
}


const useStyle = makeStyles(theme => ({
    root: {
         '& .MuiFormControl-root': {
             width: '80%',
             margin: theme.spacing(1)
         }
    }
}))

export function Form(props) {
    const classes = useStyle();

    return (
       <form className={classes.root}>
           {props.children}
       </form>
    )
}


