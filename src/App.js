import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import AboutPage from './Pages/AboutPage';
import StorePage from './Pages/StorePage';
import HomePage from './Pages/HomePage';
import ContactUs from './Pages/ContactUs';
import ProductDetails from './Pages/ProductDetails';
import LoginPage from './Pages/LoginPage';
import { Fragment, useContext } from 'react';
import LoginContext from './Context/LoginContext';

function App() {
  const loginCtx = useContext(LoginContext);
  
    return (
      <Fragment>
      <BrowserRouter>
      <Routes>
       <Route path='/login' element={<LoginPage/>}/>
       <Route path='/home' element={<HomePage/>}></Route>
      {loginCtx.isLoggedIn && <Route path='/Store' element={<StorePage/>}></Route>}
        <Route path='/About_US' element={<AboutPage/>}></Route>
        <Route path='/Contact_Us' element={<ContactUs/>}></Route>
        <Route path='/Store/:productId' element={<ProductDetails />}></Route>
       
      <Route path='*'element={<Navigate to='/login'/>} />
            
      </Routes>
      </BrowserRouter>
      </Fragment>
  );

}

export default App;
