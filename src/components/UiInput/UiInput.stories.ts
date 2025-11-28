import type { Meta, StoryObj } from '@storybook/vue3';
import UiInput from './UiInput.vue';

const meta: Meta<typeof UiInput> = {
  title: 'Components/UiInput',
  component: UiInput,
  argTypes: {
    modelValue: { control: 'text' },
    placeholder: { control: 'text' },
    isDisabled: { control: 'boolean' },
  },
};

export default meta;

export const Default: StoryObj<typeof UiInput> = {
  args: { modelValue: 'Текст', placeholder: 'Введите текст...', isDisabled: false },
};

export const Disabled: StoryObj<typeof UiInput> = {
  args: { modelValue: 'Неизменяемо', isDisabled: true },
};