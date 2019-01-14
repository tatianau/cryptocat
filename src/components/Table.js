import React from 'react';
import { connect } from 'react-redux';
import { fetchTable } from '../actions';
import TableRow from './TableRow';

class Table extends React.Component {
  componentDidMount() {
    this.props.fetchTable();
  }

  renderTableRows() {
    return this.props.tableRows.map(cur => {
      return(
        <TableRow curId={cur.id} key={cur.id} />
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
          <select id="price-select">
            <option value="USD">USD</option>
            <option value="BTC">BTC</option>
            <option value="ETH">ETH</option>
          </select>
          </div>
          <div className="currency-col currency-delete">Delete</div>
        </div>
        {this.renderTableRows()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { tableRows: state.tableList };
};

export default connect(
  mapStateToProps, 
  { fetchTable }
)(Table);