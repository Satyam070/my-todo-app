import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom"; // ✅ Import this
import App from "../App";

test("To-Do App > adds and removes a task", () => {
  render(<App />);

  // Click the "Add" button
  const addButton = screen.getByRole("button", { name: "Add" });
  fireEvent.click(addButton);

  // Verify task appears
  expect(screen.getByText("Learn CI/CD")).toBeInTheDocument(); // ✅ Now it works

  // Find the delete button
  const deleteButton = screen.getByRole("button", { name: "Delete Task" });

  // Click delete
  fireEvent.click(deleteButton);

  // Verify task is removed
  expect(screen.queryByText("Learn CI/CD")).not.toBeInTheDocument();
});
