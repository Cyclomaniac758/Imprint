import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Slider, Typography } from "@mui/material";
import { Box } from "@mui/system";

function Page1(props) {

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
        props.updateHours(event.target.value);
    }

    return (
        <>
            <Box sx={{paddingTop: '50px', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                <AccessTimeIcon fontSize="large" sx={{color: '#116939'}}></AccessTimeIcon>
                <Typography variant='h6' sx={{ml: '10px'}}>Select Average Time Spent In Virtual Meetings daily</Typography>
            </Box>
            <Box sx={{paddingTop: '30px',flexDirection: 'row', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Box sx={{width: '50%'}}>
                    <Slider defaultValue={0} min={0} max={8} marks={marks} step={.5} onChange={sliderChange}/>
                </Box>
            </Box>
        </>          
    )
}

export default Page1;
