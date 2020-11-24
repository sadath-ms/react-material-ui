import React from 'react'
import EmployeeForm from '../Employees/EmployeeForm';
import PageHeader from '../../Components/PageHeader';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import { Paper, makeStyles } from '@material-ui/core';


const useStyle = makeStyles(theme => ({
    pageContent:{
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    }
}))

export default function Employee() {
    const classes = useStyle();

    return (
        <>
        <PageHeader
        subtitle="New Employee"
        discription="Form Data with validations"
        icon={<PeopleOutlineIcon fontSize="large"/>}
        />
        <Paper className={classes.pageContent}>
            <EmployeeForm/>
        </Paper>
       </>
    )
}

