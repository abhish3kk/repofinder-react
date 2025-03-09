import { render } from "@testing-library/react";
import Card from "../../components/Card";
import { GitHubRepository } from "../../models/github.model";
import repos from "../../assets/repos.json";

const reposTyped = repos.items as GitHubRepository[];

describe("<Card />", () => {
  test("it should render the component", () => {
    const repo: GitHubRepository = reposTyped[0];
    render(<Card repo={repo} />);
  });
  test("it should handle the case when repo does not have description or language", () => {
    const repo: GitHubRepository = reposTyped[0];
    repo.description = "";
    repo.language = "";
    render(<Card repo={repo} />);
  });
});
