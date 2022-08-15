import {Box} from "@mui/system";
import {Link, Typography} from "@mui/material";
import Grid from "@mui/material/Grid";
import React from "react";
import CommuteIcon from '@mui/icons-material/Commute';
import VehicleSelect from "./VehicleSelect";
import MultiModeModal from "./MultiModeModal";

function OfficePage2(props) {
    const [open, setOpen] = React.useState(false);
    const openModal = () => setOpen(true);
    const closeModal = () => setOpen(false);

    return (
        <>
            <MultiModeModal open={open} closeModal={closeModal}/>
            <Box sx={{paddingTop: '40px', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                <CommuteIcon fontSize='large' sx={{color:'#116939'}}/>
                <Typography variant='h6' sx={{ml: '10px'}}>Select travel mode/s used throughout the week</Typography>
            </Box>
            <Box sx={{paddingTop: '30px',flexDirection: 'row', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Grid container sx={{width: '60%'}}>
                    <Grid item xs={12} sx={{flexDirection: 'row', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <VehicleSelect vehicleNames={props.vehicles} setVehicleNames={props.setVehicles}/>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{mt: '30px'}}>
               <Link href='#' onClick={openModal}>
                    I use multiple modes in one trip
                </Link> 
            </Box>
            
        </>
    )
}

export default OfficePage2;