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

    //Merging data here. This can be improved upon, handled in a function.

    let firstArr = datas;
    let secondArr = seconddatas;
    const map = new Map();
    firstArr.forEach(item => map.set(item.vendorId, item));
    secondArr.forEach(item => map.set(item.vendorId, {...map.get(item.vendorId), ...item}));
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
     
        <ul>
        </ul>
        <ul>
          {datas.map((data) => (
            <li data={data} key={data.dataid}>
              {data.vendorId}-{data.amountBal}-{data.amountDue}-{data.invoiceId}-{data.quantity}-{data.invoiceId}-{data.invoiceDate}
            </li>
          ))}
        </ul>
        <ul>
          {seconddatas.map((seconddata) => (
            <li seconddata={seconddata} key={seconddata.seconddataid}>
              {seconddata.vendorId}-{seconddata.vendorName}-{seconddata.creditBal}
            </li>
          ))}
        </ul>
        <ul>
        </ul>
      </>
    );
  };


  const mapStateToProps = state => ({
    data: state.data,
    seconddata: state.data,
})

  
export default connect(mapStateToProps, {collectData})(Test);
