<template>
  <i class="icon" :class="bem.b()" :style="style">
    <slot />
  </i>
</template>
<script setup lang="ts">
import { createNamespace } from "@yeweimao/utils/create";
import { computed } from "vue";
import { iconProps } from "./icon";
defineOptions({
  name: "z-icon",
});
const bem = createNamespace("icon");
const props = defineProps(iconProps);
const style = computed(() => {
  if (!props.color && !props.size) return {};
  return {
    ...(props.size ? { fontSize: `${props.size}px` } : {}),
    ...(props.color ? { color: props.color } : {}),
  };
});
</script>
