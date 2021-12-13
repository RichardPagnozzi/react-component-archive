import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ComponentReferenceGuide } from './Reference_Guide/ComponentReferenceGuide';
import { ComponentBrowser } from './Component Browser/ComponentBrowser';
import { FileViewerDemo } from './File_Viewer/FileViewerDemo';
import { TableOfContentsDemo } from './File_Viewer/TOC/TableOfContentsDemo';


export const WebPageRouter = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/"> <div/> </Route>
                <Route path="/ReferenceGuide"> <ComponentReferenceGuide /> </Route>
                <Route path="/ComponentBrowser"> <ComponentBrowser /> </Route>
                <Route path="/Matrix"> <FileViewerDemo /> </Route>
                <Route path="/TOC"> <TableOfContentsDemo /> </Route>
            </Switch>
        </BrowserRouter>
    )
}

