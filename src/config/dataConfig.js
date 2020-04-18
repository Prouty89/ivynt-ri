import React, {useEffect} from 'react';

import { connect }  from 'react-redux';

import { getInvoices, collectData } from '../actions/tableActions';

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
    invoice: { invoices }, getInvoices, 
    data: { datas }, collectData
    }) => {
  

    useEffect(() => {
      getInvoices();
    }, [])

    useEffect(() => {
      collectData();
    }, [])
    

    {console.log('datas', datas)}
    return(
      <>
       <ul>
    {
      invoices.map(
      invoice=><li invoice={invoice} key={invoice.invoiceid}>
        {invoice.invoiceId}-
        {invoice.vendorId}-
        {invoice.quantity}-
        {invoice.product}-
        {invoice.amountBal}-
        {invoice.amountDue}-
        {invoice.invoiceDate}-
        </li>
      )
    }
        </ul>
      </>
    )
  };

  
// invoiceId
// vendorId
// quantity
// Product
// amountBal
// amountDue
// invoiceDate

  const mapStateToProps = state => ({
    invoice: state.invoice,
    data: state.data,
})

  
export default connect(mapStateToProps, {getInvoices, collectData})(Test);
