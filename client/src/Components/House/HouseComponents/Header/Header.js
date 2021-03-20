import { Grid, Card, Typography} from '@material-ui/core';

import useStyles from './Styles';

const Header = ({ individualHouse }) => {

    const classes = useStyles();

    return (
        <>
            <Grid component='div' item md={10} >
                <Card elevation={0}>
                    <Typography variant='caption' color='textSecondary'>Property</Typography>
                    <Typography variant='h4' color='textPrimary'>{individualHouse.title}</Typography>
                </Card>
            </Grid>
            <Grid component='div' item md={2} >
                <Card className={classes.card} elevation={0}>
                    <Typography variant='caption' color='textSecondary'>Price</Typography>
                    <Typography variant='h4' color='textPrimary'>${individualHouse.price}</Typography>
                </Card>
            </Grid>
        </>
    )
}

export default Header;