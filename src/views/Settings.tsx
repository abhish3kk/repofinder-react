import { useEffect, useState } from "react";
import Setting, { Option, SettingsProps } from "../components/Setting";
import {
  GitHubLanguage,
  GitHubOrder,
  GitHubSort,
  GitHubStars,
  GitHubTopic,
} from "../models/github.types";
import { enumToArray } from "../utils";
import { useSettingsStore } from "../store/settingStore";
import { SaveSettingsRequest } from "../models/api.request.model";
import { useLoader } from "../hooks";
import apiService from "../api";
import { useAuthStore } from "../store";

const Settings = () => {
  const [topicSetting, setTopicSetting] = useState<SettingsProps>();
  const [languageSetting, setLanguageSetting] = useState<SettingsProps>();
  const [starSetting, setStarSetting] = useState<SettingsProps>();
  const [sortSetting, setSortSetting] = useState<SettingsProps>();
  const [orderSetting, setOrderSetting] = useState<SettingsProps>();
  const { startLoading, stopLoading } = useLoader();
  const {
    setTopics,
    setLanguages,
    setStarGazers,
    setSort,
    setOrder,
    setPerPage,
    topics,
    languages,
    starGazers,
    sort,
    order,
    perPage,
  } = useSettingsStore();

  const { user } = useAuthStore();

  useEffect(() => {
    setTopicSetting({
      label: "Select Topics",
      multiple: true,
      selected: topics,
      options: enumToArray(GitHubTopic),
      onSelect: (value: Option[] | Option | null) => {
        if (Array.isArray(value)) {
          const topics: string[] = value.map((item) => item.value);
          setTopics(topics);
        }
      },
    });
    setLanguageSetting({
      label: "Select Language",
      multiple: true,
      selected: languages,
      options: enumToArray(GitHubLanguage),
      onSelect: (value: Option[] | Option | null) => {
        if (Array.isArray(value)) {
          const languages: string[] = value.map((item) => item.value);
          setLanguages(languages);
        }
      },
    });

    setStarSetting({
      label: "Select Stars Filter",
      multiple: false,
      selected: starGazers,
      options: enumToArray(GitHubStars),
      onSelect: (value: Option[] | Option | null) => {
        if (value && "value" in value) {
          setStarGazers(value.value as GitHubStars);
        }
      },
    });

    setSortSetting({
      label: "Select Sort",
      multiple: false,
      selected: sort,
      options: enumToArray(GitHubSort),
      onSelect: (value: Option[] | Option | null) => {
        if (value && "value" in value) {
          setSort(value.value as GitHubSort);
        }
      },
    });

    setOrderSetting({
      label: "Select Order",
      multiple: false,
      selected: order,
      options: enumToArray(GitHubOrder),
      onSelect: (value: Option[] | Option | null) => {
        if (value && "value" in value) {
          setOrder(value.value as GitHubOrder);
        }
      },
    });
  }, [
    topics,
    languages,
    starGazers,
    sort,
    order,
    setTopics,
    setLanguages,
    setStarGazers,
    setSort,
    setOrder,
  ]);

  const save = async () => {
    startLoading();
    const request: SaveSettingsRequest = {
      topics: topics.join(","),
      languages: languages.join(","),
      order: order,
      perPage: perPage,
      sort: sort,
      starGazers: starGazers,
    };
    await apiService.saveSettings(request);
    stopLoading();
  };

  return (
    <div className="flex flex-col min-h-screen ">
      <div className="h-16" />
      <div className="flex flex-1 justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-xl shadow-md rounded-lg p-4 space-y-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-white">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white text-center">
            Settings
          </h1>
          <div className="space-y-4">
            {topicSetting ? <Setting setting={topicSetting} /> : ""}
            {languageSetting ? <Setting setting={languageSetting} /> : ""}
            {starSetting ? <Setting setting={starSetting} /> : ""}
            {sortSetting ? <Setting setting={sortSetting} /> : ""}
            {orderSetting ? <Setting setting={orderSetting} /> : ""}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Per Page
              </label>
              <input
                type="number"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Per Page"
                value={perPage}
                onChange={(e) => setPerPage(Number(e.target.value))}
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <button
                type="button"
                className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 cursor-pointer disabled:bg-gray-400 disabled:cursor-default"
                onClick={save}
                disabled={!user}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
