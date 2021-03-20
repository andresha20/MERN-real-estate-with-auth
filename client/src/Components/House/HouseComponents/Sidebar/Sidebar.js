import useStyles from './Styles';

const Sidebar = () => {

    const classes = useStyles();

    return (
        <>
            <div className={classes.root}>
                <h1 >I'm a sidebar</h1>
            </div>
        </>
    )
}

export default Sidebar;