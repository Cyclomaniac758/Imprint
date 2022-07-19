import './Home.css';
import { Grid, Typography } from '@mui/material';
import { Container } from '@mui/system';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import Scenario from '../scenarios/Scenario';
import Logo from '../logo/Logo';
import React from "react";

function Home() {
    return (
        <div className="App">
            <Container >
                <header className='Home-header'>
                    <Logo/>
                </header>
                <div>
                    <Typography variant='subtitle1' sx={{mt: '5vh', mb: '9vh'}}>Calculate your carbon emissions today, to make tomorrow better!</Typography>
                    <div className='optionsLabel'>
                        <BusinessCenterOutlinedIcon fontSize='large' sx={{color: '#116939'}} align='left'/>
                        <div>
                            <Typography variant='h6' sx={{m: '10px', fontWeight: 'bold', fontFamily: 'Monospace'}}>Working arrangement</Typography>
                        </div>
                    </div>
                    <Grid container spacing={5}>
                        <Grid item xs={4}>
                            <Scenario scenario='From Home'/>
                        </Grid>
                        <Grid item xs={4}>
                            <Scenario scenario='In The Office'/>
                        </Grid>
                        <Grid item xs={4}>
                            <Scenario scenario='Hybrid'/>
                        </Grid> 
                    </Grid>        
                </div>
            </Container>
        </div>
    )
    
}

export default Home