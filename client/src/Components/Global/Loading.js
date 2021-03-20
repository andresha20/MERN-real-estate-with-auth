import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';

const Loading = () => {
    return (
        <>
            <CircularProgress color="secondary"/>
            <Typography align='center' variant="h6">We are working...</Typography>
        </>
    )
}

export default Loading;