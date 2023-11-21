import { Outlet, Link } from "react-router-dom";
import "../style/Layout.module.css";
import Logout from "../../components/Logout";
const Layout = ({ isLogged, setisLogged, WishlistState, setWishlistState,users,setUsers }) => {
  return (
    <>
      <nav>
        <h1
          className="wishHead"
          style={{ fontSize: "20px", color: " rgb(100, 100, 213)" }}
        >
          Bags
        </h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {!isLogged ? (
            <>
              <li>
                <Link to="/Login">Login</Link>
              </li>
              <li>
                <Link to="/Register">Register</Link>
              </li>
            </>
          ) : null}

          {isLogged ? (
            <>
              <li>
                <Link to="/Wishlist">Wishlist</Link>
              </li>
              <li>
                <Link to="/Basket">Basket</Link>
              </li>
              <li>
                <Logout
                  isLogged={isLogged}
                  setisLogged={setisLogged}
                  WishlistState={WishlistState}
                  setWishlistState={setWishlistState}
                  users={users}
                  setUsers={setUsers}
                />
              </li>
            </>
          ) : null}
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
