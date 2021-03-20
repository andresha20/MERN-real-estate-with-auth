import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {

    },
    dragAndDrop: {
        marginTop: 15,
        backgroundColor: 'rgba(255, 255, 255, 0)',
        marginBottom: 25, 
        border: '3px dashed #3a3b3c',
        paddingTop: 15, 
        paddingBottom: 15, 

        "&:hover": {
            backgroundColor: "#add8e6"
          },
    },
    imgs: {
        width: 70, 
        height: 50
    },
    uploadCount: {
        marginBottom: 30
    },
    paper: {
        padding: 2
    },
    button: {
        padding: 0,
        minHeight: 0,
        minWidth: 0,
    },
    error: {
        backgroundColor: '#180605',
        color: 'white',
        borderRadius: 5,
        padding: 0,
        marginBottom: 15
    }
}))