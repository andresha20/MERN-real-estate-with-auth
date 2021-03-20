import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@material-ui/core';
import ListComponent from './List';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const AccordionComponent = () => {
    return (
        <Accordion>
            <AccordionSummary expandIcon={(<ExpandMoreIcon/>)} aria-controls="panel1a-content">
                <Typography component='p' variant='body1' color='textPrimary'>Dummy title</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <ListComponent />
                <ListComponent />
            </AccordionDetails>
        </Accordion>   
    )
}

export default AccordionComponent;