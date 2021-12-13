import { Container, Accordion, AccordionSummary, AccordionDetails, Typography, Button } from '@mui/material';
import './ComponentBrowser.css';

import { FileViewerDemo } from '../File_Viewer/FileViewerDemo';
import { TableOfContentsDemo } from '../File_Viewer/TOC/TableOfContentsDemo';

export const ComponentBrowser = () => {

    return (
        <div className="Browser-Center">

            <h2 style={{ color: "white" }}>Modular Systems</h2>

            <Container >
                <div>
                    <Accordion disableGutters={true}>
                        <AccordionSummary sx={{ textAlign: "center" }}>
                            <Typography> File Viewer System </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Button href="/Matrix"> WEBPAGE </Button>
                            <FileViewerDemo />
                        </AccordionDetails>
                    </Accordion>

                    <Accordion disableGutters={true}>
                        <AccordionSummary>
                            <Typography> Table Of Contents </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Button href="/TOC"> WEBPAGE </Button>
                            <TableOfContentsDemo />
                        </AccordionDetails>
                    </Accordion>
                </div>
            </Container>

        </div>
    );
}