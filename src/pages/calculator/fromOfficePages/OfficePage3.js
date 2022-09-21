import {Box} from "@mui/system";
import {Typography} from "@mui/material";
import Grid from "@mui/material/Grid";
import React from "react";
import CommuteIcon from '@mui/icons-material/Commute';
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

function OfficePage3(props) {

    function updateDuration(value) {
        return (event) => {
            let temp = props.vehicleDays;
            temp[value] = event.target.value;
            props.setVehicleDays(temp);
        }
    }

    return (
        <>
            <Box sx={{paddingTop: '40px', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                <CommuteIcon fontSize='large' sx={{color:'#116939'}}/>
                <Typography variant='h6' sx={{ml: '10px'}}>For each vehicle mode selected - enter number of days</Typography>
            </Box>
            <Box sx={{paddingTop: '30px',flexDirection: 'row', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Grid container sx={{width: '60%'}}>
                    <Grid item xs={12} sx={{flexDirection: 'row', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                            {props.vehicles.map((value) => {
                                const labelId = `checkbox-list-label-${value}`;

                                return (
                                    <ListItem
                                        key={value}
                                    >
                                        <ListItemText id={labelId} primary={value} />
                                        <TextField
                                            label="Days"
                                            type="number"
                                            sx={{width: '12ch'}}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            InputProps={{
                                                endAdornment: <InputAdornment position="end">Days</InputAdornment>,
                                            }}
                                            color={'success'}
                                            required
                                            onChange={updateDuration(value)}
                                        />
                                    </ListItem>
                                );
                            })}
                        </List>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default OfficePage3;