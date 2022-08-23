import './pages.css'
import Logo from "../logo/Logo";
import React from "react";
import Typography from "@mui/material/Typography";
import {useLocation, useNavigate} from "react-router-dom";
import {Container} from "@mui/system";
import Button from "@mui/material/Button";
import { Box } from '@mui/system';

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
                <Typography variant="h5" sx={{mt: '5%'}}>
                    By working from home and in the office you emit
                </Typography>
                <Box sx={{justifyContent: 'center', display: 'flex', flexDirection: 'row'}}>
                    <Typography variant="h2" sx={{color:'#116939'}}>
                    {state.result}
                    </Typography>
                    <Typography variant="h5" sx={{lineHeight: '3', ml: '20px'}}>
                        kilograms
                    </Typography>
                </Box>
                <Typography variant="h5" sx={{}}>
                    of carbon dioxide equivalent every year
                </Typography>
                <Box sx={{mt: '20px', justifyContent: 'center', display: 'flex', flexDirection: 'row'}}>
                    <Typography variant="h5" sx={{lineHeight: '2.835'}}>
                        This is offset by the CO2 absorbed by
                    </Typography>
                    <Typography variant="h3" sx={{color:'#9c27b0', ml: '10px', mr: '10px'}}>{((Math.ceil(state.result/21)))}</Typography>
                    <Typography variant="h5" sx={{lineHeight: '2.835'}}>
                        trees over one year
                    </Typography>
                </Box>
                <Typography variant="h3" sx={{color:'#116939', mt: '3%'}}>
                        Breakdown
                </Typography>
                <Box sx={{mt: '20px', justifyContent: 'center', display: 'flex', flexDirection: 'row'}}>
                    <Typography variant="h5" sx={{color:'#116939'}}>
                        {state.fromOffice}
                    </Typography>
                    <Typography variant="h5" sx={{ml: '10px'}}>
                        kg CO2-e from commuting to the office
                    </Typography>
                </Box>
                <Box sx={{mt: '20px', justifyContent: 'center', display: 'flex', flexDirection: 'row'}}>
                    <Typography variant="h5" sx={{color:'#116939'}}>
                        {state.fromHome}
                    </Typography>
                    <Typography variant="h5" sx={{ml: '10px'}}>
                        kg CO2-e from working from home
                    </Typography>
                </Box>
                <Button variant='contained' color='success' size='large' sx={{ mt: '5%', minWidth: '15vw'}} onClick={goHome}>
                    HOME
                </Button>
            </Container>
        </div>
    );
}

export default Result;