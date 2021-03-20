import { Grid, Card, Paper, Typography, Box, Divider, List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core';

import AccordionComponent from './Accordion';
import ListComponent from './List';

import useStyles from './Styles';
import BathtubOutlinedIcon from '@material-ui/icons/BathtubOutlined';
import LocalHotelOutlinedIcon from '@material-ui/icons/LocalHotelOutlined';
import RoundedCornerOutlinedIcon from '@material-ui/icons/RoundedCornerOutlined';

const Content = ({ individualHouse }) => {

    const classes = useStyles();

    return (
        <>
            <Grid container justify='space-between' className={classes.root}>
                <Grid item direction='row' xs={12} sm='auto' lg='auto' className={classes.item}>
                    <Box className={classes.box}>
                        <Typography variant='h4' color='textPrimary'>Location</Typography>
                        <Typography variant='body1' color='textPrimary'>location</Typography>
                    </Box>
                </Grid>
                <Divider orientation="vertical" flexItem />
                <Grid item className={classes.item}>
                    <Box className={classes.box}>
                        <Typography variant='body1' color='textSecondary'>7</Typography>
                        <Typography variant='body1' color='textSecondary'>Bathrooms</Typography>
                        <BathtubOutlinedIcon color='disabled'/>
                    </Box>
                </Grid >
                <Divider orientation="vertical" flexItem />
                <Grid item className={classes.item}>
                    <Box className={classes.box}>
                        <Typography variant='body1' color='textSecondary'>5</Typography>
                        <Typography variant='body1' color='textSecondary'>Bedrooms</Typography>
                        <LocalHotelOutlinedIcon color='disabled'/>
                    </Box>
                </Grid>
                <Divider orientation="vertical" flexItem />
                <Grid item className={classes.item}>
                    <Box className={classes.box}>
                        <Typography variant='body1' color='textSecondary'>59</Typography>
                        <Typography variant='body1' color='textSecondary'>Square meters</Typography>
                        <RoundedCornerOutlinedIcon color='disabled'/>
                    </Box>
                </Grid>
            </Grid>
            <Grid container className={classes.root}>
                <Grid item direction='row' xs={12} sm='auto' lg='auto' className={classes.item}>
                    <Typography component='p' className={classes.box} variant='body2' color='textPrimary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus sequi inventore ut mollitia cumque qui atque ipsa accusamus est similique, commodi, sunt asperiores sint vel recusandae ab enim. Cupiditate dolores itaque eum nemo hic minima necessitatibus possimus maxime, vitae nulla.</Typography>
                </Grid>
                <Grid container>
                    <Typography className={classes.box} variant='h6' color='textPrimary'>Main information about the property</Typography>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <ListComponent />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <ListComponent />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <ListComponent />
                </Grid>
            </Grid>
            <Grid container className={classes.root}>
                <Grid item xs={12}>
                    <Typography className={classes.box} variant='h4' color='textPrimary'>Features</Typography>
                </Grid>
                <Grid item xs={12}>
                    <AccordionComponent/>
                    <AccordionComponent/>
                    <AccordionComponent/>
                    <AccordionComponent/>
                    <AccordionComponent/>
                    <AccordionComponent/>
                    <AccordionComponent/>
                    <AccordionComponent/>
                    <AccordionComponent/>
                    <AccordionComponent/>
                    <AccordionComponent/>
                    <AccordionComponent/>
                    <AccordionComponent/>
                    <AccordionComponent/>
                    <AccordionComponent/>
                    <AccordionComponent/>
                    <AccordionComponent/>
                    <AccordionComponent/>
                </Grid>
            </Grid>
        </>
    )
}

export default Content;