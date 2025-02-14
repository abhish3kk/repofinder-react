import { GitHubRepository } from "../models/github.model"
import Nav from "./Nav"
import data from '../assets/repos.json'
import Card from "./Card"


const MainContent = () => {
  const repos = data.items as GitHubRepository[]
  return (
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
  )
}

export default MainContent