import type { Meta, StoryObj } from '@storybook/vue3';
import UiSelect from './UiSelect.vue';

const meta: Meta<typeof UiSelect> = {
  title: 'Components/UiSelect',
  component: UiSelect,
  argTypes: {
    modelValue: { control: 'text' },
    options: { control: 'object' },
    isDisabled: { control: 'boolean' },
  },
};

export default meta;

export const Default: StoryObj<typeof UiSelect> = {
  args: {
    modelValue: 'Опция 2',
    options: ['Опция 1', 'Опция 2', 'Опция 3'],
    isDisabled: false,
  },
};