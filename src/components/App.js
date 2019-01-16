import '../CurrencyApp.css';
import logo from '../stackbot.svg';
import React from 'react';
import Table from './Table';
import Dropdown from './Dropdown';

class App extends React.Component {
  state = { dropdown: false };

  updateDropdown = (bool) => this.setState({ dropdown: bool });

  render(){
    return(
      <div>
        <header className="header">
          <h2 className="title">StackAdapt</h2>
          <img className="logo" src={logo} alt="logo" />
          <h2 className="title">Homework</h2>
        </header>
        <div className="container">
          <Table updateDropdown={this.updateDropdown} />
          <Dropdown ctrlDropdown={this.state.dropdown} />
        </div>
      </div>
    );
  }
};

export default App;