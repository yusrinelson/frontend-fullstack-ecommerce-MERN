import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import { MdClose, MdMenu } from "react-icons/md";
import { FaOpencart } from "react-icons/fa";

import logo from "../assets/logo.svg";
import logout from "../assets/logout.svg";
import user from "../assets/user.svg";
import { ShopContext } from "../Context/ShopContext";

export default function Header() {
  const [menuOpened, setMenuOpened] = useState(false);
  const toggleMenu = () => setMenuOpened(!menuOpened);
  const { getTotalCartItems } = useContext(ShopContext);

  return (
    <header className="fixed top-0 left-0 m-auto max_padd_container w-full bg-white ring-1 ring-slate-900/5 z-10">
      <div className="px-4 flexBetween py-3 max-xs:px-2">
        <div>
          <Link>
            <img src={logo} alt="" height={66} width={88} />
          </Link>
        </div>
        <Navbar
          containerStyles={"hidden md:flex gap-x-4 xl:gap-x-8 medium-15"}
        />

        <Navbar
          containerStyles={`${
            menuOpened
              ? "flex items-start flex-col gap-y-12 fixed top-20 right-8 p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 trasition-all duration-300"
              : "flex item-start flex-col gap-y-12 fixed top-20 p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 trasition-all duration-300 -right-[100%]"
          }`}
        />
        <div className="flexBetween gap-x-1 sm:gap-x-16 bold-16">
          {!menuOpened ? (
            <MdMenu
              className="md:hidden cursor-pointer hover:text-secondary mr-2 p-1 ring-1 ring-slate-900/30 h-8 w-8 rounded-full hover:ring-secondary"
              onClick={toggleMenu}
            />
          ) : (
            <MdClose
              className="md:hidden cursor-pointer hover:text-secondary mr-2 p-1 ring-1 ring-slate-900/30 h-8 w-8 rounded-full hover:ring-secondary"
              onClick={toggleMenu}
            />
          )}
          <div className="flexBetween sm:gap-x-6">
            <NavLink to={"cart-page"} className={"flex"}>
              <FaOpencart className="p-1 h-8 w-8 ring-slate-900/30 ring-1 rounded-full" />
              <span className="relative flexCenter w-5 h-5 text-white bg-secondary rounded-full medium-14 -top-2">
                {getTotalCartItems()}
              </span>
            </NavLink>

            {/* allowing the user to logout. removing the auth-token and redirecting the user to the home page */}
            {localStorage.getItem("auth-token") ? (
              <NavLink
                onClick={() => {localStorage.removeItem("auth-token"); window.location.replace("/");} }
                to={"logout"}
                className={"btn_secondary_rounded flexCenter gap-x-2 medium-16"}
              >
                <img src={logout} alt="logoutIcon" height={19} width={19} />
                Logout
              </NavLink>
            ) : (
              <NavLink
                to={"login"}
                className={"btn_secondary_rounded flexCenter gap-x-2 medium-16"}
              >
                <img src={user} alt="logoutIcon" height={19} width={19} /> Login
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
