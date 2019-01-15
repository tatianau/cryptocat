import React from 'react';
import { connect } from 'react-redux';
import { fetchDropdown, removeFromDropdown, addCurrencyRow } from '../actions';

class Dropdown extends React.Component {
  componentDidMount() {
    this.props.fetchDropdown();
  }

  onSelectDropdown = (val) => {
    const curItem = this.props.dropdownList.find(item => item.id == val);
    this.props.addCurrencyRow(curItem);
    this.props.removeFromDropdown(parseInt(val));
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
          disabled={this.props.ctrlDropdown}
          id="currency-select" 
          className="currency-select"
          onChange={(e) => this.onSelectDropdown(e.target.value)}
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
  { fetchDropdown, removeFromDropdown, addCurrencyRow }
)(Dropdown);

