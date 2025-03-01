import { Outlet } from "react-router";

function Home() {
  return (
    <div>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Home;
