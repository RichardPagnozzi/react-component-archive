import { Container, Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import './ComponentBrowser.css';

import { SyncMatrixDemo } from '../../Component_Demo_1/DemoPage01';

export const ComponentBrowser = () => {

    return (
        <div className="Browser-Center">

            <h2 style={{ color: "white" }}>Modular Components</h2>

            <Container >
                <div>
                    <Accordion disableGutters={true}>
                        <AccordionSummary sx={{ textAlign: "center" }}>
                            <Typography> Component 1 </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <SyncMatrixDemo />
                        </AccordionDetails>
                    </Accordion>

                    <Accordion disabled disableGutters={true}>
                        <AccordionSummary>
                            <Typography> Component 2 </Typography>

                        </AccordionSummary>
                        <AccordionDetails>

                        </AccordionDetails>
                    </Accordion>
                </div>
            </Container>

        </div>
    );
}