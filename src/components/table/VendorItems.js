import React from 'react';

import { connect } from 'react-redux';


const VendorItems = ( vendors ) => {

    return (
        <ul>
            <li>
                {vendors.vendor.vendorId}
            </li>
            <li>
                {vendors.vendor.vendorName}
            </li>
            <li>
                {vendors.vendor.creditBal}
            </li>
        </ul>
    )
}


export default connect(null)(VendorItems);