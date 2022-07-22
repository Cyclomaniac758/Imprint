import Logo from "../logo/Logo";
import './pages.css';
import {Container} from "@mui/system";
import {Button, Typography} from "@mui/material";
import office from "../images/office.jpg";
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import OfficePage1 from "../fromOfficePages/OfficePage1";
import OfficePage2 from "../fromOfficePages/OfficePage2";
import OfficePage3 from "../fromOfficePages/OfficePage3";

const commuteFactors = {
    'Car-Petrol': 0.265,
    'Car-Diesel': 0.270,
    'Car-Electric': 0.026,
    'Car-Diesel Hybrid': 0.242,
    'Car-Petrol Hybrid': 0.201,
    'Bus': 0.155,
    'Motorcycle <60cc': 0.066,
    'Motorcycle >60cc': 0.131,
    'Rail': 0.019,
    'Taxi': 0.225,
    'Walking/Biking': 0
}

function InTheOffice() {
    const navigate = useNavigate();
    const [page, setPage] = useState(1);
    const [distance, setDistance] = useState(0);
    const [vehicles, setVehicles] = useState([]);
    const [vehicleDays, setVehicleDays] = useState({})

    function calculateResult() {
        let total = 0;

        for (let vehicle in vehicleDays) {
            total += distance * commuteFactors[vehicle] * vehicleDays[vehicle];
        }

        total = total * 50;

        navigate('/result', {state: {result: total.toFixed(3)}});
    }

    function buttonClick() {
        if (page < 3) {
            setPage(page+1);
        } else {
            calculateResult();
        }
    }

    return (
        <div className="page">
            <header className="heading">
                <Logo/>
            </header>
            <Container sx={{textAlign: "center", height: '100vh', justifyContent: 'center'}}>
                <Typography variant="subtitle2">
                    Working In The Office
                </Typography>
                <img className="image" src={office} height='175px' width='auto' alt="logo"/>
                {page === 1 && <OfficePage1 setDistance={setDistance}/>}
                {page === 2 && <OfficePage2 vehicles={vehicles} setVehicles={setVehicles}/>}
                {page === 3 && <OfficePage3 vehicles={vehicles} setVehicles={setVehicles} vehicleDays={vehicleDays} setVehicleDays={setVehicleDays}/>}
                <Button variant='contained' color='success' size='large' sx={{mt: '50px  '}} onClick={buttonClick}>{(page===3 && 'CALCULATE') || 'NEXT'}</Button>
            </Container>
        </div>
    )
}

export default InTheOffice;