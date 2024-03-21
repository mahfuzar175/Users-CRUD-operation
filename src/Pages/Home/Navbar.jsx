import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handlerSignOut = () =>{
    logOut()
    .then()
    .catch()
  }

  return (
    <div>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="w-full navbar bg-base-300">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="flex-1 px-2 mx-2 font-bold text-xl">
              ADMIN MANAGER
            </div>
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal font-semibold text-base">
                {/* Navbar menu content here */}
                <li>
                  <a>Users</a>
                </li>
              </ul>
            </div>
            {user ? (
                <button onClick={handlerSignOut} className="font-semibold text-base btn border-gray-600 hover:text-white hover:bg-slate-900">
                  Sign Out
                </button>
            ) : (
              <Link to="/">
                <button className="font-semibold text-base btn border-gray-600 hover:text-white hover:bg-slate-900">
                  Login
                </button>
              </Link>
            )}
          </div>
        </div>
        <div className="drawer-side" style={{ zIndex: 9999, position: 'fixed' }}>
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 font-semibold text-base">
            {/* Sidebar content here */}
            <li>
              <a>Users</a>
            </li>
          </ul>
        </div>
      </div>

    </div>
  );
};

export default Navbar;
