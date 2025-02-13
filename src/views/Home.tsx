import { useState } from "react";
import reactLogo from "../assets/react.svg";
import { getUserDetails } from "../api";
import Header from "../components/Header";

function Home() {
  const [count, setCount] = useState(0);
  const handleClick = async () => {
    setCount((count) => count + 1)
    await getUserDetails()
  }
  return (
    <>
      <Header />
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={handleClick}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default Home;
