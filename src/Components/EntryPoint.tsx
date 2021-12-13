import { WebPageRouter } from './WebPageRouter';
import { SimpleAppBar } from './Reference_Guide/Navigation Bars/AppBar';

export const EntryPoint = () => {

  return (
    <div >
      <SimpleAppBar/>
      
      <WebPageRouter />
    </div>
  );
}

