import '../pages.css';
import {Button, Typography} from "@mui/material";
import office from "../../images/office.jpg";
import React from "react";
import OfficePage1 from "./fromOfficePages/OfficePage1";
import OfficePage2 from "./fromOfficePages/OfficePage2";
import OfficePage3 from "./fromOfficePages/OfficePage3";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function InTheOffice(props) {

    function buttonClick() {
        console.log(props.InTheOfficeProps.homeComplete)
        if (props.InTheOfficeProps.page===5 && props.InTheOfficeProps.homeComplete) {
            props.InTheOfficeProps.calculateResult();
        } else if (props.InTheOfficeProps.page===5 && !props.InTheOfficeProps.officeComplete) {
            props.InTheOfficeProps.setOfficeComplete(true);
            props.InTheOfficeProps.setProgress(props.InTheOfficeProps.progress+10);
            props.InTheOfficeProps.setPage(props.InTheOfficeProps.page+1);
        } else {
            props.InTheOfficeProps.setProgress(props.InTheOfficeProps.progress+10);
            props.InTheOfficeProps.setPage(props.InTheOfficeProps.page+1);
        }
    }

    function backButtonClick() {
        if (props.InTheOfficeProps.page === 3) {
            props.InTheOfficeProps.setProgress(20);
        } else {
            props.InTheOfficeProps.setProgress(props.InTheOfficeProps.progress-10);
        }
        props.InTheOfficeProps.setPage(props.InTheOfficeProps.page-1);
    }

    return (
        <div>
            <Typography variant="subtitle2">
                Working In The Office
            </Typography>
            <img className="image" src={office} height='175px' width='auto' alt="logo"/>
            {props.InTheOfficeProps.page === 3 && <OfficePage1 setDistance={props.InTheOfficeProps.setDistance}/>}
            {props.InTheOfficeProps.page === 4 && <OfficePage2 vehicles={props.InTheOfficeProps.vehicles} setVehicles={props.InTheOfficeProps.setVehicles} multiVehicle={props.InTheOfficeProps.multiVehicle} setMultiVehicle={props.InTheOfficeProps.setMultiVehicle}/>}
            {props.InTheOfficeProps.page === 5 && <OfficePage3 vehicles={props.InTheOfficeProps.vehicles} setVehicles={props.InTheOfficeProps.setVehicles} vehicleDays={props.InTheOfficeProps.vehicleDays} setVehicleDays={props.InTheOfficeProps.setVehicleDays} daysFromOffice={props.InTheOfficeProps.daysFromOffice}/>}
            <Button variant='contained' color='success' size='large' sx={{mt: '50px  ', mr: '20px'}} onClick={backButtonClick}><ArrowBackIcon/>{'BACK'}</Button>
            <Button variant='contained' color='success' size='large' sx={{mt: '50px  '}} onClick={buttonClick}>{(props.InTheOfficeProps.homeComplete&&props.InTheOfficeProps.page===5) ? 'CALCULATE' : 'NEXT'}<ArrowForwardIcon/></Button>
        </div>
    )
}

export default InTheOffice;