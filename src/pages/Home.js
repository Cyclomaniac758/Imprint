import './Home.css';
import { Grid, Typography } from '@mui/material';
import { Container } from '@mui/system';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import Scenario from '../scenarios/Scenario';
import Logo from '../logo/Logo';

function Home() {
    return (
        <div className="App">
            <Container >
                <header className='Home-header'>
                    <Logo></Logo>
                </header>
                <body>
                    <Typography variant='subtitle1' sx={{mt: '5vh', mb: '9vh'}}>Calculate your carbon emissions today, to make tomorrow better!</Typography>
                    <div className='optionsLabel'>
                        <BusinessCenterOutlinedIcon fontSize='large' sx={{color: '#116939'}} align='left'></BusinessCenterOutlinedIcon>
                        <div>
                            <Typography variant='h6' sx={{m: '10px', fontWeight: 'bold', fontFamily: 'Monospace'}}>Working arrangement</Typography>
                        </div>
                    </div>
                    <Grid container spacing={5}>
                        <Grid item xs={4}>
                            <Scenario scenario='From Home'></Scenario>
                        </Grid>
                        <Grid item xs={4}>
                            <Scenario scenario='In The Office'></Scenario>
                        </Grid>
                        <Grid item xs={4}>
                            <Scenario scenario='Hybrid'></Scenario>
                        </Grid> 
                    </Grid>        
                </body>
            </Container>
        </div>
    )
    
}

export default Home