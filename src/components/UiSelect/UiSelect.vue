<template>
  <select
    :value="props.modelValue"
    :disabled="props.isDisabled"
    class="ui-select"
    @change="onChange"
  >
    <option v-for="opt in props.options" :key="opt" :value="opt">
      {{ opt }}
    </option>
  </select>
</template>

<script setup lang="ts">
interface IProps {
  modelValue: string;
  options: string[];
  isDisabled?: boolean;
}

interface IEmit {
  (e: 'update:modelValue', value: string): void;
}

const props = withDefaults(defineProps<IProps>(), {
  isDisabled: false,
});

const emit = defineEmits<IEmit>();

function onChange(event: Event) {
  const target = event.target as HTMLSelectElement;
  emit('update:modelValue', target.value);
}
</script>

<style scoped>
.ui-select {
  width: 100%;
  padding: 10px 12px;
  font-size: 16px;
  border: 1px solid var(--color-gray);
  border-radius: 4px;
  background: white;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23666' d='M7 10l5 5 5-5z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
  background-size: 16px;

  &:disabled {
    background-color: var(--color-gray-light);
    opacity: 0.8;
  }
}
</style>