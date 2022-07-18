import { Button, Typography } from "@mui/material";
import { Container } from "@mui/system";
import Logo from "../logo/Logo";
import './pages.css';
import home2 from '../images/home2.jpg';
import Page1 from "../fromHomePages/Page1";
import { useState } from "react";



function FromHome() {
    let finished = false;
    let hours = 0;
    let page = 1;

    let state = useState(1);

    function buttonClick() {
        console.log(hours)
        page++;
    }

    function updateHours(newHours) {
        hours = newHours;
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
                <Button variant='contained' color='success' size='large' sx={{mt: '50px  '}} onClick={buttonClick}>{(finished && 'CALCULATE') || 'NEXT'}</Button>
            </Container>
        </div>
    )
}

export default FromHome;