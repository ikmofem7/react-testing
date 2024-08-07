import { render, screen } from "@testing-library/react";
import RepositoriesSummary from "./RepositoriesSummary";

test("check for repository values", () => {
  const repository = {
    stargazers_count: 4,
    open_issues: 333,
    forks: 2,
    language: "Javascript",
  };
  render(<RepositoriesSummary repository={repository} />);

  for (const key in repository) {
    const value = repository[key];
    const element = screen.getByText(new RegExp(value));
    expect(element).toBeInTheDocument();
  }
});
