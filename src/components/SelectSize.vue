<template>
  <div class="grid grid-cols-2 md:grid-cols-2">
    <div
      v-for="size in selectedColor?.data"
      :key="size.name"
      :class="{ active: selectedSize.size == size.size }"
      @click="selectSize(size)"
      class="col-span-1 md:col-span-1 flex justify-center p-7 m-2 border rounded-md"
    >
      {{ size.size }}
    </div>
  </div>
</template>

<script setup lang="ts">
//init pinia and use store
import { useCounterStore } from '@/stores/product';
import { storeToRefs } from 'pinia';

const store = useCounterStore();

//variable
const { selectedColor, selectedSize } = storeToRefs(store);
//function
const { updateSelectedSize } = store;

//methods
function selectSize(item: any) {
  updateSelectedSize(item);
}
</script>
