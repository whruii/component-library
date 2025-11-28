<template>
  <button
    :type="props.type"
    :disabled="props.isDisabled"
    :data-layout="props.layout"
    class="ui-button"
    @click="$emit('click')"
  >
    <slot>Кнопка</slot>
  </button>
</template>

<script setup lang="ts">
interface IProps {
  layout?: 'primary' | 'secondary';
  isDisabled?: boolean;
  type?: 'button' | 'submit';
}

interface IEmit {
  (e: 'click'): void;
}

const props = withDefaults(defineProps<IProps>(), {
  layout: 'primary',
  isDisabled: false,
  type: 'button',
});

defineEmits<IEmit>();
</script>

<style scoped lang="scss">
.ui-button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 10px 24px;
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  background-color: var(--color-primary);
  color: var(--color-white);

  &[data-layout='secondary'] {
    background-color: var(--color-secondary);
    color: var(--color-black);
    border: 1px solid var(--color-gray);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    filter: brightness(0.9);
  }
}
</style>