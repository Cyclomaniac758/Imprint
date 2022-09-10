import './pages.css'
import Logo from "../logo/Logo";
import React from "react";
import Typography from "@mui/material/Typography";
import {useLocation, useNavigate} from "react-router-dom";
import {Container} from "@mui/system";
import Button from "@mui/material/Button";
import { Box } from '@mui/system';
import ReactApexChart from 'react-apexcharts';
import { Divider, Grid } from '@mui/material';

function Result() {
    const {state} = useLocation();
    const navigate = useNavigate();

    function goHome() {
        navigate('/');
    }

    const chart = {
          
        series: [state.fromHome, state.fromOffice],
        options: {
          chart: {
            width: '80%',
            type: 'pie',
          },
          labels: ["Working From Home", "Working In The Office"],
          theme: {
            monochrome: {
              enabled: true,
              color: '#116939',
            }
          },
          plotOptions: {
            pie: {
              dataLabels: {
                offset: -5
              },
              customScale: 1
            }
          },
          title: {
            text: "Break it down"
          },
          dataLabels: {
            formatter(val, opts) {
              const name = opts.w.globals.labels[opts.seriesIndex]
              return [name, val.toFixed(1) + '%']
            }
          },
          legend: {
            show: false
          }
        },
      };

    return (
        <div className='page'>
            <header className="heading">
                <Logo/>
            </header>
            <Container sx={{textAlign: "center", justifyContent: 'center'}}>
                <Grid container sx={{justifyContent: 'center'}}>
                    <Grid item xs={7}>
                        {/* <Typography variant="h5" sx={{mt: '5%'}}>
                            By working from home and in the office you emit
                        </Typography> */}
                        <Divider sx={{mt: '10%'}}></Divider>
                        <Box sx={{ml: '10%', display: 'flex', flexDirection: 'row'}}>
                            <Typography variant="h5" sx={{lineHeight: '3'}}>
                                you are emitting
                            </Typography>
                            <Typography variant="h2" sx={{color:'#116939', ml: '3%', mr: '3%'}}>
                            {state.result}
                            </Typography>
                            <Typography variant="h5" sx={{lineHeight: '3'}}>
                                kilograms
                            </Typography>
                        </Box>
                        <Box sx={{ml: '10%', display: 'flex', flexDirection: 'row'}}>
                        <Typography variant="h5">
                            of carbon dioxide equivalent every year
                            </Typography> 
                        </Box>
                        
                        {/* <Box sx={{mt: '20px', display: 'flex', flexDirection: 'row'}}> */}
                            {/* <Typography variant="h5" sx={{mt: '5%'}}>
                                This is offset by the CO2 absorbed by
                            </Typography> */}
                            <Divider sx={{mt: '20px'}}></Divider>
                            <Box sx={{ml: '10%', display: 'flex', flexDirection: 'row'}}>
                                <Typography variant="h2" sx={{color:'#9c27b0', mr: '3%'}}>{((Math.ceil(state.result/21)))}</Typography>
                                <Typography variant="h5" sx={{lineHeight: '3'}}>
                                    trees need to be planted each year to offset this
                                </Typography>   
                            </Box>
                            {/* <Typography variant="h5" sx={{}}>
                                need to be planted to offset this
                            </Typography> */}
                        {/* </Box> */}
                        {/* <Typography variant="h3" sx={{color:'#116939', mt: '3%'}}>
                                Breakdown
                        </Typography> */}
                        <Divider sx={{mt: '10px'}}/>
                        <Box sx={{ml: '10%', mt: '20px', display: 'flex', flexDirection: 'row'}}>
                            <Typography variant="h5" sx={{mr: '10px'}}>
                                commuting to the office contributes
                            </Typography>
                            <Typography variant="h5" sx={{color:'#116939'}}>
                                {state.fromOffice}
                            </Typography>
                            <Typography variant="h5" sx={{ml: '10px'}}>
                                kg
                            </Typography>
                        </Box>
                        <Box sx={{ml: '10%', mt: '3%', display: 'flex', flexDirection: 'row'}}>
                            <Typography variant="h5" sx={{mr: '10px'}}>
                                working from home contributes
                            </Typography>
                            <Typography variant="h5" sx={{color:'#116939'}}>
                                {state.fromHome}
                            </Typography>
                            <Typography variant="h5" sx={{ml: '10px'}}>
                                kg
                            </Typography>
                        </Box>
                        <Box sx={{textAlign: 'right', mt: '10%'}}>
                            <Button variant='contained' color='success' size='large' sx={{ mt: '5%', minWidth: '15vw'}} onClick={goHome}>
                                RESTART
                            </Button>
                        </Box>
                    </Grid>
                    <Grid item xs={5}>
                        <ReactApexChart options={chart.options} series={chart.series} type="pie" />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default Result;