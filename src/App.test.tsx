import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import App from "./App";
import userEvent from "@testing-library/user-event";

const userName = {
  name: "ikram",
  email: "mohamedikramks7@gmail.ocm",
};

test("Can recieve a new user and show it on list", async () => {
  render(<App />);
  const nameInput = screen.getByRole("textbox", {
    name: /name/i,
  });
  const emailInput = screen.getByRole("textbox", {
    name: /email/i,
  });

  const button = screen.getByRole("button");

  await userEvent.click(nameInput);
  await userEvent.keyboard(userName.name);

  await userEvent.click(emailInput);
  await userEvent.keyboard(userName.email);

  await userEvent.click(button);

  //   screen.debug();
  const name = screen.getByRole("cell", { name: userName.name });
  const email = screen.getByRole("cell", { name: userName.email });

  expect(name).toBeInTheDocument();
  expect(email).toBeInTheDocument();
});
