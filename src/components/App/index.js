import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import './style.css'
import Home from '../../pages/Home'
import Characters from '../../pages/Characters'
import NotFound from '../../pages/NotFound';
import Favorites from '../../pages/Favorites';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/characters/:id",
    element: <Characters />
  },
  {
    path: "/favorites",
    element: <Favorites />
  },
  {
    path: '*',
    element: <NotFound />
  }
])



const App = () => {
  return <RouterProvider router={router} />
}

export default App;
