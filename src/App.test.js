import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import App from "./App";

it("should call onSubmit with updated values", async () => {
  console.error = jest.fn();
  const mockOnSubmit = jest.fn();

  render(<App onSubmit={mockOnSubmit} />);

  const code = JSON.stringify({
    channels: ["conda-channel"],
    dependencies: ["python"],
    variables: { CONDA_OVERRIDE_CUDA: "1.2.3" },
  });
  const input = await screen.findByRole("textbox");
  fireEvent.change(input, {
    target: { textContent: code },
  });

  // Uncomment the following line to make the test fail with high probability.
  // await new Promise((resolve) => setTimeout(resolve, 100));

  const submitButton = await screen.findByText("Submit");
  fireEvent.click(submitButton);

  expect(mockOnSubmit).toHaveBeenCalledWith({
    channels: ["conda-channel"],
    dependencies: ["python"],
    variables: { CONDA_OVERRIDE_CUDA: "1.2.3" },
  });
});
