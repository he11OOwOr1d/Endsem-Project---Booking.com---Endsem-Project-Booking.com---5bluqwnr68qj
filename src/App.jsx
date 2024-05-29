
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Homepage from './components/Homepage';
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import HotelDetail from "./components/HotelDetail";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Homepage/>,
    },
    {
        path:"/signup",
        element:<Signup/>
    },
    {
        path:"/signin",
        element:<Signin/>
    },
    {
      path:"/hotel/:hotelid",
      element:<HotelDetail/>
    }
  ]);
function App() {

    return <RouterProvider router={router} />;
}

export default App