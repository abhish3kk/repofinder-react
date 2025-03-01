import { Link, useParams } from "react-router";
import { useSettingsStore } from "../store/settingStore";
import { enumToArray, getLabelFromOption } from "../utils";
import { GitHubTopic } from "../models/github.types";
import { STARRED_ROUTE } from "../models/app.types";
import { useAuthStore } from "../store";

const Nav = () => {
  const { category } = useParams();
  const { topics } = useSettingsStore();
  const { user } = useAuthStore();

  return (
    <nav
      className="-mb-0.5 flex justify-center gap-x-6"
      aria-label="Tabs"
      role="tablist"
      aria-orientation="horizontal"
    >
      {user ? (
        <Link
          className={`hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap hover:text-blue-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none active cursor-pointer ${category === STARRED_ROUTE || !category ? "border-blue-600 font-semibold text-blue-600" : "text-gray-500"}`}
          to={`/${STARRED_ROUTE}`}
        >
          Starred
        </Link>
      ) : (
        ""
      )}
      {topics.map((topic) => (
        <Link
          className={`hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap hover:text-blue-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none active cursor-pointer ${category === topic ? "border-blue-600 font-semibold text-blue-600" : "text-gray-500"}`}
          key={topic}
          to={`/${topic}`}
        >
          {getLabelFromOption(topic, enumToArray(GitHubTopic))}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
