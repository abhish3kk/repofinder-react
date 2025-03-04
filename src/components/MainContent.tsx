import { GitHubRepository, GitHubSearchResponse } from "../models/github.model";
import Nav from "./Nav";
import Card from "./Card";
import { useParams } from "react-router";
import { useEffect, useState } from "react";

import { GitHubSearchParams } from "../models/api.request.model";
import { useSettingsStore } from "../store/settingStore";
import { useLoader } from "../hooks";
import { STARRED_ROUTE } from "../models/app.types";
import apiService from "../api";

const MainContent = () => {
  const [repos, setRepos] = useState<GitHubRepository[]>([]);
  const { category } = useParams();
  const { startLoading, stopLoading } = useLoader();
  const { languages, order, perPage, sort, starGazers } = useSettingsStore();
  useEffect(() => {
    startLoading();
    const fetchRepos = async () => {
      if (!category || category === STARRED_ROUTE) {
        const response = await apiService.getStarred();
        setRepos((response?.responseObject as GitHubSearchResponse)?.items);
      } else {
        const searchParam: GitHubSearchParams = {
          q: `topic:${category}`,
        };
        if (languages.length) {
          searchParam.q = languages.reduce(
            (q, language) => `${q}+language:${language}`,
            searchParam.q,
          );
        }
        if (starGazers) {
          searchParam.q = `${searchParam.q}+${starGazers}`;
        }
        if (order) {
          searchParam.q = `${searchParam.q}&order=${order}`;
        }
        if (perPage) {
          searchParam.q = `${searchParam.q}&per_page=${perPage}`;
        }
        if (sort) {
          searchParam.q = `${searchParam.q}&sort=${sort}`;
        }
        const response = await apiService.getRepos(searchParam);
        setRepos((response?.responseObject as GitHubSearchResponse).items);
      }
      stopLoading();
    };
    fetchRepos();
  }, [
    category,
    languages,
    order,
    perPage,
    sort,
    starGazers,
    startLoading,
    stopLoading,
  ]);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="h-16" />
      <Nav />
      <div className="flex flex-1 justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-4xl space-y-2">
          {repos?.map((repo) => <Card key={repo.id} repo={repo} />)}
        </div>
      </div>
    </div>
  );
};

export default MainContent;
