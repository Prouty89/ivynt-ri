import React from 'react'


const TableItems = ({ invoices }) => {


    return (
        <li className="collection-item">
            <div>
                <p>{invoices.invoiceID}</p> 
                {invoices.product} 
                <br/>
                <span className="grey-text">
                    <span>{invoices.quantity}{' '}</span>
                 
                    <span >{invoices.product}{' '}</span>
                     on {' '}

                </span>

            </div>
        </li>
    )
}


export default TableItems;