<template>
  <div
    v-for="item in res"
    :key="item.name"
    class="grid grid-cols-2 md:grid-cols-2 p-10 m-9 border"
    :class="{ active: selectedProduct.name == item.name }"
    @click="selectProduct(item)"
  >
    <div class="flex justify-start">{{ item?.name }}</div>
    <div class="flex justify-end">${{ item?.lowestPrice }}</div>
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
function selectProduct(selectItem) {
  updateSelectedProduct(selectItem);
  updateSelectedImage(selectItem.image_url);
  updateSelectedColor(selectItem.model[0]);
  updateSelectedSize(selectItem.model[0].data[0]);
}
</script>
