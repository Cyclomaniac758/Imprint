import Logo from "../logo/Logo";
import './pages.css';
import {Container} from "@mui/system";
import {Button} from "@mui/material";
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import WeekBreakdown from "./WeekBreakdown";
import InTheOffice from "./InTheOffice";
import FromHome from "./FromHome";

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

function Calculator() {
    const navigate = useNavigate();
    const [page, setPage] = useState(1);

    const [daysFromOffice, setDaysFromOffice] = useState(0);  
    const [daysFromHome, setDaysFromHome] = useState(0);
    const [officeComplete, setOfficeComplete] = useState(false);
    const [homeComplete, setHomeComplete] = useState(false);

    const [distance, setDistance] = useState(0);
    const [vehicles, setVehicles] = useState([]);
    const [vehicleDays, setVehicleDays] = useState({});

    const [hours, setHours] = useState(0);
    const [camera, setCamera] = useState(true);
    const [connection, setConnection] = useState('');
    const [zoom, setZoom] = useState(1);
    const [heatingHours, setHeatingHours] = useState(0);
    const [heating, setHeating] = useState(1);

    function calculateResult() {
        let total = 0;

        for (let vehicle in vehicleDays) {
            total += distance * commuteFactors[vehicle] * vehicleDays[vehicle];
        }

        total = total * 50;
        navigate('/result', {state: {result: total.toFixed(3)}});
    }

    function buttonClick() {
        if (page+1===6 && !officeComplete) {
            setPage(page+1);
            setOfficeComplete(true);
        }
        else if (page < 8) {
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
                {page < 3 && <WeekBreakdown page={page} setPage={setPage} daysFromOffice={daysFromOffice} daysFromHome={daysFromHome} setDaysFromOffice={setDaysFromOffice} setDaysFromHome={setDaysFromHome} setOfficeComplete={setOfficeComplete} setHomeComplete={setHomeComplete}/>}
                {(page>2 && !officeComplete) && <InTheOffice page={page} setPage={setPage} setOfficeComplete={setOfficeComplete} calculateResult={calculateResult} homeComplete={homeComplete}/>}
                {(officeComplete && page>2 && !homeComplete) && <FromHome page={page} setPage={setPage} calculateResult={calculateResult} officeComplete={officeComplete}/>}
            </Container>
        </div>
    )
}

export default Calculator;