import React from 'react';
import { connect } from 'react-redux';
import { fetchDropdown } from '../actions';

class Dropdown extends React.Component {
  componentDidMount() {
    this.props.fetchDropdown();
  }

  renderDropdown() {
    return this.props.dropdownList.map(cur => {
      return(
        <option value={cur.slug} key={cur.id}>{cur.name}</option>
      );
    });
  }          

  render() {
    return(
      <div className="currency-dropdown">
        <label htmlFor="currency-select">Select a currency:</label>
        <select id="currency-select">
          <option value="">--Add Currency--</option>
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
  { fetchDropdown }
)(Dropdown);

