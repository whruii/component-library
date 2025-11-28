import type { Meta, StoryObj } from '@storybook/vue3';
import UiField from './UiField.vue';
import UiInput from '../UiInput/UiInput.vue';

const meta: Meta<typeof UiField> = {
  title: 'Components/UiField',
  component: UiField,
  argTypes: {
    label: { control: 'text' },
  },
};

export default meta;

export const WithInput: StoryObj<typeof UiField> = {
  args: { label: 'Имя:' },
  render: (args) => ({
    components: { UiField, UiInput },
    setup() { return { args }; },
    template: `
      <UiField v-bind="args">
        <UiInput placeholder="Введите имя" />
      </UiField>
    `,
  }),
};