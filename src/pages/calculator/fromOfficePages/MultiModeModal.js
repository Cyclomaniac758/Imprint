import Modal from '@mui/material/Modal';
import {Box} from "@mui/system";
import {Typography} from "@mui/material";
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import { Grid, Button } from '@mui/material';
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { useTheme } from '@mui/material/styles';
import React, { useState } from "react";

const modalStyle = {
    position: 'absolute',
    top: '30%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'white',
    border: '2px solid #000',
    boxShadow: 50,
    p: 4,
    textAlign: 'center'
};

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 400,
        },
    },
};

const vehicles = [
    'Car-Petrol',
    'Car-Diesel',
    'Car-Electric',
    'Car-Diesel Hybrid',
    'Car-Petrol Hybrid',
    'Car-Petrol Plug-in Hybrid',
    'Car-Diesel Plug-in Hybrid',
    'Bus',
    'Motorcycle <60cc',
    'Motorcycle >60cc',
    'Rail',
    'Taxi',
    'Electric Scooter',
    'Electric Bicycle',
    'Walking/Biking',
];

function getStyles(name, vehicleName, theme) {
    return {
        fontWeight:
            vehicleName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

function MultiModeModal(props) {
    const theme = useTheme();
    const [mode1, setMode1] = useState([]);
    const [dist1, setDist1] = useState(0);
    const [mode2, setMode2] = useState([]);
    const [dist2, setDist2] = useState(0);
    const [disableCreate, setDisableCreate] = useState(true);

    const changeMode1 = (event) => {
        const {
            target: { value },
        } = event;
        setMode1(
            [value]
        );
        canCreate(value, mode2, dist1, dist2);
        console.log(mode1)
    };

    const changeDist1 = (event) => {
        const {
            target: { value },
        } = event;
        setDist1(
            value
        );
        canCreate(mode1, mode2, value, dist2);
        console.log(dist1)
    };

    const changeMode2 = (event) => {
        const {
            target: { value },
        } = event;
        setMode2(
            [value]
        );
        canCreate(mode1, value, dist1, dist2);
        console.log(mode2)
    };

    const changeDist2 = (event) => {
        const {
            target: { value },
        } = event;
        setDist2(
            value
        );
        canCreate(mode1, mode2, dist1, value);
        console.log(dist2)
    };

    function create() {
        const filteredVehicleNames = props.vehicleNames.filter(vehicle => !vehicle.includes('+'))
        const multiName = mode1[0]+'+'+mode2[0];
        const newVehicles = filteredVehicleNames.concat([multiName])
        props.setVehicleNames(newVehicles);

        let newMultiVehicle = {};
        newMultiVehicle[mode1[0]] = dist1;
        newMultiVehicle[mode2[0]] = dist1;
        props.setMultiVehicle(newMultiVehicle);
        props.closeModal();
    }

    function canCreate(checkmode1, checkmode2, checkdist1, checkdist2) {
        setDisableCreate(!(checkmode1.length>0 && checkmode2.length>0 && checkdist1>0 && checkdist2>0));
    }

    return (
        <Modal
            open={props.open}
            onClose={props.closeModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={modalStyle}>
                <Typography id="modal-modal-title" variant="h6">
                    Add a multi mode trip to work
                </Typography>
                <Grid container>
                    <Grid item xs={6} sx={{mt: '5%'}}>
                    <Typography variant="subtitle1">Select mode</Typography>
                    </Grid>
                    <Grid item xs={6} sx={{mt: '5%'}}>
                        <Typography variant="subtitle1">Enter distance</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Box sx={{mt: '15px'}}>
                            <FormControl sx={{ m: 0, width: 200 }} required>
                            <InputLabel>Select first mode</InputLabel>
                            <Select
                                value={mode1}
                                onChange={changeMode1}
                                input={<OutlinedInput label="Select first mode" />}
                                renderValue={(selected) => (
                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                        {selected.map((value) => (
                                            <Chip key={value} label={value} />
                                        ))}
                                    </Box>
                                )}
                                MenuProps={MenuProps}
                            >
                                {vehicles.map((vehicle) => (
                                    <MenuItem
                                        key={vehicle}
                                        value={vehicle}
                                        style={getStyles(vehicle, props.vehicleNames, theme)}
                                    >
                                        {vehicle}
                                    </MenuItem>
                                ))}
                            </Select>
                            </FormControl>
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box sx={{mt: '20px'}}>
                            <TextField
                                defaultValue={dist1}
                                label="Kilometres"
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
                                onChange={changeDist1}
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box sx={{mt: '15px'}}>
                            <FormControl sx={{ width: 200 }} required>
                            <InputLabel>Select second mode</InputLabel>
                            <Select
                                value={mode2}
                                onChange={changeMode2}
                                input={<OutlinedInput label="Select second mode" />}
                                renderValue={(selected) => (
                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                        {selected.map((value) => (
                                            <Chip key={value} label={value} />
                                        ))}
                                    </Box>
                                )}
                                MenuProps={MenuProps}
                            >
                                {vehicles.map((vehicle) => (
                                    !mode1.includes(vehicle) && <MenuItem
                                        key={vehicle}
                                        value={vehicle}
                                        style={getStyles(vehicle, props.vehicleNames, theme)}
                                    >
                                        {vehicle}
                                    </MenuItem>
                                ))}
                            </Select>
                            </FormControl>
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box sx={{mt: '20px'}}>
                            <TextField
                                defaultValue={dist2}
                                label="Kilometres"
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
                                onChange={changeDist2}
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant='contained' color='success' size='large' sx={{mt: '50px  ', mr: '20px'}} onClick={props.closeModal}>{'CANCEL'}</Button>
                        <Button variant='contained' color='success' size='large' sx={{mt: '50px  '}} onClick={create} disabled={disableCreate}>{'CREATE'}</Button>
                    </Grid>
                </Grid>
            </Box>
        </Modal>
    )
}

export default MultiModeModal;