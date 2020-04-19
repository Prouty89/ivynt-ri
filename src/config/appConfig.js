import React from 'react';

import Test from '../config/dataConfig';

let uri = '/test';

export const AppConfig = () => {
   
    
    

    return (
        <div>
            {window.location.pathname === `${uri}` ? 
            <Test /> : 
            <div>goodbye</div>}
        </div>
    )
}

