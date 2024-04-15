import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


import Header from "./components/Header/Header.js";
import Login from "./pages/Login/Login.js";
import Menu from "./pages/Menu/Menu.js";
import Profile from "./pages/Profile/Profile.js";
import Users from "./pages/Users/Users.js";
import Cart from "./pages/Cart/Cart.js";
import Store from "./pages/Store/Store.js";
import Notifications from "./pages/Notifications/Notifications.js";
import Transfer from "./pages/Transfer/Transfer.js";

const router = createBrowserRouter([
  {
    path: "/",
    element:  <Menu/>,
    errorElement: <h2>404 Page not found</h2>
  },
  {
    path: "/login",
    element:  <Login/>
  },
  {
    path: "/profile",
    element:  <Profile/>
  },
  {
    path: "/users",
    element:  <Users/>
  },
  {
    path: "/cart",
    element:  <Cart/>
  },
  {
    path: "/store",
    element:  <Store/>
  },
  {
    path: "/notifications",
    element:  <Notifications/>
  },
  {
    path: "/transfer",
    element:  <Transfer/>
  }
])

function App() {
  return (
    <div className="App">
      <Header/>
      <main className="App_main_section">
        <RouterProvider router={router}/>
        {/*<Login/>*/}
        {/*<Menu/>*/}
        {/*<Profile/>*/}
      </main>
    </div>
  );
}

export default App;
