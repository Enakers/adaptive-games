import {signIn, signOut, useSession} from "next-auth/react";
import Image from "next/image";
import {FaUser} from "react-icons/fa";

const UserDropdown = () => {
  const {status, data: session} = useSession();

  if (status === "unauthenticated") {
    return (
      <button type="button" className="btn btn-ghost" onClick={() => signIn("google")}>
        Login
      </button>
    );
  }

  return (
    <div className="dropdown dropdown-start mr-2">
      <button type="button" tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="rounded-full">
          {session?.user?.image ? (
            <Image src={session.user.image} alt="User image" width="32" height="32" />
          ) : (
            <FaUser />
          )}
        </div>
      </button>
      <ul className="mt-2 p-2 shadow menu menu-compact dropdown-content bg-base-200 rounded-box">
        <li>
          <button type="button" className="btn btn-ghost" onClick={() => signOut()}>
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default UserDropdown;
