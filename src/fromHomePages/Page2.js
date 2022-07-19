import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Switch from "@mui/material/Switch";
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import WifiIcon from '@mui/icons-material/Wifi';
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import React from "react";

function Page2(props) {

    function updateCamera() {
        props.setCamera(!props.camera);
    }

    const updateConnection = (event) => {
        props.setConnection(event.target.value);
    };

    const updateZoom = (event) => {
        props.setZoom(event.target.value);
    };

    return (
        <>
            <Box sx={{paddingTop: '40px', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                <Typography variant='h6' sx={{ml: '10px'}}>Videoconferencing</Typography>
            </Box>
            <Box sx={{paddingTop: '30px',flexDirection: 'row', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Grid container sx={{width: '60%'}}>
                    <Grid item xs={12} sx={{flexDirection: 'row', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <RadioGroup
                            row
                            defaultValue={1}
                            >
                        <FormControlLabel value={1} onChange={updateZoom} control={<Radio />} label="ZOOM" />
                        <FormControlLabel value={0} onChange={updateZoom} control={<Radio />} label="Microsoft Teams" />
                    </RadioGroup>
                    </Grid>
                    <Grid item xs={12} sx={{mt: '30px', flexDirection: 'row', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <CameraAltIcon fontSize={'large'} sx={{color: '#116939'}}/>
                        <Typography variant='h6' sx={{mr: '15px'}}>Camera</Typography>
                        <Stack direction="row" spacing={0} alignItems="center">
                            <Typography variant='h7'>off</Typography>
                            <Switch defaultChecked onChange={updateCamera} />
                            <Typography variant='h7'>on</Typography>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} sx={{mt: '30px', flexDirection: 'row', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <WifiIcon fontSize={'large'} sx={{color: '#116939'}}/>
                        <Typography variant='h6'>Internet Connection Type</Typography>
                        <FormControl sx={{ml: '10px', minWidth: '30%'}}>
                            <InputLabel id="connection-type-select-label">Select</InputLabel>
                            <Select
                                labelId="connection-type-select-label"
                                label="Select"
                                value={props.connection}
                                displayEmpty
                                onChange={updateConnection}
                            >
                                <MenuItem value={1}>Fibre</MenuItem>
                                <MenuItem value={2}>VDSL</MenuItem>
                                <MenuItem value={3}>Fixed Wireless</MenuItem>
                                <MenuItem value={4}>HFC</MenuItem>
                            </Select>
                        </FormControl>

                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Page2;
