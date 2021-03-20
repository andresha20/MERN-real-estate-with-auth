import { useGlobalContext } from '../../../../context';
import { useState } from 'react';
import { Grid, Card } from '@material-ui/core';

import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import useStyles from './Styles';
import Loading from '../../../Global/Loading';

const Carrousel = () => {

    const [index, setIndex] = useState(0);
    const { individualHouse } = useGlobalContext();
    const classes = useStyles();    

    const nextImage = () => {
        if (individualHouse) {
            if (index === individualHouse.selectedFiles.length - 1) return setIndex(0);
            let newIndex = index + 1;
            return setIndex(newIndex);
        }
    }
    
    const previousImage = () => {
        if (individualHouse) {
            if (index === 0) return setIndex(individualHouse.selectedFiles.length - 1)
            let newIndex = index - 1;
            return setIndex(newIndex);
        }
    }
    
    return (
        <>
            <Grid container justify='center' className={classes.imageContainerBackground}>
                <div>
                    {individualHouse.selectedFiles === undefined ? (<Loading/>) : (<img className={classes.maxHeightMaxWidth} src={individualHouse.selectedFiles[index]} alt={individualHouse.title}/>)}
                </div>
            </Grid>
            <Grid container justify='center'>
                <Grid item >
                    <DoubleArrowIcon fontSize='large' color='primary' className={`${classes.rotateLeft} ${classes.arrows}`} onClick={previousImage}/>
                </Grid>
                <Grid item >
                    <DoubleArrowIcon fontSize='large' color='primary' className={classes.arrows} onClick={nextImage}/>
                </Grid>
            </Grid>
        </>
    )
}

export default Carrousel;