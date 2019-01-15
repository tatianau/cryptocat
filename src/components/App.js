import '../CurrencyApp.css';
import React from 'react';
import Table from './Table';
import Dropdown from './Dropdown';

class App extends React.Component {
  state = { dropdown: false };

  updateDropdown = (bool) => this.setState({ dropdown: bool });

  render(){
    return(
      <div className="container">
        <Table updateDropdown={this.updateDropdown} />
        <Dropdown ctrlDropdown={this.state.dropdown} />
      </div>
    );
  }
};

export default App;