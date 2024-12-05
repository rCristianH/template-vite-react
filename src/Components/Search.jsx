import React, { useState } from 'react';
import './Search.css';

export const Search = ({ send, context }) => {
  const [flight, setFlight] = useState('');

  const handleSelectChange = (event) => {
    setFlight(event.target.value);
  };
  const onSearchContinue = () => {
    send({type: 'CONTINUE', selectedCountry: flight })
  }

  const options = ['Mexico', 'Venezuela', 'Colombia'];

  return (
    <div className='Search'>
      <p className='Search-title title'>Busca tu destino</p>
      <select id="country" className='Search-select' value={flight} onChange={handleSelectChange}>
        <option value="" disabled defaultValue>Escoge un país</option>
        {options.map((option) => <option value={option} key={option}>{option}</option>)}
      </select>
      <button disabled={flight === ''} onClick={onSearchContinue} className='Search-continue button'>Continuar</button>
    </div>
  );
}; 