import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import Users from './components/Users';
import Navbar from './components/Navbar';
import UserDetails from './components/UserDetails';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './components/Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/login' element = {<Suspense fallback={<div>Loading...</div>}><Login/></Suspense>}/>
        <Route path='/home' element = {<Suspense fallback={<div>Loading....</div>}><ProtectedRoute><Home/></ProtectedRoute></Suspense>}/>
        <Route path='/users' element = {<Suspense fallback={<div>Loading...</div>}><Users/></Suspense>}>
          <Route path=':id' element = {<Suspense fallback={<div>Loading...</div>}><UserDetails/></Suspense>}/> 
        </Route>
               
        {/* <Route path='/users/:id' element = {<Suspense fallback={<div>Loading...</div>}><UserDetails/></Suspense>}/> */}
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
