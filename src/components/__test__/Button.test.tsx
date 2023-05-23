import { render, screen } from "@testing-library/react"
import { composeStories } from "@storybook/testing-react"
import { Button } from "../Button";
import * as stories from "../Button.stories";

const { Primary, Secondary, Small, Large } = composeStories(stories);

describe('Button component', () => {
    test('should render button', () => {
        render(<Button label="Button" />);
        const element = screen.getByRole('button');
        expect(element).toHaveTextContent(/Button/i);
    });

    test('should render primary button', () => {
        render(<Primary />);
        const element = screen.getByRole('button');
        expect(element).toHaveTextContent(/Button/i);
    });

    test('should render secondary button', () => {
        render(<Secondary />)
        const element = screen.getByRole('button');
        expect(element).toHaveTextContent(/Button/i);
    });

    test('should render small button', () => {
        render(<Small />);
        const element = screen.getByRole('button');
        expect(element).toHaveTextContent(/Button/i);
    });

    test('should render large button', () => {
        render(<Large />)
        const element = screen.getByRole('button');
        expect(element).toHaveTextContent(/Button/i);
    });
})