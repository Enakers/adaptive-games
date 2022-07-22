import {useSession} from "next-auth/react";
import {ReactNode, useEffect} from "react";
import {ToastContainer} from "react-toastify";
import {useStore} from "~/store";
import Navbar from "./Navbar";

interface Props {
  children: ReactNode;
}

const Layout = ({children}: Props) => {
  const {data: session} = useSession();
  const setWordLists = useStore(state => state.setWordLists);

  useEffect(() => {
    if (session?.user.wordLists) {
      setWordLists(session.user.wordLists);
    }
  }, [session]);

  return (
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
};

export default Layout;
