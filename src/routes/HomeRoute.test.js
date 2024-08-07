import { rest } from "msw";
import { setupServer } from "msw/node";
import HomeRoute from "./HomeRoute";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { createServer } from "../util/server";

createServer([
  {
    path: "/api/repositories",
    res: (req, res, ctx) => {
      const language = req.url.searchParams.get("q").split("language:")[1];
      console.log({ language });
      return {
        items: [
          { id: 1, full_name: `${language}_1` },
          { id: 2, full_name: `${language}_2` },
        ],
      };
    },
  },
]);

test("render two links for handlers", async () => {
  render(
    <MemoryRouter>
      <HomeRoute />
    </MemoryRouter>
  );
  await pause();
  const languages = [
    "javascript",
    "typescript",
    "rust",
    "go",
    "phyton",
    "java",
  ];
  for (const language of languages) {
    const links = await screen.findAllByRole("link", {
      name: new RegExp(`${language}_`),
    });
    expect(links).toHaveLength(2);
    expect(links[0]).toHaveTextContent(`${language}_1`);
    expect(links[1]).toHaveTextContent(`${language}_2`);
  }
});

const pause = () => {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve();
    }, 1000)
  );
};
