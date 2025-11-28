<template>
  <label class="ui-field">
    <span class="ui-field__label">{{ props.label }}</span>
    <div class="ui-field__control">
      <slot />
    </div>
  </label>
</template>

<script setup lang="ts">
interface IProps {
  label: string;
}

const props = defineProps<IProps>();
</script>

<style scoped>
.ui-field {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.ui-field__label {
  font-weight: 600;
  color: var(--color-black);
}

.ui-field__control {
  width: 100%;
}
</style>