import type { Meta, StoryObj } from '@storybook/react';

import { TextField } from './TextField';

const meta: Meta<typeof TextField> = {
    title: 'Components/Text Field',
    component: TextField,
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof TextField>;

export const TextInput: Story = {
    args: {
        placeholder: "Text Input"
    }
}

export const TextInputWithLabel: Story = {
    args: {
        placeholder: "Text Input",
        label: "Text Input",
    }
}

export const TextInputWithValue: Story = {
    args: {
        placeholder: "Text Input",
        value: "Hello World!",
    }
}

export const TextInputWithRequired: Story = {
    args: {
        placeholder: "Text Input",
        required: true,
    }
}

export const TextInputWithDisabled: Story = {
    args: {
        placeholder: "Text Input",
        disabled: true,
    }
}