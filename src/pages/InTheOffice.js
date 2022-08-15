import './pages.css';
import {Button, Typography} from "@mui/material";
import office from "../images/office.jpg";
import React, {useState} from "react";
import OfficePage1 from "../fromOfficePages/OfficePage1";
import OfficePage2 from "../fromOfficePages/OfficePage2";
import OfficePage3 from "../fromOfficePages/OfficePage3";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function InTheOffice(props) {
    const [distance, setDistance] = useState(0);
    const [vehicles, setVehicles] = useState([]);
    const [vehicleDays, setVehicleDays] = useState({})

    function buttonClick() {
        console.log(props.homeComplete)
        if (props.page===5 && props.homeComplete) {
            props.calculateResult();
        } else if (props.page===5 && !props.officeComplete) {
            props.setOfficeComplete(true);
            props.setProgress(props.progress+10);
            props.setPage(props.page+1);
        } else {
            props.setProgress(props.progress+10);
            props.setPage(props.page+1);
        }
    }

    function backButtonClick() {
        if (props.page === 3) {
            props.setProgress(20);
        } else {
            props.setProgress(props.progress-10);
        }
        props.setPage(props.page-1);
    }

    return (
        <div>
            <Typography variant="subtitle2">
                Working In The Office
            </Typography>
            <img className="image" src={office} height='175px' width='auto' alt="logo"/>
            {props.page === 3 && <OfficePage1 setDistance={setDistance}/>}
            {props.page === 4 && <OfficePage2 vehicles={vehicles} setVehicles={setVehicles}/>}
            {props.page === 5 && <OfficePage3 vehicles={vehicles} setVehicles={setVehicles} vehicleDays={vehicleDays} setVehicleDays={setVehicleDays}/>}
            <Button variant='contained' color='secondary' size='large' sx={{mt: '50px  ', mr: '20px'}} onClick={backButtonClick}><ArrowBackIcon/>{'BACK'}</Button>
            <Button variant='contained' color='success' size='large' sx={{mt: '50px  '}} onClick={buttonClick}>{(props.homeComplete&&props.page===5) ? 'CALCULATE' : 'NEXT'}<ArrowForwardIcon/></Button>
        </div>
    )
}

export default InTheOffice;