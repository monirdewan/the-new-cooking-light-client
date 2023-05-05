
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import Home from '../pages/Home/Home';
import LogIn from '../pages/LogIn/LogIn';
import Register from '../pages/Register/Register';
import LoginLayOut from '../layouts/LoginLayOut';
import Recipes from '../pages/Recipes/Recipes';
import RcipeDetails from '../pages/RcipeDetails/RcipeDetails';
import ChefDetails from '../pages/ChefDetails/ChefDetails';
import Chefs from '../pages/Chefs/Chefs';
import NotFound from '../pages/NotFound/NotFound';

const router = createBrowserRouter([
    {
        path:'/',
        element:<LoginLayOut></LoginLayOut>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'login',
                element:<LogIn></LogIn>
            },
            {
                path:'register',
                element:<Register></Register>
            },
            {
                path:"*",
                element:<NotFound></NotFound>
            }
        ]
    },
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'recipes',
                element:<Recipes></Recipes>,
                loader:()=> fetch('https://the-new-cooking-light-server-monirdewan.vercel.app/recipes')
            },
            {
                path:'chefs',
                element:<Chefs></Chefs>,
                loader:()=> fetch('https://the-new-cooking-light-server-monirdewan.vercel.app/recipes')
            },
            {
                path:'recipes/:id',
                element:<RcipeDetails></RcipeDetails>,
                loader:({params})=> fetch(`https://the-new-cooking-light-server-monirdewan.vercel.app/recipes/${params.id}`)
            },
            {
                path:'recipes/chef/:id',
                element:<ChefDetails></ChefDetails>,
                loader:({params})=> fetch(`https://the-new-cooking-light-server-monirdewan.vercel.app/recipes/chef/${params.id}`)
            }
        ]
    }
])



export default router;