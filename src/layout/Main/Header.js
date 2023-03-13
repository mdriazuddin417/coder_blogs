import { useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogOut } from "../../redux/action/userAction";
import logo from "../../image/logo.png";

const Header = () => {
  const [openNav, setOpenNav] = useState(false);
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-light-blue-700 font-semibold" : undefined
          }
        >
          Home
        </NavLink>
      </Typography>

      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink
          to="/history"
          className={({ isActive }) =>
            isActive ? "text-light-blue-700 font-semibold" : undefined
          }
        >
          History
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink
          to="/wishlist"
          className={({ isActive }) =>
            isActive ? "text-light-blue-700 font-semibold" : undefined
          }
        >
          Wishlist
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink
          to="/tags"
          className={({ isActive }) =>
            isActive ? "text-light-blue-700 font-semibold" : undefined
          }
        >
          Tags
        </NavLink>
      </Typography>
      {user && (
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-normal"
        >
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive ? "text-light-blue-700 font-semibold" : undefined
            }
          >
            Dashboard
          </NavLink>
        </Typography>
      )}
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-light-blue-700 font-semibold" : undefined
          }
        >
          Contact
        </NavLink>
      </Typography>
    </ul>
  );

  return (
    <Navbar className=" py-2 px-4 lg:px-8 lg:py-4 shadow-none">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <div className="w-[120px] ">
          <img src={logo} className="w-full lg:scale-[2]" alt="logo" />
        </div>
        <div className="hidden lg:block">{navList}</div>
        {!user ? (
          <Link to={"login"}>
            <Button
              variant="gradient"
              size="md"
              className="hidden lg:inline-block"
            >
              <span>Login</span>
            </Button>
          </Link>
        ) : (
          <Button
            variant="gradient"
            size="md"
            className="hidden lg:inline-block"
            onClick={() => dispatch(userLogOut())}
          >
            <span>Logout</span>
          </Button>
        )}
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">
          {navList}
          {!user ? (
            <Link to={"login"}>
              <Button
                variant="gradient"
                size="md"
                className="hidden lg:inline-block"
              >
                <span>Login</span>
              </Button>
            </Link>
          ) : (
            <Button
              variant="gradient"
              size="md"
              className="hidden lg:inline-block"
              onClick={() => dispatch(userLogOut())}
            >
              <span>Logout</span>
            </Button>
          )}
        </div>
      </MobileNav>
    </Navbar>
  );
};

export default Header;
