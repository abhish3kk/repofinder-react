import { GitHubRepository } from "../models/github.model"

interface CardProps {
  repo: GitHubRepository
} 


const Card = ({repo} : CardProps) => {

  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-4 border border-gray-200 dark:border-gray-800">
      <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400">
        {repo.name}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 text-sm mt-1 overflow-hidden">
        {repo.description || "No description provided."}
      </p>
      <div className="flex items-center justify-between text-gray-500 dark:text-gray-400 text-sm mt-3">
        <span>{repo.language || "Unknown"}</span>
        <div className="flex space-x-3">
          <span>⭐ {repo.stargazers_count}</span>
          <span>🍴 {repo.forks_count}</span>
        </div>
      </div>
    </div>
  )
}

export default Card