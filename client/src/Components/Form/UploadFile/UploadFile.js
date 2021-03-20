import React, { useState, useEffect, memo } from 'react';
import { useGlobalContext } from '../../../context';
import { Grid, Typography, Paper, Button } from '@material-ui/core';

import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import useStyles from './Styles';

const UploadFile = React.memo(() => {

    const { images, setImages } = useGlobalContext();
    const [overContainer, setOverContainer] = useState(false);
    const [isInvalidFile, setIsInvalidFile] = useState(false);
    const classes = useStyles();
    const arrayOfImages = [];

    const containerOver = (e) => {
        e.preventDefault();
        setOverContainer(true);
    }

    const containerLeave = (e) => {
        e.preventDefault();
        setOverContainer(false);
    }

    const manualFileUploadChange = (e) => {
        e.preventDefault();
        const uploadedImages = e.target.files;
        const arrayOfUploadedImages = Object.values(uploadedImages);

        arrayOfUploadedImages.map(file => readImage(file));
    }

    const onFilesDragDrop = (e) => {
        e.preventDefault();
        setOverContainer(false);
        const uploadedImages = e.dataTransfer.files;
        const array = Object.values(uploadedImages);
        array.map(file => {
            readImage(file);
        })
    }

    const readImage = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            if (file.type === 'image/jpeg' || file.type === 'image/png') {
                setIsInvalidFile(false);

                let newImage = {
                    name: file.name,
                    size: file.size,
                    type: file.type,
                    src: reader.result
                }
                arrayOfImages.push(newImage);
                return setImages([...images, ...arrayOfImages]);
                
            } else {
                setIsInvalidFile(true);
                return setTimeout(() => {
                    return setIsInvalidFile(false);
                }, 3000);;
            }
        }
    }

    const deleteImage = (index) => {
        let currentImagesArray = [...images];
        let removedItem = currentImagesArray.splice(index, 1);
        return setImages([...currentImagesArray]);
    }

    useEffect(() => {
        console.log('Upload file rendered')
    }, [images])

    return (
        <Grid container justify='center'>
            <Button fullWidth variant="contained" component="label" className={classes.dragAndDrop}  onDragOver={containerOver} onDragLeave={containerLeave} onDrop={onFilesDragDrop}>
                <Typography variant='body2' color='textPrimary' component='p'>{overContainer ? 'Come on... drop them here!' : 'Drag some photos or click to upload (PNG/JPEG only)' }</Typography>
                <input type='file' hidden multiple onChange={manualFileUploadChange}/>
            </Button>
            {isInvalidFile && (
                                <Grid container justify='center' className={classes.error}>
                                    <p>Error 404: File type is invalid</p>
                                </Grid>
                                )}
            {images.length > 0 && images !== undefined
            ? <Grid container spacing={2} justify='center'>
                {images.map((image, index) => (
                        <Grid item key={index}>
                            <Paper className={classes.paper} elevation={5}>
                                <img src={image.src} alt='Preview image' className={classes.imgs}/>
                                <Button className={classes.button} size="small" color="primary" onClick={() => deleteImage(index)}><DeleteForeverIcon/></Button>
                            </Paper>
                        </Grid>

                ))}
                <Grid container justify='center' className={classes.uploadCount}>
                    <Typography  variant='body2' color='textPrimary'>{`Uploaded images: ${images.length}/10`}</Typography>
                </Grid>
            </Grid>
            : null}

        </Grid>
    )
})

// THIS IS THE PROCESS OF DRAGGING AND DROPPING PHOTOS USING THE 'REACT-DROP-ZONE' PACKAGE

// const UploadFile = () => {

//     const { images, setImages, publish, setPublish } = useGlobalContext();
//     const classes = useStyles();

//     const { getRootProps, getInputProps, isDragActive } = useDropzone({
//         accepts: 'image/jpeg, image/png',
//         onDrop: (acceptedFiles) => {
//             setImages(acceptedFiles.map((upFile) => Object.assign(upFile, {
//                 images: URL.createObjectURL(upFile)
//                 })))
//         }
//     });

//     const readAsBase64 = (file) => {
//         const reader = new FileReader();
//         reader.readAsDataURL(file);
//         reader.onload = () => {
//             console.log(reader.result)
//         }
//     }

//     console.log(images);    
//     images.map(image => console.log(image.preview))
    
//     return (
//         <>
//             <Grid container {...getRootProps()} justify='center' className={classes.dragAndDrop}>
//                 <input {...getInputProps()}/>
//                     { 
//                         isDragActive 
//                         ? 
//                         <Typography variant='h6' color='textPrimary'>You're almost there... drag them here.</Typography> 
//                         : 
//                         <Typography variant='body1' color='textPrimary'>Drag some photos to upload (only PNG/JPEG format)</Typography> 
//                     }
//             </Grid>
//             {images !== undefined && images.length > 0 ? 
//             <Grid container spacing={1}>
//                 { images.map((upFile, index) => {
            
//                         return (
//                             <Grid item key={index}>
//                                 <Paper className={classes.paper} elevation={5}>
//                                     <img src={upFile.preview} alt='preview' className={classes.imgs}/>
//                                 </Paper>
//                             </Grid>
//                         )
//                     })
//                 } 
//                 <Grid container justify='center' className={classes.uploadCount}>
//                     <Typography  variant='body2' color='textPrimary'>{`Uploaded images: ${images.length}/10`}</Typography>
//                 </Grid>
//             </Grid> : null }
//         </>
//     )
// }

export default UploadFile;