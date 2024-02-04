import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './Pages/About';
import Home from './Pages/Home';

const router = createBrowserRouter([
  {path:'/', element:<Home /> },
  {path:'/About_US', element:<About /> }
])

function App() {

    return (
      <RouterProvider router={router}/>
  
   
  );

}

export default App;
