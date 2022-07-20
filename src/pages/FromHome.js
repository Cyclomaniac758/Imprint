import { Button, Typography } from "@mui/material";
import { Container } from "@mui/system";
import Logo from "../logo/Logo";
import './pages.css';
import home2 from '../images/home2.jpg';
import Page1 from "../fromHomePages/Page1";
import Page2 from "../fromHomePages/Page2";
import React, { useState } from "react";
import Page3 from "../fromHomePages/Page3";
import { useNavigate } from "react-router-dom";

// real factor values still needed
const connectionFactors = {
    'Fibre': .000001,
    'VDSL': .000002,
    'Fixed Wireless': .000003,
    'HFC': .000004
}

function FromHome() {
    const [hours, setHours] = useState(0);
    const [page, setPage] = useState(1);
    const [camera, setCamera] = useState(true);
    const [connection, setConnection] = useState('');
    const [zoom, setZoom] = useState(1);
    const [heatingHours, setHeatingHours] = useState(0);
    const [heating, setHeating] = useState(1);
    const navigate = useNavigate();

    function calculateResult() {
        //zoom bandwidth 3800mbps / 150kbps
        //teams bandwidth  4000kbps / 76kbps
        //time = hours * 3600
        // power consumption from tech in Sapere
        // 2020 power consumption emissions 0.1167

        //heating heat pump .408 kg / day assumes 6hr
        // .068 / hr
        //heating electric .815 kg / day assumes 6hr
        // 0.136 / hr
        console.log(heatingHours)
        console.log(heating)
        console.log(connection);
        console.log(connectionFactors[connection])
        console.log(hours)

        //need to decide how many weeks for heating
        const heatingE = heatingHours * (heating ? 0.068 : 0.815) * 7 * 16;

        const powerE2020 =  0.1167
        let bandwidth;
        if (zoom) {
            bandwidth = camera ? 3.8 : .150;
        } else {
            bandwidth = camera ? 4 : .076;
        }
        console.log(bandwidth)
        const videoE = bandwidth * connectionFactors[connection] * hours * 3600 * powerE2020;
        console.log(heatingE);
        console.log(videoE);
        const total = heatingE + (videoE * 7 * 50);

        navigate('/result', {state: {result: total.toFixed(3)}});
    }

    function buttonClick() {
        if (page < 3) {
            setPage(page+1);
        } else {
            calculateResult();
        }
    }

    function updateHours(newHours) {
        setHours(newHours);
    }

    return (
        <div className="page">
            <header className="heading">
                <Logo/>
            </header>
            <Container sx={{textAlign: "center", height: '100vh', justifyContent: 'center'}}>
                <Typography variant="subtitle2">
                    Working From Home
                </Typography>
                <img className="image" src={home2} height='175px' width='auto' alt="logo"  />
                {page === 1 && <Page1 updateHours={updateHours}/>}
                {page === 2 && <Page2 setCamera={setCamera} camera={camera} setZoom={setZoom} connection={connection} setConnection={setConnection}/>}
                {page === 3 && <Page3 setHeatingHours={setHeatingHours} setHeating={setHeating}/>}
                <Button variant='contained' color='success' size='large' sx={{mt: '50px  '}} onClick={buttonClick}>{(page===3 && 'CALCULATE') || 'NEXT'}</Button>
            </Container>
        </div>
    )
}

export default FromHome;