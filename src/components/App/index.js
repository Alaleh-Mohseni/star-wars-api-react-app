import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Home from '../../pages/Home'
import Characters from '../../pages/Characters'


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
    path: '*',
    element: <Navigate to="/" />
  }
])



const App = () => {
  return <RouterProvider router={router} />
}

export default App;
