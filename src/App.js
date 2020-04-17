import React from 'react';

import { Provider } from 'react-redux';
import store from './store';

import UITable from './components/table/UITable';

import './App.css';



function App() {
  return (
    <Provider store={store}>
    <div className="App">
      
      Initial
      <UITable />

    </div>
    </Provider>
  );
}

export default App;
