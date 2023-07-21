import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../Hooks/useAuth";

const Navbar = () => {
  const { user, LogOut } = useAuth();

  const handleLogout = () => {
    LogOut()
      .then(() => {
        Swal.fire({
          title: "Logout successful",
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });
      })
      .catch((err) => console.log(err));
  };
  console.log(user);

  const navOptions = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/news">Booking</Link>
      </li>
      <li>
        <Link to="/destination">Transport</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>

      <li>
        {user ? (
          <span className="-mt-3">
            <Link
              onClick={handleLogout}
              className=" bg-[#F9A51A] text-black p-2 rounded-sm">
              Log Out
            </Link>
            <img
              src={user?.photoURL}
              alt=""
              className="border w-10 h-10 rounded-full"
            />
          </span>
        ) : (
          <>
            <>
              <Link
                to="/login"
                className=" bg-[#F9A51A] text-black hover:bg-slate-200">
                Login
              </Link>
            </>
          </>
        )}
      </li>
    </>
  );

  return (
    <div className="navbar  fixed   w-full z-10  bg-opacity-30 bg-black text-white">
      <div className="container mx-auto ">
        <div className="navbar-start ">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
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
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {navOptions}
            </ul>
            {/* search */}

            {/* search */}
          </div>
          <a className="btn btn-ghost normal-case text-xl">Travel & Tour</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        {/* <div className="navbar-end">
          <a className="btn">Get started</a>
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
