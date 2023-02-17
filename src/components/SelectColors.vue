<template>
  <div class="grid grid-cols-2 md:grid-cols-2">
    <div
      v-for="colors in selectedProduct?.model"
      :key="colors.color"
      @click="selectColor(colors)"
      :class="{ active: selectedColor.color == colors.color }"
      class="col-span-1 md:col-span-1 flex justify-center m-9 p-10 border"
    >
      {{ colors?.color }}
    </div>
  </div>
</template>
<script setup lang="ts">
//init pinia and use store
import { useCounterStore } from '@/stores/product';
import { storeToRefs } from 'pinia';

const store = useCounterStore();

//variable
const { selectedProduct, selectedImage, selectedColor } = storeToRefs(store);
//function
const {
  updateSelectedProduct,
  updateSelectedImage,
  updateSelectedColor,
  updateSelectedSize,
} = store;

//init prop
const props = defineProps({
  res: Array,
});

//methods
function selectColor(selectItem) {
  console.log(selectItem);
  updateSelectedColor(selectItem);
  updateSelectedImage(selectItem.image_url);
  updateSelectedSize(selectItem.data[0]);
}
</script>
