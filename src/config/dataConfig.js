import React, {useEffect} from 'react';

import { connect }  from 'react-redux';

import { collectData} from '../actions/tableActions';

import TableItems from '../components/table/TableItems';

import { Table } from 'antd';

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

  
  const Test = ({

    data: { datas, seconddatas },
    collectData,

  }) => {

    useEffect(() => {
      collectData();
    }, []);

    useEffect(() => {});

    let b = datas;
    let a = seconddatas;
    let c = a.concat(b);

    {
      console.log("combinedatas", c);
    }
   
    return (
      <>
      <Table
        columns={exampleColumns}
        dataSource={c}
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
