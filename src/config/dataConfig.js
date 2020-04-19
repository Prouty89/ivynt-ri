import React, {useEffect} from 'react';

import { connect }  from 'react-redux';

import { collectData} from '../actions/tableActions';

import { Table } from 'antd';
import 'antd/dist/antd.css';

let title;
let dataIndex;
let dataSource;

const columns = [
  {
    title: title != null ? title : "fieldOne",
    dataIndex: dataIndex != null ? dataIndex : " ",
  },
  {
    title: title != null ? title : "fieldTwo",
    dataIndex: dataIndex != null ? dataIndex : " ",
  },
  {
    title: title != null ? title : "fieldThree",
    dataIndex: dataIndex != null ? dataIndex : " ",
  },
  {
    title: title != null ? title : "fieldFour",
    dataIndex: dataIndex != null ? dataIndex : " ",
  },
  {
    title: title != null ? title : "fieldFive",
    dataIndex: dataIndex != null ? dataIndex : " ",
  },
  {
    title: title != null ? title : "fieldSix",
    dataIndex: dataIndex != null ? dataIndex : " ",
  },
];


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

    //Merging data here first pass. This can be improved upon/ handled with a function. Removes duplicate vendor Id's which is an issue for multiple invoices with the same vendorId. 

    let firstArr = datas;
    let secondArr = seconddatas;
    const map = new Map();
    secondArr.forEach(item => map.set(item.vendorId, item));
    firstArr.forEach(item => map.set(item.vendorId, {...map.get(item.vendorId), ...item}));
    const combineData = Array.from(map.values());
   
    return (
      <>
      <Table 
          columns={window.location.pathname === '/test' ? exampleColumns : columns}
          dataSource= {window.location.pathname === '/test' ? combineData : dataSource}
      />
      </>
    );
  };


  const mapStateToProps = state => ({
    data: state.data,
    seconddata: state.data,
})

  
export default connect(mapStateToProps, {collectData})(Test);
