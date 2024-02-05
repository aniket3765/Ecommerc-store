import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AboutPage from './Pages/AboutPage';
import StorePage from './Pages/StorePage';
import HomePage from './Pages/HomePage';

const router = createBrowserRouter([
  {path:'/Store', element:<StorePage /> },
  {path:'/About_US', element:<AboutPage /> },
  {path:'/Home', element:<HomePage /> }
])

function App() {

    return (
      <RouterProvider router={router}/>
  );

}

export default App;
