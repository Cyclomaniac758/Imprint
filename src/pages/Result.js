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
                <Typography variant="h2" sx={{color:'#116939', mt: '5%'}}>
                    {state.result}
                </Typography>
                <Typography variant="h4" sx={{}}>
                    kg CO2 -e / year
                </Typography>
                <Box sx={{mt: '20px', justifyContent: 'center', display: 'flex', flexDirection: 'row'}}>
                    <Typography variant="h5" sx={{lineHeight: '2.835'}}>
                        This is equivalent to the CO2 absorbed by
                    </Typography>
                    <Typography variant="h3" sx={{color:'#116939', ml: '10px', mr: '10px'}}>{((Math.ceil(state.result/20)))}</Typography>
                    <Typography variant="h5" sx={{lineHeight: '2.835'}}>
                        trees in one year
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
                        kg CO2 -e / year from commuting to the office
                    </Typography>
                </Box>
                <Box sx={{mt: '20px', justifyContent: 'center', display: 'flex', flexDirection: 'row'}}>
                    <Typography variant="h5" sx={{color:'#116939'}}>
                        {state.fromHome}
                    </Typography>
                    <Typography variant="h5" sx={{ml: '10px'}}>
                        kg CO2 -e / year from working from home
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