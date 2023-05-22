import { render, screen } from "@testing-library/react";
import { TextField } from "../TextField";
import * as stories from "../TextField.stories";
import { composeStories } from "@storybook/testing-react";

const { TextInputWithLabel, TextInputWithValue, TextInputWithDisabled, TextInputWithRequired } = composeStories(stories)

describe("Text Input", () => {
    test('should render text input', () => {
        render(<TextField placeholder="Text Field" />);
        const headline = screen.getByRole('textbox');
        expect(headline).toHaveAttribute("placeholder");
    })

    test('should render text input with label', () => {
        render(<TextInputWithLabel />);
        const headline = screen.getByRole('textbox');
        const label = screen.getByText("Text Input");
        expect(headline).toHaveAttribute("placeholder");
        expect(label).toBeInTheDocument();
    })

    test('should render text input with value', () => {
        render(<TextInputWithValue />);
        const headline = screen.getByRole('textbox');
        expect(headline).toHaveAttribute("placeholder");
        expect(headline).toHaveValue("Hello World!");
    })

    test('should render text input with disabled', () => {
        render(<TextInputWithDisabled />);
        const headline = screen.getByRole('textbox');
        expect(headline).toHaveAttribute("placeholder");
        expect(headline).toHaveAttribute("disabled");
    })

    test('should render text input with required', () => {
        render(<TextInputWithRequired />);
        const headline = screen.getByRole('textbox');
        expect(headline).toHaveAttribute("placeholder");
        expect(headline).toHaveAttribute("required");
    })
});