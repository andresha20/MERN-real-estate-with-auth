import { Grid, Card, Typography, Button, CardActions, CardMedia, CardContent, IconButton, InputLabel, Box, Divider } from '@material-ui/core';
import { Link } from 'react-router-dom';

import useStyles from './Styles';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import BathtubOutlinedIcon from '@material-ui/icons/BathtubOutlined';
import LocalHotelOutlinedIcon from '@material-ui/icons/LocalHotelOutlined';
import RoundedCornerOutlinedIcon from '@material-ui/icons/RoundedCornerOutlined';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const FetchedHouses = ({ houses, houseDetails, likePost, editPost }) => {

    const classes = useStyles();
    const errorURL = 'https://suitabletech.com/images/HelpCenter/errors/Lenovo-Camera-Error.JPG';

    return (
        <>
        {houses.map(house => (
            <Grid item xs={12} sm={6} md={3} lg={3} key={house._id} className={classes.item}>
                <Card className={classes.card} elevation={3}>
                    <CardMedia 
                        height='200'
                        component="img"
                        image={ house.selectedFiles.length > 0 ? house.selectedFiles[0] : errorURL }
                        />
                    <CardContent align='center'>
                        <Typography align='center' className={classes.link} component={Link} to={`/houses/${house._id}`} variant="h5" color='textPrimary' onClick={() => houseDetails(house._id)}>{house.title ? house.title : 'PROPERTY'}</Typography>
                        <InputLabel align='center'><Typography variant='caption'>Sale price</Typography></InputLabel>
                        <Typography align='center' variant="h6" color='textPrimary'>${house.price ? house.price : '0'}</Typography>
                        <Typography variant="body2" component='p' color='textPrimary'>{house.content}</Typography>
                        <Divider/>
                        <Grid container justify="space-between" alignItems="center" spacing={1} className={classes.inline}>
                            <Grid item xs={6} md={4}>
                                <Box >
                                    <Typography color='textSecondary' variant='caption' component='p' >Bathrooms</Typography>
                                    <BathtubOutlinedIcon color="disabled"/>
                                </Box>
                            </Grid>
                            <Grid item xs={6} md={4}>
                                <Box >
                                <Typography color='textSecondary' variant='caption' component='p' >Area</Typography>
                                <RoundedCornerOutlinedIcon color="disabled"/>
                                </Box>
                            </Grid>
                            <Grid item xs={6} md={4}>
                                <Box>
                                    <Typography color='textSecondary' variant='caption' component='p' >Bedrooms</Typography>
                                    <LocalHotelOutlinedIcon color="disabled"/>
                                </Box>
                            </Grid>
                        </Grid>
                    </CardContent>
                    <Divider/>
                    <CardActions>
                        <IconButton onClick={() => likePost(house._id)}><FavoriteIcon color={ JSON.parse(localStorage.getItem('profile')) && house.author === JSON.parse(localStorage.getItem('profile'))._id ? 'secondary' :'primary'}/>{house.favoriteCount.length > 1 ? house.favoriteCount.length - 1 : null}</IconButton>
                        <Button component={Link} to={`/houses/${house._id}`} variant='contained' fullWidth color='primary' size='small' onClick={() => houseDetails(house._id)}>Details</Button>
                        {JSON.parse(localStorage.getItem('profile')) && house.author === JSON.parse(localStorage.getItem('profile'))._id ? (<>
                        <IconButton aria-label="more" aria-controls="long-menu" aria-haspopup="true" onClick={() => editPost(house._id)}><EditIcon /></IconButton>
                        </>):(<IconButton disabled></IconButton>)}
                    </CardActions>
                </Card>
            </Grid>
            ))
        }
    </>)
}

export default FetchedHouses;