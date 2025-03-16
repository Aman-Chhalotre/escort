import { Box, Drawer } from "@mui/material";
import { useState } from "react";
import { FaWhatsapp, FaTelegramPlane, FaYoutube } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";

import { Link, NavLink } from "react-router-dom";
import Breadcrumb from "../BreadCrumb";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const navbarRoutes = [
    {
      name: "ESCORTS",
      route: "/escorts",
    },
    {
      name: "LOCATIONS",
      route: "/locations",
    },
    {
      name: "SERVICES",
      route: "/services",
    },
    {
      name: "FETISH",
      route: "/fetish",
    },
    {
      name: "NATIONALITY",
      route: "/nationality",
    },
    // {
    //   name: "APPEARANCE",
    //   route: "/appearance",
    // },
    {
      name: "COMMON",
      route: "/",
    },
    {
      name: "OTHER",
      route: "/",
    },
  ];

  return (
    <>
      <nav className="bg-[#9233eaea] px-4 py-8 rounded-lg flex items-center justify-between sticky top-0 z-30">
        <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
          <Box
            sx={{ width: 300, height: "100%", background: "#300354" }}
            role="presentation"
            onClick={toggleDrawer(false)}
          >
            <ul className="w-full mt-10 p-5 text-center md:space-x-7 space-x-5 text-white font-semibold space-y-10">
              {navbarRoutes.map((route, index) => (
                <li key={index}>
                  <NavLink
                    to={route.route}
                    className={({ isActive }) =>
                      `${
                        isActive ? "border-b-2 border-red-500" : ""
                      } hover:text-gray-300 font-bold text-sm`
                    }
                  >
                    {route.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </Box>
        </Drawer>

        <div className="flex items-center">
          {/* <img
          src="/logo.png" 
          alt="Escort Club"
          className="h-12 w-auto"
        /> */}
          <NavLink to={"/"} className="text-xl font-bold text-red-500">
            Escort Palma
          </NavLink>
        </div>

        <ul className="md:space-x-7 space-x-5 text-white font-semibold lg:flex hidden">
          {navbarRoutes.map((route)=>(
          <li>
          <NavLink
            to={route.route}
            className={({ isActive }) =>
              `${
                isActive ? "border-b-2 border-red-500" : ""
              } hover:text-gray-300 font-bold text-sm`
            }
            >
            {route.name}
          </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex space-x-4 text-white">
          <a href="#" className="hover:text-gray-300">
            <FaWhatsapp size={24} />
          </a>
          <Link to={"/admin"} className="bg-purple-500 px-2 rounded-lg ">Admin</Link>
          {/* <a href="#" className="hover:text-gray-300">
            <FaTelegramPlane size={24} />
          </a>
          <a href="#" className="hover:text-gray-300">
            <FaYoutube size={24} />
          </a> */}

          <button onClick={toggleDrawer(true)} className="lg:hidden block pl-3">
            <FiMenu className="text-2xl" />
          </button>
        </div>
      </nav>
      <div className="bg-gradient-to-r from-purple-900 to-indigo-800 pt-6 rounded-b-3xl shadow-lg text-white relative">
        <div className="grid grid-cols-2 sm:px-10 px-5">
          <div className="sm:px-8 px-3">
            <h1 className="text-3xl md:text-7xl font-bold text-pink-400">
              ESCORT
            </h1>
            <h1 className="text-4xl md:text-8xl font-bold md:mt-[-20px] mt-[-10px] text-pink-600">
              PALMA
            </h1>
            
            <div className=" ">
            <div className="flex flex-row flex-wrap justify-start gap-1 md:mb-5">
              <NavLink to={"/escorts"} className="mt-6 sm:px-6 px-2 py-2 sm:text-base text-center text-xs bg-pink-500 text-white font-bold rounded-full shadow-lg hover:bg-pink-600 transition-all">
                Get started
              </NavLink>
              <NavLink
                to={"/apply"}
                className="md:mt-6  sm:text-base text-xs sm:px-6 px-2 py-2 bg-pink-500 text-white font-bold rounded-full shadow-lg hover:bg-pink-600 transition-all text-center"
              >
                Apply Now
              </NavLink>
              <NavLink
                to={"/checkStatus"}
                className="md:mt-6 sm:text-base text-xs sm:px-6 px-2 py-2 bg-pink-500 text-white font-bold rounded-full shadow-lg hover:bg-pink-600 transition-all text-center"
              >
                Check Status
              </NavLink>
            </div>
            </div>
            
          </div>
          <img
            src="/images/present-girl.webp"
            alt="Main Model"
            className="w-[100px] md:w-[150px] z-[20] sm:justify-self-auto justify-self-end"
          />
          <div className=" gap-10 h-[270px] sm:flex hidden absolute right-10 ">
            {/* <div className="absolute -right-10 top-10 flex flex-col space-y-4"> */}
            <img
              src="/images/Helcy.webp"
              alt="Model 1"
              className="h-24 md:h-32 rounded-lg border-2 border-pink-400 shadow-lg place-self-start"
            />
            <img
              src="/images/Liza.webp"
              alt="Model 2"
              className="h-24 md:h-32 rounded-lg border-2 border-pink-400 shadow-lg place-self-center"
            />
            <img
              src="/images/Sheila.webp"
              alt="Model 3"
              className="h-24 md:h-32 rounded-lg border-2 border-pink-400 shadow-lg mt-8"
            />
            {/* </div> */}
          </div>
        </div>
      </div>
      <Breadcrumb />
    </>
  );
};

export default Navbar;
