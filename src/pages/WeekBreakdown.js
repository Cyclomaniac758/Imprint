import { Slider, Typography } from "@mui/material";
import { Container } from "@mui/system";
import './pages.css';
import home2 from '../images/home2.jpg';
import office from '../images/office.jpg'
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import {Button} from "@mui/material";

import React from "react";

function WeekBreakdown(props) {
    
    function updateDaysFromOFfice(event) {
        props.setDaysFromOffice(event.target.value);
        console.log(event.target.value)
    }

    function updateDaysFromHome(event) {
        props.setDaysFromHome(event.target.value);
    }

    const marks = [
        {
            value: 0,
            label: '0 days'
        },
        {
            value: 1,
            label: '1'
        },
        {
            value: 2,
            label: '2'
        },
        {
            value: 3,
            label: '3'
        },
        {
            value: 4,
            label: '4'
        },
        {
            value: 5,
            label: '5'
        },
        {
            value: 6,
            label: '6'
        },
        {
            value: 7,
            label: '7 days'
        }
    ];

    function buttonClick() {
        if (props.daysFromOffice===0) {
            props.setOfficeComplete(true);
        }
        if (props.daysFromHome===0 && props.page>1) {
            props.setHomeComplete(true);
        }
        props.setPage(props.page+1);
    }
    
    return (
        <div>
            <Container sx={{textAlign: "center", justifyContent: 'center'}}>
                <Typography variant="h6" sx={{m: '4vh'}}>
                    What Does Your Average Week Look Like?
                </Typography>
                <Container sx={{width: '300px', height: '185'}}>
                    <Typography variant="subtitle2" sx={{textAlign: 'left'}}>
                    {props.page===1 ? 'working from the office' : 'working from home'}
                    </Typography>
                    <img className="image" src={props.page===1 ? office : home2} height='175px' width='auto' alt="logo"  />
                </Container>
                <Typography variant="subtitle1" sx={{mt: '3vh'}}>
                    {props.page===1 ? 'Select number of days working in the office' : 'Select number of days working from home'}
                </Typography>
                <Container sx={{width: '50%', mt: '3vh'}}>
                    <Slider defaultValue={0} min={0} max={7} marks={marks} step={1} onChange={props.page===1 ? updateDaysFromOFfice : updateDaysFromHome}/>
                </Container>
                <Button variant='contained' color='success' size='large' sx={{mt: '50px  '}} onClick={buttonClick}>{((props.page===8 || props.officeComplete&&props.page===5) && 'CALCULATE') || 'NEXT'}</Button>
            </Container>
        </div>
    )
}

export default WeekBreakdown;