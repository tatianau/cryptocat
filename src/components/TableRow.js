import React from 'react';
import { connect } from 'react-redux';
import { fetchTableDetail } from '../actions';

class TableRow extends React.Component {
  componentDidMount() {
    this.props.fetchTableDetail(this.props.curId, this.props.curPrice);
  }

  componentDidUpdate() {
    //this.props.fetchTableDetail(this.props.curId, this.props.curPrice);
    //console.log('updated');
  }

  render(){
    const { curItem } = this.props;
    //console.log(curItem);
    
    if (!curItem) {
      return null;
    }

    return(
      <div className="currency-row">
        <div className="currency-col currency-name">{curItem.name}</div>
        <div className="currency-col currency-rank">{curItem.id}</div>
        <div className="currency-col currency-symbol">{curItem.symbol}</div>
        <div className="currency-col currency-price">curItem.quote.USD.price</div>
        <div className="currency-col currency-delete"><button>Delete</button></div>
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