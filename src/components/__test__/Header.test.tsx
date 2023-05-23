import { render, screen } from "@testing-library/react"
import { Header } from "../Header"
import {vi} from 'vitest';
import * as stories from "../Header.stories";
import { composeStories } from "@storybook/testing-react";
import userEvent  from '@testing-library/user-event';

const { LoggedIn } = composeStories(stories)

vi.spyOn(console, 'warn');

describe("Header component", () => {   
    test('should render header', async () => {
        const onLogin = vi.fn(() => "Log in");
        const onLogout = vi.fn(() => "Log out");
        const onCreateAccount = vi.fn(() => "Sign up");

        render(<Header onLogin={onLogin} onLogout={onLogout} onCreateAccount={onCreateAccount}/>)
        const logo = screen.getByRole('heading');
        const buttons = screen.getAllByRole('button');
        expect(logo).toBeInTheDocument();
        expect(buttons.length).toEqual(2);
        expect(buttons[0]).toBeInTheDocument();
        expect(buttons[1]).toBeInTheDocument();
        const user = userEvent;
        const spy = vi.spyOn(user, 'click')

        await user.click(buttons[0]);
        expect(spy).toHaveBeenCalled();

        await user.click(buttons[1]);
        expect(spy).toHaveBeenCalled();
    })

    test('should render header with logged in', () => {
        render(<LoggedIn />)
        const logo = screen.getByRole('heading');
        const buttons = screen.getAllByRole('button');
        expect(logo).toBeInTheDocument();
        expect(buttons.length).toEqual(1);
        expect(buttons[0]).toBeInTheDocument();
    })
})