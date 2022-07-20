import {Box} from "@mui/system";
import {Typography} from "@mui/material";
import Grid from "@mui/material/Grid";
import React from "react";
import CommuteIcon from '@mui/icons-material/Commute';
import VehicleSelect from "./VehicleSelect";

function OfficePage2(props) {

    return (
        <>
            <Box sx={{paddingTop: '40px', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                <CommuteIcon fontSize='large' sx={{color:'#116939'}}/>
                <Typography variant='h6' sx={{ml: '10px'}}>Commute type/s</Typography>
            </Box>
            <Box sx={{paddingTop: '30px',flexDirection: 'row', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Grid container sx={{width: '60%'}}>
                    <Grid item xs={12} sx={{flexDirection: 'row', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <VehicleSelect vehicleNames={props.vehicles} setVehicleNames={props.setVehicles}/>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default OfficePage2;