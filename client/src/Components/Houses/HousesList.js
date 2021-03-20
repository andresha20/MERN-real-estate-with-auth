import { Grid, Card, Typography, Button, CardActions, CardMedia, CardContent, IconButton, InputLabel, Box, Divider } from '@material-ui/core';
import { useGlobalContext } from '../../context';
import { useState, useEffect } from 'react';

import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import BathtubOutlinedIcon from '@material-ui/icons/BathtubOutlined';
import LocalHotelOutlinedIcon from '@material-ui/icons/LocalHotelOutlined';
import RoundedCornerOutlinedIcon from '@material-ui/icons/RoundedCornerOutlined';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom';
import useStyles from './Styles';
import axios from 'axios';
import FetchedHouses from './FetchedHouses';
import FilteredHouses from './FilteredHouse';

const HousesList = () => {

    const { houses, setIndividualHouse, searchHouse } = useGlobalContext();
    const url = 'http://localhost:4000/houses';
    const classes = useStyles();

    useEffect(() => {
        console.log('List of houses')
    }, [houses])
    

    if (houses.length === 0) return (
        <Grid container justify='center' className={classes.root}>
            <Typography variant='h5' color='textPrimary'>There are no houses to display. We are sorry!</Typography>
        </Grid>
    )

    const houseDetails = (clickedHouseID) => {
        const result = houses.find(({ _id }) => _id === clickedHouseID );
        return setIndividualHouse(result);
    }


    const likePost = async (id) => {
        if (localStorage.getItem('profile')) {
            try {
                const response = await axios.patch(`${url}/${id}/likePost`, {}, { headers: {
                    'Authorization': `${JSON.parse(localStorage.getItem('profile')).token}`
                }});
                console.log(response);
            } catch (error) {
                console.log(error);
            }
        }      
    }

    const editPost = async (id) => {
        console.log(id);
        try {
            // const response = await axios.patch(`${url}/${id}`, {}, { headers: {
            //      'Authorization': `${JSON.parse(localStorage.getItem('profile')).token}`
            //     }})
            // console.log(response);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Grid container spacing={3} className={classes.root}>
            {searchHouse.length < 1
                ? <FetchedHouses houses={houses} houseDetails={houseDetails} likePost={likePost} editPost={editPost}/>
                : <FilteredHouses houses={houses} houseDetails={houseDetails} searchHouse={searchHouse} likePost={likePost} editPost={editPost}/>
            }
        </Grid>
    )
}

export default HousesList;