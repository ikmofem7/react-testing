import { cleanup, render, screen, within } from "@testing-library/react";
import { beforeEach, expect, test } from "vitest";
import { UserList } from "./UserList";

beforeEach(() => {
  cleanup();
});
test("render one row", () => {
  const users = [
    { name: "jane", email: "jane@gmail.com" },
    { name: "ikram", email: "mohamedikramks7@gmail.com" },
  ];

  render(<UserList users={users} />);

  //   screen.logTestingPlaygroundURL();
  const rows = within(screen.getByTestId("users")).getAllByRole("row");
  expect(rows).toHaveLength(2);
});

test("render the name and email of each user", () => {
  const users = [
    { name: "jane", email: "jane@gmail.com" },
    { name: "ikram", email: "mohamedikramks7@gmail.com" },
  ];

  render(<UserList users={users} />);
  //   screen.logTestingPlaygroundURL();
  for (const user of users) {
    const name = screen.getByRole("cell", { name: user.name });
    const email = screen.getByRole("cell", { name: user.email });
    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  }
});
