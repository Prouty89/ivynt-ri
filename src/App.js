import React from 'react';

import { Provider } from 'react-redux';
import store from './store';

import DynamicTable from './components/table/DynamicTable';
import  {AppConfig}  from './config/appConfig';
import Test from './config/dataConfig';

import './App.css';



function App() {
  return (
    <Provider store={store}>
    <div className="App">
      
      {/* <DynamicTable /> */}
      <AppConfig />

    </div>
    </Provider>
  );
}

export default App;
