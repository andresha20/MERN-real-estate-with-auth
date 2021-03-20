import { makeStyles } from '@material-ui/core/styles'

export default makeStyles ((theme) => ({
    root: {
        marginTop: 30
    },
    card: {
        textAlign: 'right',
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        flexGrow: 1,
        marginBottom: 30
    }
}))