import { Button, Typography } from "@mui/material";
import { Container } from "@mui/system";
import Logo from "../logo/Logo";
import './pages.css';
import home2 from '../images/home2.jpg';
import Page1 from "../fromHomePages/Page1";
import Page2 from "../fromHomePages/Page2";
import { useState } from "react";
import Page3 from "../fromHomePages/Page3";




function FromHome() {
    let [hours, setHours] = useState(0);
    let [page, setPage] = useState(1);
    let [camera, setCamera] = useState(true);
    let [connection, setConnection] = useState('');
    let [zoom, setZoom] = useState(1);
    let [heatingHours, setHeatingHours] = useState(0);
    let [heating, setHeating] = useState(1);

    function calculateResult() {
        console.log(zoom === 'false');
        console.log(hours);
        console.log(camera);
        console.log(connection);
        console.log(heating);
        console.log(heatingHours);
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