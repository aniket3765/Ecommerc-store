import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AboutPage from './Pages/AboutPage';
import StorePage from './Pages/StorePage';
import HomePage from './Pages/HomePage';
import ContactUs from './Pages/ContactUs';
import ProductDetails from './Pages/ProductDetails';

const router = createBrowserRouter([
  {path:'/Store', element:<StorePage /> },
  {path:'/About_US', element:<AboutPage /> },
  {path:'/', element:<HomePage /> },
  {path:'/Contact_Us', element:<ContactUs />},
  {path:'/Store/:productId',element:<ProductDetails/>}
])

function App() {

    return (
      <RouterProvider router={router}/>
  );

}

export default App;
