import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Products from './components/Products';
import Pricing from './components/Pricing';
import HomePage from './components/HomePage';
import PageNotFound from './components/PageNotFound';
import PageNav from './components/PageNav';
import Login from './components/Login';
import AppLayout from './components/AppLayout';
import Cities from './components/Cities';
import Countries from './components/Countries';
import { CityDetails } from './components/CityDetails';

function App() {
  return (
    <BrowserRouter>
      {/* <PageNav/> */}
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/pricing' element={<Pricing/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/app' element={<AppLayout/>}>
          <Route path='cities' element={<Cities/>}/>
          <Route path="cities/:id" element={<CityDetails />} />
          <Route path='countries' element={<Countries/>}/>
        </Route>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
