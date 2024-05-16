import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "../App";
import Home from "../home/Home";
import Shop from "../shop/Shop";
import About from "../Components/About";
import Blog from "../Components/Blog";
import SellYourBook from "../Components/SellYourBook";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
        {
            path:'/',
            element: <Home/>
        },
        {
            path:'/shop',
            element: <Shop/>
        },
        {
            path:'/about',
            element: <About/>
        },
        {
            path:'/blog',
            element: <Blog/>
        },
        {
          path:'/sell-your-books',
          element: <SellYourBook/>
        }
    ]
  },
]);
<RouterProvider router={router} />
export default router;
