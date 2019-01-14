import React from 'react';

class Table extends React.Component {

  createTable() {
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
      </div>
    );
  }

  render() {
    return(
      <div>
        {this.createTable()}
      </div>
    );
  }
}

export default Table;