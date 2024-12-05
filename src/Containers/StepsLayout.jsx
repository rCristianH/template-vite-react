import React from 'react';
import { Welcome } from '../Components/Welcome';
import { Search } from '../Components/Search';
import { Passengers } from '../Components/Passengers';
import { Tickets } from '../Components/Tickets';
import './StepsLayout.css';

export const StepsLayout = ({ state, send }) => {
  const renderContent = () => {
    const componentsMap = {
      initial: <Welcome send={send} />,
      search: <Search send={send} />,
      tickets: <Tickets send={send} />,
      passengers: <Passengers send={send} />
    };
  
    return componentsMap[state.value] || null;
  };

  return (
    <div className='StepsLayout'>
      {renderContent()}
    </div>
  );
}; 