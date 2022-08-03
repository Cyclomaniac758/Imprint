import {Box} from "@mui/system";
import {Typography} from "@mui/material";
import Grid from "@mui/material/Grid";
import React from "react";
import CommuteIcon from '@mui/icons-material/Commute';
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import {Link} from "@mui/material";

function OfficePage1(props) {

    function updateDistance(event) {
        props.setDistance(event.target.value);
        console.log(event.target.value);
    }

    return (
        <>
            <Box sx={{paddingTop: '40px', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                <CommuteIcon fontSize='large' sx={{color:'#116939'}}/>
                <Typography variant='h6' sx={{ml: '10px'}}>Enter Approximate Daily Commute Distance</Typography>
                
            </Box>
            <Typography variant='h6' sx={{ml: '10px'}}>(one way)</Typography>
            <Box sx={{paddingTop: '30px',flexDirection: 'row', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Grid container sx={{width: '60%'}}>
                    <Grid item xs={12} sx={{flexDirection: 'row', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <TextField
                            label="Distance"
                            type="number"
                            sx={{width: '12ch'}}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            InputProps={{
                                endAdornment: <InputAdornment position="end">km</InputAdornment>,
                            }}
                            color={'success'}
                            required
                            onChange={updateDistance}
                        />
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{paddingTop: '30px'}}>
                <Link href="https://www.google.com/maps" target="_blank">Google maps link</Link>
            </Box>
        </>
    )
}

export default OfficePage1;