import React from 'react';

import { connect } from 'react-redux';


const TableItems = ( invoices ) => {

    return (
        <ul>
            <li>
                {invoices.invoice.invoiceId}
            </li>
            <li>
                {invoices.invoice.vendorId}
            </li>
            <li>
                {invoices.invoice.quantity}
            </li>
            <li>
                {invoices.invoice.product}
            </li>
            <li>
                {invoices.invoice.amountBal}
            </li>
            <li>
                {invoices.invoice.amountDue}
            </li>
            <li>
                {invoices.invoice.invoiceDate}
            </li>
        </ul>
    )
}


export default connect(null)(TableItems);
