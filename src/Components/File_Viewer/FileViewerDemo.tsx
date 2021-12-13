// Imports
import { CssBaseline } from "@mui/material"
import { useState, useEffect } from 'react';
// MUI 
import { Container } from '@mui/material';
// Components 
import { TextFileViewer } from "./FileReader/TextFileViewer"
import SearchAppBar from "./NavBar/NavBar"
import { Matrix } from "./Matrix/SyncMatrix";
import { Timeline } from './Timeline/Timeline';
import { TableOfContents } from "./TOC/TableOfContents";

import { Divider } from '@mui/material/';

const components = [
    'File Viewer',
    'Sync Matrix',
    'Timeline',
];

export const FileViewerDemo = () => {

    // VARIABLES/METHODS
    const [curActiveComponent, setCurActiveComponent] = useState<string>(components[0]);



    // CONDITIONAL HTML 
    let activeComponent;

    if (curActiveComponent == "File Viewer") {
        activeComponent = <TextFileViewer />
    }
    else if (curActiveComponent == "Sync Matrix") {
        activeComponent = <Matrix />
    }
    else if (curActiveComponent == "Timeline") {
        activeComponent = <Timeline />
    }

    // RETURN HTML
    return (
        <div >
            <CssBaseline />
            <SearchAppBar />
            <div style={{ padding: "10px" }}>
                <Container sx={{ display: "flex", justifyContent: "space-between" }}>
                    <div style={{ width: "25%", position: "sticky" }}><TableOfContents /></div>
                    <Divider orientation="vertical" flexItem />
                    <div style={{ width: "75%" }}><TextFileViewer /></div>
                </Container>
            </div>
        </div>
    )
}