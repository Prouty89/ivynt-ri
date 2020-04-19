import React, {useEffect} from 'react';

import { connect }  from 'react-redux';

import { collectData} from '../actions/tableActions';

import TableItems from '../components/table/TableItems';

import { Table } from 'antd';

export const exampleColumns = [
    {
      title: 'Vendor',
      dataIndex: 'vendorName',
      key: 'vendorId'
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'vendorId'
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

  
  const Test = ({

    data: { datas, seconddatas },
    collectData,

  }) => {

    useEffect(() => {
      collectData();
    }, []);

    useEffect(() => {});

    //Merging data here first pass. This can be improved upon/ handled with a function. Removes duplicate vendor Id's which is an issue for multiple invoices with the same vendorId. 

    let firstArr = datas;
    let secondArr = seconddatas;
    const map = new Map();
    secondArr.forEach(item => map.set(item.vendorId, item));
    firstArr.forEach(item => map.set(item.vendorId, {...map.get(item.vendorId), ...item}));
    const combineData = Array.from(map.values());

    {
      console.log("combinedatas", combineData);
    }
   
    return (
      <>
      <Table
        columns={exampleColumns}
        dataSource={combineData}
        rowKey={record => record.vendorId}
      />
      </>
    );
  };


  const mapStateToProps = state => ({
    data: state.data,
    seconddata: state.data,
})

  
export default connect(mapStateToProps, {collectData})(Test);
