import React from 'react';

import { Provider } from 'react-redux';
import store from './store';

import DynamicTable from './components/table/DynamicTable';
import Test from './config/dataConfig';

import './App.css';



function App() {
  return (
    <Provider store={store}>
    <div className="App">
      
      {/* <DynamicTable /> */}
      <Test />

    </div>
    </Provider>
  );
}

export default App;
