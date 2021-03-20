import { useGlobalContext } from '../../context';
import { useParams } from 'react-router-dom';
import { Grid, Paper, Card, Typography, CardContent } from '@material-ui/core';
import { Link } from 'react-router-dom';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Carrousel from './HouseComponents/Carrousel/Carrousel';
import Header from './HouseComponents/Header/Header';
import Content from './HouseComponents/Content/Content';
import Sidebar from './HouseComponents/Sidebar/Sidebar';
import useStyles from './Styles';
import Loading from '../Global/Loading';


const House = () => {

    const { id } = useParams();
    const { individualHouse, houses, setIndividualHouse } = useGlobalContext();
    const classes = useStyles();

    window.onload = () => {
        if (Object.keys(individualHouse).length === 0 || individualHouse === undefined) {
                const currentHouse = houses.find(({ _id }) => _id === id);
                return setIndividualHouse(currentHouse);
        }
    }

    return (
        <div className={classes.root}>
            <Grid container justify='space-between' className={classes.routes}>
                <div className={classes.card2}>
                    <Typography variant='body1' color='textPrimary'>{`Houses > ${individualHouse.title}`}</Typography>
                </div>
                <div className={classes.card2}>
                    <ArrowBackIcon/>
                    <Typography component={Link} to='/houses' variant='body1' color='textPrimary'>Go back</Typography>
                </div>
            </Grid>
            <Grid container justify='space-between' className={classes.title}>
                <Header individualHouse={individualHouse}/>
            </Grid>
            <Grid container>
                <Carrousel individualHouse={individualHouse}/>
            </Grid>
            <Grid container spacing={2}>
                <Grid item sm={9}>
                    <Content individualHouse={individualHouse}/>
                </Grid>
                <Grid item sm={3}>
                    <Sidebar />
                </Grid>
            </Grid>
        </div>
    )
}

export default House;