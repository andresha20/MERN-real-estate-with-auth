import { Grid, TextField } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { useGlobalContext } from '../../context';

const SearchBar = () => {

    const { setSearchHouse, houses, setLoading } = useGlobalContext();
    const [searchText, setSearchText] = useState('');

    const filterHouses = async (event) => {

        try {
            const filteredHouses = await houses.filter(house => house.title.toLowerCase().includes(event.toLowerCase()));
            console.log(filteredHouses)
            setSearchHouse([...filteredHouses]);
        } catch (error) {
            console.log(error);
        }
    }

    // useEffect(() => {
    //     filterHouses();
    // }, [searchText])
    
    return (
        <Grid container>
            <TextField variant='outlined' fullWidth placeholder='Looking for a house to buy? Look no more!' onChange={(e) => filterHouses(e.target.value)}/>
        </Grid>
    )
}

export default SearchBar;