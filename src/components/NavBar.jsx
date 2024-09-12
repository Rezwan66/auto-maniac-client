import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
// import logo from '../assets/logo.png';
import logo2 from '../assets/logo-noBg.png';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

const NavBar = () => {
  const { user, logoutUser } = useContext(AuthContext);
  const [dark, setDark] = useState(() => {
    const storedTheme = localStorage.getItem('darkMode');
    return storedTheme === 'true'; //convert our string to boolean
  });
  // console.log(dark);

  const handleToggleTheme = () => {
    // const element = document.body;
    // element.classList.toggle('dark-mode');
    const newDarkMode = !dark; //toggle theme
    setDark(newDarkMode); //update the state
    //Applying to body
    if (newDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
    localStorage.setItem('darkMode', newDarkMode); //save to LS
  };
  //On component mount, apply the stored theme to the body
  useEffect(() => {
    const element = document.body;
    if (dark) {
      element.classList.add('dark-mode');
    } else {
      element.classList.remove('dark-mode');
    }
  }, [dark]);

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? 'pending'
              : isActive
              ? 'bg-error text-white text-base px-3 py-1 rounded-lg'
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
              ? 'bg-error text-white text-base px-3 py-1 rounded-lg'
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
              ? 'bg-error text-white text-base px-3 py-1 rounded-lg'
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
      <div className="navbar bg-transparent lg:px-5 py-5">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-gray-900"
            >
              {navLinks}
            </ul>
          </div>

          <div className="flex items-center">
            <Link to="/" className="border-error bg-transparent">
              {/* <img className="w-32 h-full" src={logo} alt="" /> */}
              <img className="w-32 h-full" src={logo2} alt="" />
            </Link>
            <div>
              <button onClick={handleToggleTheme}>
                <DarkModeSwitch
                  style={{ marginLeft: '20px', marginTop: '4px' }}
                  checked={dark}
                  onChange={handleToggleTheme}
                  size={30}
                />
              </button>
            </div>
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
                  <div className="avatar hidden md:block">
                    <div className="w-5 h-5 md:w-10 md:h-10 rounded-full">
                      <img src={user?.photoURL} />
                    </div>
                  </div>
                  <p>{user?.displayName}</p>
                </div>

                <button
                  onClick={handleLogout}
                  className="btn btn-error btn-sm text-white"
                >
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
