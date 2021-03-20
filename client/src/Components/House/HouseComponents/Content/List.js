import { List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
import CheckBoxOutlinedIcon from '@material-ui/icons/CheckBoxOutlined';

const ListComponent = () => {
    return (
            <List>
                        <ListItem>
                            <ListItemIcon>
                                
                            </ListItemIcon>
                            <ListItemText 
                                primary='Dummy text'
                                secondary='Dummy subtext'
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                
                            </ListItemIcon>
                            <ListItemText 
                                primary='Dummy text'
                                secondary='Dummy subtext'
                            />
                        </ListItem>
            </List>
    )
}

export default ListComponent;