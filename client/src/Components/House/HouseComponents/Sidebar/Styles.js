import { makeStyles } from '@material-ui/core/styles'

export default makeStyles ((theme) => ({
    root: {
        border: `1px solid ${theme.palette.divider}`,
        position: 'sticky',
        padding: 10,
        top: 90
    },
}))