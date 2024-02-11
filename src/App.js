import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutPage from './Pages/AboutPage';
import StorePage from './Pages/StorePage';
import HomePage from './Pages/HomePage';
import ContactUs from './Pages/ContactUs';
import ProductDetails from './Pages/ProductDetails';
import LoginPage from './Pages/LoginPage';
import { Fragment, useContext } from 'react';
import LoginContext, { LoginContextProvider } from './Context/LoginContext';

function App() {

  const loginCtx = useContext(LoginContext);
  if(loginCtx.isLoggedIn){
    console.log("App.js")
  }
  
    return (
      <LoginContextProvider>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<LoginPage/>}></Route>
      {loginCtx.isLoggedIn && (<Fragment>
        <Route path='/home' element={<HomePage/>}></Route>
        <Route path='/Store' element={<StorePage/>}></Route>
        <Route path='/About_US' element={<AboutPage/>}></Route>
        <Route path='/Contact_Us' element={<ContactUs/>}></Route>
        <Route path='/Store/:productId' element={<ProductDetails />}></Route>
        </Fragment>)}
      <Route path='*' element={<LoginPage />}></Route>
      </Routes>
      </BrowserRouter>
      </LoginContextProvider>
  );

}

export default App;
