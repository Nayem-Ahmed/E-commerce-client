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
import Privetroute from "./Privetroute";
import WomenDetails from "../Pages/ProductsDetails/WomenDetails";
import MyCart from "../Pages/MyCart";
import KidDetails from "../Pages/ProductsDetails/KidDetails";
import Wishlist from "../Pages/Wishlist";
import Payment from "../Pages/Payment/Payment";
import MyOrder from "../Pages/MyOrder";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/shop',
                element: <Shop></Shop>,
            },
            {
                path: '/men',
                element: <Men></Men>,
            },
            {
                path: '/men_details/:id',
                loader: ({ params }) => fetch(`https://ecommerce-server-gamma.vercel.app/allproducts/${params.id}`),
                element: <Privetroute><MenDetails></MenDetails></Privetroute>,
            },
            {
                path: '/women',
                element: <Women></Women>,
            },
            {
                path: '/women_details/:id',
                loader: ({ params }) => fetch(`https://ecommerce-server-gamma.vercel.app/allproducts/${params.id}`),
                element: <Privetroute><WomenDetails></WomenDetails></Privetroute>,
            },
            {
                path: '/cart',
                element: <Privetroute><MyCart></MyCart></Privetroute>,
            },
            {
                path: '/kids',
                element: <Kid></Kid>,
            },
            {
                path: '/kid_details/:id',
                loader: ({ params }) => fetch(`https://ecommerce-server-gamma.vercel.app/allproducts/${params.id}`),
                element: <Privetroute><KidDetails></KidDetails></Privetroute>,
            },
            {
                path: '/wishlist',
                element:<Privetroute><Wishlist></Wishlist></Privetroute>,
            },
            {
                path: '/myorder',
                element:<Privetroute><MyOrder></MyOrder></Privetroute>,
            },
            {
                path: '/payment',
                element:<Privetroute><Payment></Payment></Privetroute>,
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/register',
                element: <Register></Register>,
            },
        ]
    }
])
export default router;