import React from 'react';
import { connect } from 'react-redux';
import { fetchTable, selectCurrencyPrice, removeCurrencyRow, addToDropdown } from '../actions';
import TableRow from './TableRow';

class Table extends React.Component {
  componentDidMount() {
    this.props.fetchTable();
  }

  componentDidUpdate = () => {
    this.props.tableRows.length >= 10 ? this.props.updateDropdown(true) : this.props.updateDropdown(false);
  }

  onDeleteBtn = (item) => {
    if (this.props.tableRows.length > 1) {
      this.props.removeCurrencyRow(item.id);
      this.props.addToDropdown(item);
    }
  }

  renderTableRows = () => {
    return this.props.tableRows.map(cur => {
      return(
        <TableRow 
          onDelete={this.onDeleteBtn} 
          curId={cur.id} 
          key={cur.id} 
          curPrice={this.props.selectedCur}
        />
      );
    });
  }

  render() {
    return(
      <div className="currency-table">
        <div className="currency-row currency-head">
          <div className="currency-col currency-name">Currency</div>
          <div className="currency-col currency-rank">CMC Rank</div>
          <div className="currency-col currency-symbol">Symbol</div>
          <div className="currency-col currency-price">
          <select 
            id="price-select" 
            className="price-select"
            value={this.props.selectedCur} 
            onChange={(e) => this.props.selectCurrencyPrice(e.target.value)}
          >
            <option value="USD">USD</option>
            <option value="BTC">BTC</option>
            <option value="ETH">ETH</option>
          </select>
          </div>
          <div className="currency-col currency-delete"></div>
        </div>
        {this.renderTableRows()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { tableRows: state.tableList, selectedCur: state.selectedCurrencyForPrice };
};

export default connect(
  mapStateToProps, 
  { fetchTable, selectCurrencyPrice, removeCurrencyRow, addToDropdown }
)(Table);