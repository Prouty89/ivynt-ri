import React, {useEffect} from 'react';

import { connect }  from 'react-redux';

import { getInvoices, collectData, getVendors } from '../actions/tableActions';

import TableItems from '../components/table/TableItems';

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

  
  const Test = ({
    // invoice: { invoices },
    // getInvoices,
    data: { datas, seconddatas },
    collectData,
    // vendor: { vendors },
    // getVendors,
  }) => {
    // useEffect(() => {
    //   getInvoices();
    // }, []);

    useEffect(() => {
      collectData();
    }, []);

    // useEffect(() => {
    //   getVendors();
    // }, []);

    useEffect(() => {});

    {
      console.log("secdatas", seconddatas);
    }
   
    return (
      <>
        <ul>
          {/* {invoices.map((invoice) => (
            <li invoice={invoice} key={invoice.invoiceid}>
              {invoice.invoiceId}-{invoice.vendorId}-{invoice.quantity}-
              {invoice.product}-{invoice.amountBal}-{invoice.amountDue}-
              {invoice.invoiceDate}
            </li>
          ))} */}
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
          {/* {vendors.map((vendor) => (
            <li vendor={vendor} key={vendor.vendorid}>
              {vendor.vendorId}-{vendor.vendorName}-{vendor.creditBal}
            </li>
          ))} */}
        </ul>
      </>
    );
  };

  // vendorId
  // vendorName
  // creditBal

  const mapStateToProps = state => ({
    // invoice: state.invoice,
    data: state.data,
    seconddata: state.data,
    // vendor: state.vendor
})

  
export default connect(mapStateToProps, {collectData})(Test);
