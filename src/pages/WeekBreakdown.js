import { Slider, Typography } from "@mui/material";
import { Container } from "@mui/system";
import './pages.css';
import home2 from '../images/home2.jpg';
import office from '../images/office.jpg'
import {Button} from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import React from "react";

function WeekBreakdown(props) {
    
    function updateDaysFromOFfice(event) {
        props.setDaysFromOffice(event.target.value);
        props.setDaysFromHome(event.target.value);
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
        } else {
            props.setOfficeComplete(false);
        }
        if (props.daysFromHome===0 && props.page>1) {
            props.setHomeComplete(true);
        }
        if (props.page === 1) {
            props.setProgress(20);
        } else {
            props.setProgress(50);
        }
        props.setPage(props.page+1);
    }

    function backButtonClick() {
        props.setPage(props.page-1);
        props.setProgress(10);
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
                {props.page===2 && <Button variant='contained' color='secondary' size='large' sx={{mt: '50px  ', mr: '20px'}} onClick={backButtonClick}><ArrowBackIcon/>{'BACK'}</Button>}
                <Button variant='contained' color='success' size='large' sx={{mt: '50px  '}} onClick={buttonClick}>{'NEXT'}<ArrowForwardIcon/></Button>
            </Container>
            <Container sx={{textAlign: 'left', ml: '25%'}}>
                <Typography variant="subtitle4" color='#116939' sx={{bottom: '10px', position: 'fixed'}}>
                    *Include mixed days where you work both from home and in the office
                </Typography>
            </Container>
        </div>
    )
}

export default WeekBreakdown;