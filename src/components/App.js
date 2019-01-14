import '../CurrencyApp.css';
import React from 'react';
import Table from './Table';
import Dropdown from './Dropdown';

const App = () => {
  return(
    <div className="container">
      <Table />
      <Dropdown />
    </div>
  );
};

export default App;