import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";



import { Signup } from "./pages/Signup"; 
import { Login} from "./pages/Login"; 




export const route = createBrowserRouter([
 {
  path: "/",
  element: <Home/>
 },
 {
  path: "/login",
   element:<Login/>
 },
 {
  path: "/signup",
  element:<Signup/>

 },

]);
