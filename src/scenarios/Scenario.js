import { Card , CardActionArea, Typography } from '@mui/material';
import home from '../images/home.jpg';
import office from '../images/office.jpg';
import hybrid from '../images/hybrid.jpg';
import { Link } from 'react-router-dom'

function Scenario(props) {
    function calculateLink() {
        if (props.scenario === 'From Home') {
            return '/fromHome'
        } else if (props.scenario === 'In The Office') {
            return '/inTheOffice'
        } else if (props.scenario === 'Hybrid') {
            return '/hybrid'
        }
    }

    return (
            <Link to={calculateLink()} style={{ textDecoration: 'none' }}>
                <Card>
                <CardActionArea>
                <Typography variant='h6' sx={{fontWeight: '500'}}>{props.scenario}</Typography>
                    {props.scenario==='From Home' && <img src={home} height='auto' width='100%' alt="logo" />}
                    {props.scenario==='In The Office' && <img src={office} height='auto' width='100%' alt="logo" />}
                    {props.scenario==='Hybrid' && <img src={hybrid} height='auto' width='100%' alt="logo" />}  
                </CardActionArea>
                </Card>
            </Link>
    )
}

export default Scenario;