import React, {useEffect} from 'react';

import { connect }  from 'react-redux';

import { getInvoices } from '../actions/tableActions';

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

  
  const Test = ({ invoice: { invoices }, getInvoices }) => {
  

    useEffect(() => {
      getInvoices();
    }, [])
    

    {console.log('invoices', invoices)}
    return(
      <>
       <ul>
    {
      invoices.map(
        invoice=><li invoice={invoice} key={invoice.invoiceid}>{invoice.invoiceId}</li>
      )
    }
        </ul>
      </>
    )
  };

  const mapStateToProps = state => ({
    invoice: state.invoice
})

  
export default connect(mapStateToProps, {getInvoices})(Test);
