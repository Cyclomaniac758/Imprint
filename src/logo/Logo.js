import logo from '../logo.png';
import { Typography } from '@mui/material';
import './Logo.css'
import { Link } from 'react-router-dom'


function Logo() {
    return (
            <div className='Title'>
                <Link to={'/'} className='Title' style={{ textDecoration: 'none' }}>
                    <img src={logo} className="App-logo" alt="" />
                    <Typography variant='h3' sx={{m: '10px', color:'#116939', fontFamily: 'Monospace'}}>Greenhouse</Typography>
                    <img src={logo} className="App-logo" alt="" />
                </Link>
            </div>
    )
}

export default Logo;