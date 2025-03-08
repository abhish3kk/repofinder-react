import { Outlet } from "react-router";

const Home = () => {
  return (
    <div>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Home;
