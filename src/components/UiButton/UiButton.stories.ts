import type { Meta, StoryObj } from '@storybook/vue3';
import UiButton from './UiButton.vue';

const meta: Meta<typeof UiButton> = {
  title: 'Components/UiButton',
  component: UiButton,
  argTypes: {
    layout: {
      control: 'select',
      options: ['primary', 'secondary'],
    },
    isDisabled: { control: 'boolean' },
    type: {
      control: 'select',
      options: ['button', 'submit'],
    },
  },
};

export default meta;

export const Primary: StoryObj<typeof UiButton> = {
  args: { layout: 'primary', isDisabled: false },
};

export const Secondary: StoryObj<typeof UiButton> = {
  args: { layout: 'secondary', isDisabled: false },
};

export const Disabled: StoryObj<typeof UiButton> = {
  args: { layout: 'primary', isDisabled: true },
};