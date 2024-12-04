import React from 'react';
import { useMachine } from '@xstate/react';
import { Nav } from '../Components/Nav';
import { StepsLayout } from './StepsLayout';
import { bookingMachines } from '../Machines/BookingMachines';
import './BaseLayout.css';


export const BaseLayout = () => {
  const [state, send] = useMachine(bookingMachines);

  console.log('nuestra maquina', state);
  console.log('matches true', state.matches('initial'));
  console.log('matches false', state.matches('tickets'));
  console.log('can', state.can('FINISH'));
  return (
    <div className='BaseLayout'>
      <Nav />
      <StepsLayout />
    </div>
  );
}