import React, {useEffect} from 'react';

import { connect }  from 'react-redux';

import { collectData } from '../actions/tableActions';

const title = null;
const dataIndex = null;
const dataSource = null;


export const exampleColumns = [
    {
      title: 'Vendor',
      dataIndex: 'vendorName',
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
    },
    {
      title: 'Amount Bal',
      dataIndex: 'amountBal',
    },
    {
      title: 'Amount Due',
      dataIndex: 'amountDue',
    },
    {
      title: 'Credit Bal',
      dataIndex: 'creditBal',
    },
    {
      title: 'Pay',
      dataIndex: 'pay',
    },
  ];
  
  const Test = ({data: {datas,}, collectData }) => {

    useEffect(() => {
      collectData();
    },[])
    
  

    return(
      <>
      <h1>
      {console.log("data", datas)}
      </h1>
      </>
    )
  };

  const mapStateToProps = state => ({
    data: state.table 
})

  
export default connect(mapStateToProps, {collectData})(Test);
