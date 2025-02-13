import Dropdown from "../components/Dropdown";
import Nav from "../components/Nav";
import data from '../assets/repos.json'
import { GitHubRepository } from "../models/github.model";
import Card from "../components/Card";

function Home() {
  const repos = data.items as GitHubRepository[]
  return (
    <div className="bg-white dark:bg-black ">
      <Dropdown />
      <div className="flex flex-col min-h-screen ">
        <div className="h-16" />
        <Nav />
        <div className="flex flex-1 justify-center px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-4xl shadow-md rounded-lg p-4 space-y-4">
            {repos.map((repo) => (
              <Card key={repo.id} repo={ repo } />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
