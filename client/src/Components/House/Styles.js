import { makeStyles } from '@material-ui/core/styles'

export default makeStyles ((theme) => ({
    root: {
        marginTop: 100,
        marginLeft: 70,
        marginBottom: 20,
        marginRight: 70,

    },
    routes: {
        display: 'flex',
        marginBottom: 30
    },
    alignRight: {
        flexGrow: 1,
        marginBottom: 30
    },
    card2: {
        display: 'flex',
        alignItems: 'center'
    },
    title: {
        padding: 0
    },
    icon: {
        verticalAlign: 'middle'
    },
    content: {
        marginLeft: 10
    }

}))