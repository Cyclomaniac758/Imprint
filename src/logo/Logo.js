import logo from '../logo.png';
import { Typography } from '@mui/material';
import './Logo.css'


function Logo() {
    return (
        <div className='Title'>
            <img src={logo} className="App-logo" alt="" />
            <Typography variant='h3' sx={{m: '10px', color:'#116939', fontFamily: 'Monospace'}}>Greenhouse</Typography>
            <img src={logo} className="App-logo" alt="" />
        </div>
    )
}

export default Logo;