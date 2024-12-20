import React from 'react';
import { useMachine } from '@xstate/react';
import { Nav } from '../Components/Nav';
import { StepsLayout } from './StepsLayout';
import { bookingMachines } from '../Machines/BookingMachines';
import './BaseLayout.css';


export const BaseLayout = () => {
  const [state, send] = useMachine(bookingMachines);
  console.log("🧪 ~ BaseLayout ~ state:", state.context)

  return (
    <div className='BaseLayout'>
      <Nav state={state} send={send}/>
      <StepsLayout state={state} send={send}/>
    </div>
  );
}