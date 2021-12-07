import { CssBaseline } from "@mui/material"
import { useState, useEffect } from 'react';

import { TextFileViewer } from "./FileReader/TextFileViewer"
import SearchAppBar from "./Nav Bar/NavBar"
import FullFeaturedDemo from "./Sync Matrix/SyncMatrix"
import { Timeline } from './Timeline/Timeline';

const components = [
    'File Viewer',
    'Sync Matrix',
    'Timeline',
];

export const SyncMatrixDemo = () => {

    // VARIABLES/METHODS
    const [curActiveComponent, setCurActiveComponent] = useState<string>(components[0]);



    // CONDITIONAL HTML 
    let activeComponent;

    if (curActiveComponent == "File Viewer") {
        activeComponent = <TextFileViewer />
    }
    else if (curActiveComponent == "Sync Matrix") {
        activeComponent = <FullFeaturedDemo />
    }
    else if (curActiveComponent == "Timeline") {
        activeComponent = <Timeline/>
    }

    // RETURN HTML
    return (
        <div >
            <CssBaseline />
            <SearchAppBar />
            <div style={{ padding: "10px" }}>
                <TextFileViewer />
            </div>
        </div>
    )
}