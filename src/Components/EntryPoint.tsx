import { WebPageRouter } from './Component_Demo_2/Browser Router/WebPageRouter';
import {SimpleAppBar} from './Component_Demo_2/Navigation Bars/AppBar';

export const EntryPoint = () => {

  return (
    <div >
      <SimpleAppBar/>
      
      <WebPageRouter />
    </div>
  );
}

