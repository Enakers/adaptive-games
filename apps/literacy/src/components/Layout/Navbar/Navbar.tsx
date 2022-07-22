import dynamic from "next/dynamic";
import Link from "next/link";
import {HiMenuAlt1} from "react-icons/hi";
import Nav from "./Nav";
import UserDropdown from "./UserDropdown";

const ThemeToggle = dynamic(import("./ThemeToggle"), {ssr: false});

const Navbar = () => (
  <div className="navbar bg-base-200 mb-8">
    <div className="navbar-start">
      <div className="dropdown">
        <button type="button" tabIndex={0} className="btn btn-ghost lg:hidden text-lg">
          <HiMenuAlt1 />
        </button>
        <Nav className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52" />
      </div>

      <Link href="/" passHref>
        <a href="dummy" className="btn btn-ghost normal-case text-xl">
          Literacy
        </a>
      </Link>

      <div className="hidden lg:flex">
        <Nav className="menu menu-horizontal p-0" />
      </div>
    </div>

    <div className="navbar-end">
      <UserDropdown />
      <ThemeToggle />
    </div>
  </div>
);

export default Navbar;
