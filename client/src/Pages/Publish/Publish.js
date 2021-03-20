import { Grid, Paper, Typography, TextField, Button, Select, MenuItem, InputLabel } from '@material-ui/core';
import { useGlobalContext } from '../../context';
import React, { useState, useEffect, memo} from 'react';

import useStyles from './Styles';
import axios from 'axios';
import Loading from '../../Components/Global/Loading';
import UploadFile from '../../Components/Form/UploadFile/UploadFile';

const Publish = React.memo(() => {
    
    const url = 'http://localhost:4000/houses';
    const classes = useStyles();
    const { publish, setPublish, loading, setLoading, images, setNewPost } = useGlobalContext();
    const [uploadedImages, setUploadedImages] = useState([]);
    let arrayOfLinks = [];

    const fetchData = async () => {

            if (localStorage.getItem('profile')) {

                try {
                    setLoading(true);

                    const response = await axios.post(`${url}`, {
                        title: publish.title,
                        price: publish.price,
                        selectedFiles: uploadedImages
                    }, { headers: {
                        'Authorization': `${JSON.parse(localStorage.getItem('profile')).token}`
                    }})
                    setNewPost(true);
                    setLoading(false);   
    
                    console.log('Posted data');
                } catch (error) {
                    console.log(error);
                }
            }
            
            setLoading(false);   
            setNewPost(false);   
    }

    const uploadImages = async () => {

        setLoading(true);
        
            const uploadAllImages = images.map(image => {
                let imagesData = new FormData();
                imagesData.append('file', image.src);
                imagesData.append('upload_preset', 'fmodfijq');
                return finalUploadOfImage(imagesData);
            });

            try {
                const response = await axios.all(uploadAllImages);
                arrayOfLinks = [...response];
                setUploadedImages([...arrayOfLinks]);
                setPublish({ ...publish, selectedFiles: uploadedImages })

            } catch (error) {
                console.log(error);
            }
    }

    const finalUploadOfImage = async (imagesData) => {

        try {
            const { data } = await axios.post(`${process.env.REACT_APP_IMAGESURL}`, imagesData);
            const obtainedURL = data.url;
            return obtainedURL;

        } catch (error) {
            console.log(error);
        }
    }

    const handleFormSubmission = (e) => {
        e.preventDefault();
        uploadImages();
    }

    useEffect(() => {
        console.log('Publish rendered')
        if (uploadedImages.length > 0) {
            fetchData();
        }
    }, [uploadedImages])

    return (
        <div className={classes.root}>
            <Grid container spacing={5} justify='center'>
                <Typography className={classes.title} variant="h4" color="textSecondary">Publish a property for free!</Typography>
                {loading ? (<Grid item xs={12} sm={12} align='center'>
                                <Loading/>
                            </Grid>) : null }
            </Grid>
            <Grid container spacing={5} className={classes.mainContainer}>
                <Grid item xs={12} sm={5}>
                    <Paper elevation={0}>
                        <Typography variant="body1">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate, deleniti consequatur asperiores blanditiis sunt nobis. Aliquam illo cumque, ipsam, voluptatem ab nemo est consequatur ex incidunt saepe nam soluta. Dolore accusantium nisi magnam debitis odio animi labore, optio odit repellendus?</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={7}>
                    <Paper elevation={3}  className={classes.form} onSubmit={handleFormSubmission}>
                        <form autoComplete="off" noValidate >
                            <Typography className={classes.input} align='center' variant="h5">INCLUDE A FEW DETAILS</Typography>
                            <InputLabel>How do you want to advertise your property? *</InputLabel>
                            <TextField className={classes.input} required name='Title' placeholder='Be creative!' variant='outlined' fullWidth onChange={(e) => setPublish({ ...publish, title: e.target.value })}/>
                            <InputLabel>Price *</InputLabel>
                            <TextField className={classes.input} required name='Price' variant='outlined' fullWidth onChange={(e) => setPublish({ ...publish, price: e.target.value })}/>
                            <InputLabel>Social Status *</InputLabel>
                            <TextField className={classes.input} required name='Social-Status' type='number' variant='outlined' fullWidth onChange={(e) => setPublish({ ...publish, socialStatus: e.target.value })}/>
                                <div>
                                <InputLabel>Photos *</InputLabel>
                                    <UploadFile/>
                                </div>
                            <Button variant='contained' fullWidth type='submit' color='primary' size='large' >Publish</Button>
                        </form>

                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
})

Publish.whyDidYouRender = true


export default Publish;