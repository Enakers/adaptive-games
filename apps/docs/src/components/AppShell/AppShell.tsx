/* eslint-disable jsx-a11y/label-has-associated-control */
import dynamic from "next/dynamic";
import Link from "next/link";
import {FC, ReactNode} from "react";
import {HiOutlineMenuAlt1} from "react-icons/hi";

const ThemeToggle = dynamic(() => import("./ThemeToggle"), {ssr: false});

const SidebarMenu = () => <ul className="menu menu-compact flex flex-col p-0 px-4" />;

const AppShell: FC<{children: ReactNode}> = ({children}) => (
  <div className="drawer drawer-mobile">
    <input id="sidebar" type="checkbox" className="drawer-toggle" />
    <div
      className="drawer-content"
      style={{
        scrollBehavior: "smooth",
        scrollPaddingTop: "5rem"
      }}
    >
      <div className="sticky top-0 z-30 flex h-16 w-full justify-center bg-opacity-90 backdrop-blur transition-all duration-100 bg-base-100 text-base-content">
        <nav className="navbar">
          <div className="navbar-start" />
          <div className="navbar-end mr-2">
            <ThemeToggle />
          </div>
        </nav>
      </div>
      <div className="mx-10">{children}</div>
    </div>
    <div className="drawer-side" style={{scrollBehavior: "smooth", scrollPaddingTop: "5rem"}}>
      <label htmlFor="sidebar" className="drawer-overlay" />
      <aside className="bg-base-200 w-80">
        <div className="z-20 bg-base-200 bg-opacity-90 backdrop-blur sticky top-0 items-center gap-2 px-4 py-2 hidden lg:flex shadow-sm">
          <label htmlFor="sidebar" className="btn btn-ghost drawer-button lg:hidden">
            <HiOutlineMenuAlt1 />
          </label>
          <Link href="/" passHref>
            <a href="dummy" className="btn btn-ghost normal-case text-xl" aria-label="Home">
              Adaptive Games Docs
            </a>
          </Link>
        </div>
        <SidebarMenu />
        <div className="from-base-200 pointer-events-none sticky bottom-0 flex h-20 bg-gradient-to-t to-transparent" />
      </aside>
    </div>
  </div>
);

export default AppShell;
