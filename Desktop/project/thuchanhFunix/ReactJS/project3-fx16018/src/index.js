import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Staff from './Components/Staff/Staff';
import Department from './Components/Deepartment/Department';
import Salary from './Components/Salary/Salary';
import NotFound from './Components/NotFound/NotFound';
import StaffInfomation from './Components/Staff/StaffInfomation';
import store from './redux/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>         
          <Route path="/" element={<App />}>
            <Route path="*" element={ <NotFound /> } /> 
            <Route path='staff/:staffId' element={<StaffInfomation/>} />
            <Route path="department" element={<Department />} />
            <Route path="salary" element={<Salary />} />
            <Route path="staff" element={<Staff />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
    
);
reportWebVitals();
