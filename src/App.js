import { 
    createBrowserRouter,
    Route,
    createRoutesFromElements,
    RouterProvider
 } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";

import Home from "./pages/Home";
import Order from "./pages/Order";
import Faq from "./pages/Faq";
import Reviews from "./pages/Reviews";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
// home faq review order contact

const router = createBrowserRouter(
    createRoutesFromElements(
        
        <Route path="/" element={ <RootLayout /> } >

            <Route index element={ <Home /> }  />  

            <Route path="order" element={ <Order /> } />

            <Route path="faq" element={ <Faq /> } />

            <Route path="reviews" element={ <Reviews /> } />

            <Route path="contact" element={ <Contact /> } />

            <Route path="*" element={ <NotFound /> } />
        </Route>
    )
)





function App() {
  return (
    <div className="App">
        
        <RouterProvider router={router} />

    </div>
  );
}

export default App;
