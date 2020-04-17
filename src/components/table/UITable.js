import React, { useEffect } from 'react';
import { connect }  from 'react-redux';

import TableItems from './TableItems';
import VendorItems from './VendorItems';

import { Table } from 'antd';
import 'antd/dist/antd.css';

import { getInvoices, getVendors, } from '../../actions/tableActions';

const columns = [
    {
      title: 'Vendor',
      dataIndex: 'vendorName',
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      width: '20%',
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
    // {
    //   title: 'Pay',
    //   dataIndex: 'pay',
    // },
  ];



const UITable = ({ 
    invoice: { invoices, loading }, getInvoices,
    vendor: { vendors }, getVendors  

}) => {
    
    useEffect(() => {
        getVendors();
        // eslint-disable-next-line
    }, [])
    useEffect(() => {
        getInvoices();
        // eslint-disable-next-line
    }, [])


    {console.log("vendors", vendors)}

    if(loading || invoices === null) {
      return <p>Loading...</p>
  }

    return (
        <>
        <Table
        columns={columns}
        dataSource={vendors}
        dataSource={invoices}
        />
        <h4>Invoices</h4>
        <li>
            {invoices.length === 0 ? (<p >No Invoices to display...</p>) : (
                invoices.map(invoice => <TableItems invoice={invoice} key={invoice.id} />)
            )}
        </li>
        <h4>Vendors</h4>
        <li>
            {vendors.length === 0 ? (<p >No Vendors to display...</p>) : (
                vendors.map(vendor => <VendorItems vendor={vendor} key={vendor.id} />)
            )}
        </li>
        </>
    )
};



const mapStateToProps = state => ({
    invoice: state.table,
    vendor: state.table
})

export default connect(mapStateToProps, { getInvoices, getVendors })(UITable);






