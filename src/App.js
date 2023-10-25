import './App.css';
import { RouterProvider, createBrowserRouter} from 'react-router-dom'
// import Main from './Component/Main/Main';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Shop from './Component/Shop/Shop';
import Home from './Component/Home/Home';
import Details from './Component/Details';

function App() {
  const router=createBrowserRouter([
{
  path:'/',
  element:<Home/>
},
{
  path:'Shop',
  element:<Shop/>
},
{
  path:'details',
  element:<Details/>
}
  ])
  return (
    <RouterProvider router={router}>
      
    </RouterProvider>
  );
}

export default App;
