import React, { useEffect } from 'react';
import { connect }  from 'react-redux';


import TableItem from './TableItems';

import { getInvoices } from '../../actions/tableActions';

const UITable = ({ invoice: { invoices }, getInvoices }) => {

    useEffect(() => {
        getInvoices();
        // eslint-disable-next-line
    }, [])

  

    return (
        <ul >
            <li >
                <h4>Invoices</h4>
            </li>
            {invoices.length === 0 ? (<p className="center">No Invoices to display...</p>) : (
                invoices.map(invoice => <TableItem invoice={invoice} key={invoice.id} />)
            )}
        </ul>
    )
};



const mapStateToProps = state => ({
    invoice: state.invoice
})

export default connect(mapStateToProps, { getInvoices })(UITable);






