import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import { useContext } from 'react';
import Swal from 'sweetalert2';

const NavBar = () => {
  const { user, logoutUser } = useContext(AuthContext);

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? 'pending'
              : isActive
              ? 'bg-error text-white text-base px-4 py-2 rounded-lg'
              : ''
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/add"
          className={({ isActive, isPending }) =>
            isPending
              ? 'pending'
              : isActive
              ? 'bg-error text-white text-base px-4 py-2 rounded-lg'
              : ''
          }
        >
          Add Product
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/cart"
          className={({ isActive, isPending }) =>
            isPending
              ? 'pending'
              : isActive
              ? 'bg-error text-white text-base px-4 py-2 rounded-lg'
              : ''
          }
        >
          My Cart
        </NavLink>
      </li>
    </>
  );

  const handleLogout = () => {
    logoutUser()
      .then(() => {
        Swal.fire({
          title: 'Awesome!',
          text: 'Logged Out successfully!',
          icon: 'success',
          confirmButtonText: 'Cool',
        });
      })
      .catch(error =>
        Swal.fire({
          title: 'Error!',
          text: error.message,
          icon: 'error',
          confirmButtonText: 'Cool',
        })
      );
  };

  return (
    <div>
      <div className="navbar bg-transparent lg:px-0">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>

          <div className="border-2 border-error rounded-xl bg-base-100">
            <img className="w-36 h-full" src="./logo.png" alt="" />
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex flex-wrap items-center gap-8 text-sm menu-horizontal px-1">
            {navLinks}
          </ul>
        </div>
        <div className="navbar-end">
          <div>
            {user ? (
              <div className="flex flex-col md:flex-row items-center gap-2">
                <div className="flex items-center gap-2">
                  <div className="avatar ">
                    <div className="w-5 h-5 md:w-10 md:h-10 rounded-full">
                      <img src={user?.photoURL} />
                    </div>
                  </div>
                  <p>{user?.displayName}</p>
                </div>

                <button onClick={handleLogout} className="btn btn-secondary">
                  Logout
                </button>
              </div>
            ) : (
              <Link to="/login" className="btn btn-error text-white">
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
