import React from 'react';
import { connect } from 'react-redux';
import { fetchDropdown, addCurrencyRow } from '../actions';

class Dropdown extends React.Component {
  componentDidMount() {
    this.props.fetchDropdown();
  }

  renderDropdown() {
    return this.props.dropdownList.map(cur => {
      return(
        <option value={cur.id} key={cur.id}>{cur.name}</option>
      );
    });
  }          

  render() {
    return(
      <div className="currency-dropdown">
        <select 
          id="currency-select" 
          className="currency-select"
          // onChange={(e) => this.props.addCurrencyRow(e.target.value)}
        >
          <option value="">--Select Currency--</option>
          {this.renderDropdown()}
        </select>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { dropdownList: state.dropdownList };
};

export default connect(
  mapStateToProps, 
  { fetchDropdown, addCurrencyRow }
)(Dropdown);

