import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        marginTop: 30
    },
    item: {
        display: 'flex'
    },
    card: {
        display: 'flex', 
        justifyContent: 'space-between', 
        flexDirection: 'column', 
        width: '100%'
    },
    details: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center', 
        margin: 0
    },
    inline: {
        paddingTop: 10,
    },
    link: {
        textDecoration: 'none',
        color: '#38a7d0'
    },
    menuItems: {
        display: 'flex',
        alignItems: 'center',
    },
    favorite: {
        padding: 5
    }
}))