<template>
  <input
    :value="props.modelValue"
    :placeholder="props.placeholder"
    :disabled="props.isDisabled"
    class="ui-input"
    @input="onInput"
  />
</template>

<script setup lang="ts">
interface IProps {
  modelValue: string;
  placeholder?: string;
  isDisabled?: boolean;
}

interface IEmit {
  (e: 'update:modelValue', value: string): void;
}

const props = withDefaults(defineProps<IProps>(), {
  placeholder: '',
  isDisabled: false,
});

const emit = defineEmits<IEmit>();

function onInput(event: Event) {
  const target = event.target as HTMLInputElement;
  emit('update:modelValue', target.value);
}
</script>

<style scoped>
.ui-input {
  width: 100%;
  padding: 10px 12px;
  font-size: 16px;
  border: 1px solid var(--color-gray);
  border-radius: 4px;
  background: white;

  &:disabled {
    background-color: var(--color-gray-light);
    opacity: 0.8;
  }
}
</style>