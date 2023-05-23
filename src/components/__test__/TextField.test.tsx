import { render, screen } from "@testing-library/react";
import { TextField } from "../TextField";
import * as stories from "../TextField.stories";
import { composeStories } from "@storybook/testing-react";

const { TextInputWithLabel, TextInputWithValue, TextInputWithDisabled, TextInputWithRequired } = composeStories(stories)

describe("Text Input component", () => {
    test('should render text input', () => {
        render(<TextField placeholder="Text Field" />);
        const element = screen.getByRole('textbox');
        expect(element).toHaveAttribute("placeholder");
    })

    test('should render text input with label', () => {
        render(<TextInputWithLabel />);
        const element = screen.getByRole('textbox');
        const label = screen.getByText("Text Input");
        expect(element).toHaveAttribute("placeholder");
        expect(label).toBeInTheDocument();
    })

    test('should render text input with value', () => {
        render(<TextInputWithValue />);
        const element = screen.getByRole('textbox');
        expect(element).toHaveAttribute("placeholder");
        expect(element).toHaveValue("Hello World!");
    })

    test('should render text input with disabled', () => {
        render(<TextInputWithDisabled />);
        const element = screen.getByRole('textbox');
        expect(element).toHaveAttribute("placeholder");
        expect(element).toHaveAttribute("disabled");
    })

    test('should render text input with required', () => {
        render(<TextInputWithRequired />);
        const element = screen.getByRole('textbox');
        expect(element).toHaveAttribute("placeholder");
        expect(element).toHaveAttribute("required");
    })
});