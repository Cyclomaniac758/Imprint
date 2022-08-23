import {Slider, Typography} from "@mui/material";
import { Box } from "@mui/system";
import Grid from "@mui/material/Grid";
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import AccessTimeIcon from '@mui/icons-material/AccessTime';

function Page3(props) {

    const marks = [
        {
            value: 0,
            label: '0hrs'
        },
        {
            value: .5,
        },
        {
            value: 1,
            label: '1'
        },
        {
            value: 1.5,
        },
        {
            value: 2,
            label: '2'
        },
        {
            value: 2.5,
        },
        {
            value: 3,
            label: '3'
        },
        {
            value: 3.5,
        },
        {
            value: 4,
            label: '4'
        },
        {
            value: 4.5,
        },
        {
            value: 5,
            label: '5'
        },
        {
            value: 5.5,
        },
        {
            value: 6,
            label: '6'
        },
        {
            value: 6.5,
        },
        {
            value: 7,
            label: '7'
        },
        {
            value: 7.5,
        },
        {
            value: 8,
            label: '8hrs'
        }
    ];

    function sliderChange(event) {
        props.setHeatingHours(event.target.value);
    }

    function updateHeating(event) {
        props.setHeating(event.target.value);
    }

    return (
        <>
            <Box sx={{paddingTop: '40px', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                <AccessTimeIcon fontSize="large" sx={{color: '#116939'}}></AccessTimeIcon>
                <Typography variant='h6' sx={{ml: '10px'}}>Select time using heating in work hours during winter</Typography>
            </Box>
            <Box sx={{paddingTop: '30px',flexDirection: 'row', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Grid container sx={{width: '60%'}}>
                    <Grid item xs={12} sx={{flexDirection: 'row', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <Slider defaultValue={0} min={0} max={8} marks={marks} step={.5} onChange={sliderChange}/>
                    </Grid>
                    <Grid item xs={12} sx={{mt: '30px', flexDirection: 'row', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <LocalFireDepartmentIcon fontSize={'large'} sx={{color: '#116939'}}/>
                        <Typography variant='h6' sx={{ml: '10px'}}>Select heating technology</Typography>
                    </Grid>
                    <Grid item xs={12} sx={{mt: '30px', flexDirection: 'row', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <RadioGroup
                            row
                            defaultValue={1}
                        >
                            <FormControlLabel value={'Heatpump'} onChange={updateHeating} control={<Radio />} label="Heatpump" />
                            <FormControlLabel value={'Electric'} onChange={updateHeating} control={<Radio />} label="Electric heater" />
                            <FormControlLabel value={'Woodburner'} onChange={updateHeating} control={<Radio />} label="Wood stove" />
                        </RadioGroup>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Page3;
