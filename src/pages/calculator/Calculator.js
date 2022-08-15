import Logo from "../../logo/Logo";
import '../pages.css';
import {Container} from "@mui/system";
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import WeekBreakdown from "../WeekBreakdown";
import InTheOffice from "../InTheOffice";
import FromHome from "../FromHome";
import Stack from '@mui/material/Stack';
import { Box } from "@mui/material";
import LinearProgressWithLabel from "./ProgressBar";

const commuteFactors = {
    'Car-Petrol': 0.264656596607083,
    'Car-Diesel': 0.270211945903452,
    'Car-Electric': 0.0257236513893049,
    'Car-Diesel Hybrid': 0.242225708649166,
    'Car-Petrol Hybrid': 0.20139081670323,
    'Car-Petrol Plug-in Hybrid': 0.0957093409748131, 
    'Car-Diesel Plug-in Hybrid': 0.115722560779822,
    'Bus': 0.155,
    'Motorcycle <60cc': 0.0657125660708244,
    'Motorcycle >60cc': 0.131425132141649,
    'Rail': 0.019,
    'Taxi': 0.224696773002809,
    'Electric Scooter': 0,
    'Electric Bicycle': 0.0010701949,
    'Walking/Biking': 0
}

function Calculator() {
    const navigate = useNavigate();
    const [page, setPage] = useState(1);
    const [progress, setProgress] = useState(10);

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

    return (
        <div className="page">
            <header className="heading">
                <Logo/>
                <Box sx={{ width: '100%', textAlign: 'center', height: '100%'}}>
                    <Stack sx={{ width: '80%', color: 'grey.500', m: 'auto auto'}} spacing={2}>
                        <LinearProgressWithLabel value={progress} />
                    </Stack> 
                </Box>          
            </header>
            <Container sx={{textAlign: "center", height: '100vh', justifyContent: 'center'}}>
                {(page === 1 || page === 2) && <WeekBreakdown page={page} setPage={setPage} daysFromOffice={daysFromOffice} daysFromHome={daysFromHome} setDaysFromOffice={setDaysFromOffice} setDaysFromHome={setDaysFromHome} setOfficeComplete={setOfficeComplete} setHomeComplete={setHomeComplete} setProgress={setProgress}/>}
                {(page>2 && !officeComplete) && <InTheOffice page={page} setPage={setPage} setOfficeComplete={setOfficeComplete} calculateResult={calculateResult} homeComplete={homeComplete} setProgress={setProgress} progress={progress}/>}
                {(officeComplete && page>2 && !homeComplete) && <FromHome page={page} setPage={setPage} calculateResult={calculateResult} officeComplete={officeComplete} setProgress={setProgress} progress={progress}/>}
            </Container>
        </div>
    )
}

export default Calculator;