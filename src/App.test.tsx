import { describe, it, expect, test } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import user from "@testing-library/user-event";
import App from "./App";

describe("A truthy statement", () => {
  it("should be equal to 2", () => {
    expect(1 + 1).toEqual(2);
  });
});

test("show 6 products by default", async () => {
  render(<App />);
  const titles = await screen.findAllByRole("heading");
  expect(titles).toHaveLength(6);
});

test("clicking on load more button should load 6 products", async () => {
  render(<App />);
  const button = await screen.findByRole("button", { name: /load more/i })[0];

  user.click(button);
  await waitFor(async () => {
    const titles = await screen.findAllByRole("heading");
    expect(titles).toHaveLength(12);
  });
});
