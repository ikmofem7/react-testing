import { cleanup, render, screen, waitFor } from "@testing-library/react";
import user from "@testing-library/user-event";
import { beforeEach, expect, test, vi } from "vitest";
import { UserForm } from "./UserForm";
import "@testing-library/jest-dom/vitest";
beforeEach(() => {
  cleanup();
});
test("It's shows 2 inputs and button", () => {
  render(<UserForm onAddUser={() => {}} />);

  const inputs = screen.getAllByRole("textbox");
  const button = screen.getByRole("button");

  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
});

test("entering data in form and getting onAddUser", async () => {
  const mockCallback = vi.fn();
  render(<UserForm onAddUser={mockCallback} />);

  const nameInput = screen.getByLabelText(/name/i);
  const emailInput = screen.getByLabelText(/email/i);

  await user.type(nameInput, "jane");
  await user.type(emailInput, "jane@example.com");

  const submitButton = screen.getByRole("button", { name: /add user/i });
  await user.click(submitButton);

  await waitFor(() => {
    expect(mockCallback).toHaveBeenCalled();
    expect(mockCallback).toHaveBeenCalledOnce();
    expect(mockCallback).toHaveBeenCalledWith({
      name: "jane",
      email: "jane@example.com",
    });
  });
});

test("inputs emptied out on form submitted", async () => {
  render(
    <UserForm
      onAddUser={(value) => {
        console.log({ value });
      }}
    />
  );

  const nameInput = screen.getByLabelText(/name/i);
  const emailInput = screen.getByLabelText(/email/i);

  await user.type(nameInput, "jane");
  await user.type(emailInput, "jane@example.com");

  const submitButton = screen.getByRole("button", { name: /add user/i });
  await user.click(submitButton);

  expect(nameInput).toHaveValue("");
  expect(emailInput).toHaveValue("");
});
