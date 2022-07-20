import './pages.css'
import Logo from "../logo/Logo";
import React from "react";
import Typography from "@mui/material/Typography";
import {useLocation, useNavigate} from "react-router-dom";
import {Container} from "@mui/system";
import Button from "@mui/material/Button";


function Result() {
    const {state} = useLocation();
    const navigate = useNavigate();

    function goHome() {
        navigate('/');
    }

    return (
        <div className='page'>
            <header className="heading">
                <Logo/>
            </header>
            <Container sx={{textAlign: "center", height: '100vh', justifyContent: 'center'}}>
                <Typography variant="h1" sx={{color:'#116939', mt: '15%'}}>
                    {state.result}
                </Typography>
                <Typography variant="h2" sx={{}}>
                    kg CO2 -e / year
                </Typography>
                <Button variant='contained' color='success' size='large' sx={{ mt: '10%', minWidth: '10%'}} onClick={goHome}>
                    HOME
                </Button>
            </Container>
        </div>
    );
}

export default Result;