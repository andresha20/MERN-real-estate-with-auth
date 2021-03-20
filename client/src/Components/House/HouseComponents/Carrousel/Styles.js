import { makeStyles } from '@material-ui/core/styles'

export default makeStyles ((theme) => ({
    root: {
        marginTop: 30
    },
    rotateLeft: {
        transform: 'rotate(180deg)'
    },
    imageContainerBackground: {
        backgroundColor: '#bebebe',
        minHeight: 350,
        maxHeight: 350,
        minWidth: '100%',
        maxWidth: '100%'
    },
    arrows: {
        cursor: 'pointer'
    },
    maxHeightMaxWidth: {
        maxWidth: 'auto',
        minHeight: 350,
        maxHeight: 350,
    }
}))