import {Grid} from '@material-ui/core';
import React, {useState, useEffect} from 'react'
import Control from '../../Components/controls/Control';
import {useForm, Form} from '../../Components/useForm';


const instialValue = {
    'id': 0,
    'fullName': '',
    'email': '',
    'mobile': '',
    'city': '',
    'gender': 'male',
    'departmentId': '',
    'hireDate': new Date(),
    'isPermenant': false
}

const genderItems = [
    {id:"male",title: "Male"},
    {id:"female",title: "Female"},
    {id:"others",title: "Others"}
]

const departmentList =  [
    {"id": 1, "department": "Development"},
    {"id": 1, "department": "Marketing"},
    {"id": 1, "department": "HR"},
    {"id": 1, "department": "Others"}
    ]

export default function EmployeeForm() {

    const {
        values,
        setValues,
        handleInputChange
    } = useForm(instialValue);

    return (
       <Form>
           <Grid container>
               <Grid item xs={6}>
                   <Control.Input 
                        name="fullName"
                        label="Full Name"
                        value={values.fullName}
                        onChange = {handleInputChange}
                    />
                    <Control.Input 
                        label="Email" 
                        name="email"
                        value={values.email}
                        onChange={handleInputChange}
                    />
               </Grid>
               <Grid item xs={6}>
                   <Control.RadioGroup
                        name="gender"
                        value={values.gender}
                        onChange={handleInputChange}
                        label='Gender'
                        items = {genderItems}
                   />
                   <Control.Select
                        name="departmentId"
                        label='Department'
                        value={values.departmentId}
                        onChange={handleInputChange}
                        option ={departmentList}

                   />
               </Grid>
           </Grid>
       </Form>
    )
}

