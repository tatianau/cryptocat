import React from 'react';
import { connect } from 'react-redux';
import { fetchTableDetail } from '../actions';

class TableRow extends React.Component {
  componentDidMount() {
    this.props.fetchTableDetail(this.props.curId, this.props.curPrice);
  }

  render(){
    const { curItem } = this.props;
    
    if (!curItem) {
      return null;
    }

    return(
      <div className="currency-row">
        <div className="currency-col currency-name">{curItem.name}</div>
        <div className="currency-col currency-rank">{curItem.cmc_rank}</div>
        <div className="currency-col currency-symbol">{curItem.symbol}</div>
        <div className="currency-col currency-price">{curItem.quote.USD.price}</div>
        <div className="currency-col currency-delete">
          <button 
            className="btn-delete"
            onClick={() => this.props.onDelete(curItem)}
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { curItem: state.detailList.find(item => item.id === ownProps.curId) };
};

export default connect(
  mapStateToProps, 
  { fetchTableDetail }
)(TableRow);