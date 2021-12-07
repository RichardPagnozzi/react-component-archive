import { Container, Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import { PropExample } from "./Prop Examples/PropExample"
import { Tick } from "./Hooks Example/SimpleExample"

import './ComponentReference.css';


export const ComponentReferenceGuide = () => {

    return (
        <div className="Browser-Center">
         
            <h2 style={{color:"white"}}>Component Reference Guide</h2>
           
            <Container >
                <div>
                    <Accordion disableGutters={true} >
                        <AccordionSummary >
                            <Typography> Simple Props Example </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <PropExample />
                        </AccordionDetails>
                    </Accordion>

                    <Accordion disableGutters={true} className="Center-text">
                        <AccordionSummary>
                            <Typography>Simple useState Hook Example</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Tick />
                        </AccordionDetails>
                    </Accordion>

                    <Accordion disableGutters={true} >
                        <AccordionSummary>
                            <Typography> Novice useState Hook Example</Typography>
                        </AccordionSummary>
                        <AccordionDetails>

                        </AccordionDetails>
                    </Accordion>
                </div>
            </Container>
        </div>
    )
}