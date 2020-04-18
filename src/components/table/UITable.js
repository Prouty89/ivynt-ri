import React from 'react';
import { connect }  from 'react-redux';
import { Table } from 'antd';
import 'antd/dist/antd.css';


const UITable = ({}) => {

    const title = null;
    const dataIndex = null;
    const dataSource = null;

    const columns=
        [
            {
              title: (title != null ? title : 'fieldOne'),
              dataIndex: (dataIndex != null ? dataIndex : ' '),
            },
            {
              title: (title != null ? title : 'fieldTwo'),
              dataIndex: (dataIndex != null ? dataIndex : ' '),
            },
            {
              title: (title != null ? title : 'fieldThree'),
              dataIndex: (dataIndex != null ? dataIndex : ' '),
            },
            {
              title: (title != null ? title : 'fieldFour'),
              dataIndex: (dataIndex != null ? dataIndex : ' '),
            },
            {
              title: (title != null ? title : 'fieldFive'),
              dataIndex: (dataIndex != null ? dataIndex : ' '),
            },
            {
              title: (title != null ? title : 'fieldSix'),
              dataIndex: (dataIndex != null ? dataIndex : ' '),
            },
          ];
    


    return (
        <>
            <Table
                columns={columns}
                dataSource= {dataSource}
            />
        </>
    )
};


export default connect(null)(UITable);






