import {ReactNode} from "react";
import {ToastContainer} from "react-toastify";
import Navbar from "./Navbar";

interface Props {
  children: ReactNode;
}

const Layout = ({children}: Props) => (
  <>
    <Navbar />

    <main>{children}</main>

    <ToastContainer
      position="bottom-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  </>
);

export default Layout;
