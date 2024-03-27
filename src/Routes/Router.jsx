import { createBrowserRouter } from "react-router-dom";
import Root from "../LayOut/Root";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Shop from "../Pages/Shop";
import Men from "../Pages/Men";
import Women from "../Pages/Women";
import Kid from "../Pages/Kid";
import MenDetails from "../Pages/ProductsDetails/MenDetails";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
            },
            {
                path:'/shop',
                element:<Shop></Shop>,
            },
            {
                path:'/men',
                element: <Men></Men>,
            },
            {
                path:'/men_details/:id',
                loader:({params})=> fetch(`http://localhost:5000/allproducts/${params.id}`),
                element:<MenDetails></MenDetails>,
            },
            {
                path:'/women',
                element: <Women></Women>,
            },
            {
                path:'/kids',
                element: <Kid></Kid>,
            },
            {
                path:'/login',
                element:<Login></Login>,
            },
            {
                path:'/register',
                element:<Register></Register>,
            },
        ]
    }
])
export default router;