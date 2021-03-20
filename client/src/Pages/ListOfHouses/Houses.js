import { useGlobalContext } from '../../context';
import { Grid } from '@material-ui/core';
import React from 'react';

import useStyles from './Styles';
import HousesList from '../../Components/Houses/HousesList';
import SearchBar from '../../Components/SearchBar/SearchBar';
import Loading from '../../Components/Global/Loading';

const Houses = () => {

    const { loading } = useGlobalContext();
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <SearchBar/>
            {loading ? (<Grid item xs={12} sm={12} align='center' className={classes.grid}>
                                <Loading/>
                        </Grid>) : <HousesList/>}
        </div>
    )
}


export default Houses;