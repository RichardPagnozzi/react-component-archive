import '../../../../App.css'
import PropGreeting from './PropGreeting';
import { Status } from './Status';
import { PropHeader } from './PropHeader';
import { PropPassing } from './PropPassing';
import { Button } from './Button';


export const PropExample = () => {
  return (
    <div >

      <header>
        <PropGreeting name="Richard" age={28} isLoggedIn={true} />

        <div />

        <Status status="error" />

        <div />

        <PropPassing>
          <PropHeader>Example of passing props through children</PropHeader>
        </PropPassing>

        <Button handleClick={() => { console.log('Button Clikced') }}></Button>
      </header>

    </div>
  )
}