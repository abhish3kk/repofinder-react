import { GitHubRepository, GitHubSearchResponse } from "../models/github.model";
import Nav from "./Nav";
import data from "../assets/repos.json";
import Card from "./Card";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { getRepos, getStarred } from "../api";
import { GitHubSearchParams } from "../models/api.request.model";
import { useLoader } from "../contexts/LoaderContext";

const MainContent = () => {
  const [repos, setRepos] = useState(data.items as GitHubRepository[]);
  const { category } = useParams();
  const { startLoading, stopLoading } = useLoader();

  useEffect(() => {
    const fetchRepos = async () => {
      startLoading();
      if (!category || category === "favourites") {
        const response = await getStarred();
        setRepos((response.responseObject as GitHubSearchResponse).items);
      } else {
        const searchParam: GitHubSearchParams = {
          q: `topic:${category}`,
        };
        const response = await getRepos(searchParam);
        setRepos((response.responseObject as GitHubSearchResponse).items);
      }
      stopLoading();
    };
    fetchRepos();
  }, [category]);

  return (
    <div className="flex flex-col min-h-screen ">
      <div className="h-16" />
      <Nav />
      <div className="flex flex-1 justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-4xl shadow-md rounded-lg p-4 space-y-4">
          {repos.map((repo) => (
            <Card key={repo.id} repo={repo} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainContent;
