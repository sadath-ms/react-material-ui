import React from 'react'
import {FormControl, InputLabel, Select as MuiSelect, MenuItem} from '@material-ui/core'

export default function Select(props) {

    const {name, label, value, onChange, option} = props;
    return (
        <FormControl variant='outlined'>
            <InputLabel>{label} </InputLabel>
            <MuiSelect label={label} name={name} value={value} onChange={onChange}>
                <MenuItem value="">Select</MenuItem>
                {
                    option.map(
                        item => (<MenuItem key={item.id} value={item.id}>{item.title}</MenuItem>)
                    )
                }
            </MuiSelect>
        </FormControl>    
    )
}


