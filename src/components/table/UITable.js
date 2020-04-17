import React, { useEffect } from 'react';
import { connect }  from 'react-redux';

import TableItems from './TableItems';

import { getInvoices } from '../../actions/tableActions';




const UITable = ({ invoice: { invoices, loading }, getInvoices }) => {

    useEffect(() => {
        getInvoices();
        // eslint-disable-next-line
    }, [])

    if(loading || invoices === null) {
      return <p>Loading...</p>
  }

    return (
        <ul >
            <li >
                <h4>Invoices</h4>
            </li>
            {invoices.length === 0 ? (<p className="center">No Invoices to display...</p>) : (
                invoices.map(invoice => <TableItems invoice={invoice} key={invoice.id} />)
            )}
        </ul>
    )
};



const mapStateToProps = state => ({
    invoices: state.invoices
})

export default connect(mapStateToProps, { getInvoices })(UITable);






