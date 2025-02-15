import { Link, Outlet } from "react-router";
import UserDropdown from "../components/UserDropdown";
import reactLogo from "../assets/react.svg";

function Home() {
  return (
    <div className="bg-white dark:bg-black ">
      <Link to="/" className="fixed left-4 top-4 w-auto text-right">
        <img src={reactLogo} className="mr-3 h-6 sm:h-9" />
      </Link>
      <UserDropdown />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Home;
