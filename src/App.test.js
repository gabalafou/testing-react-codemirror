import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';


it("should call onSubmit with updated values", async () => {
  const mockOnSubmit = jest.fn();

  render(<App onSubmit={mockOnSubmit} />);

  const code = JSON.stringify({
    channels: ["conda-channel"],
    dependencies: ["python"],
    variables: { CONDA_OVERRIDE_CUDA: "1.2.3" }
  });
  const input = await screen.findByRole("textbox");
  fireEvent.change(input, {
    target: { textContent: code }
  });

  const submitButton = await screen.findByText("Submit");
  fireEvent.click(submitButton);

  expect(mockOnSubmit).toHaveBeenCalledWith({
    channels: ["conda-channel"],
    dependencies: ["python"],
    variables: { CONDA_OVERRIDE_CUDA: "1.2.3" }
  });
});