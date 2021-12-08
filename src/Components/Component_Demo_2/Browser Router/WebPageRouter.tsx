import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ComponentReferenceGuide } from '../Reference Components/ComponentReferenceGuide';
import { ComponentBrowser } from '../Component Browser/ComponentBrowser';
import { HomePage1 } from '../HomePage Variants/HomePage1';
import { SyncMatrixDemo } from '../../Component_Demo_1/DemoPage01';

export const WebPageRouter = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/"> <HomePage1 /> </Route>
                <Route path="/ReferenceGuide"> <ComponentReferenceGuide /> </Route>
                <Route path="/ComponentBrowser"> <ComponentBrowser /> </Route>
                <Route path="/Matrix"> <SyncMatrixDemo /> </Route>
            </Switch>
        </BrowserRouter>
    )
}

