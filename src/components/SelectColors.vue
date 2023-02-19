<template>
  <div class="grid grid-cols-2 md:grid-cols-2">
    <div
      v-for="colors in selectedProduct?.model"
      :key="colors.color"
      @click="selectColor(colors)"
      :class="{ active: selectedColor.color == colors.color }"
      class="col-span-1 md:col-span-1 grid grid-cols-1 md:grid-cols-1 flex justify-center p-7 m-2 border rounded-md"
    >
      <div class="grid grid-cols-1 md:grid-cols-1">
        <div class="flex justify-center">
          <button
            type="button"
            class="rounded-full cols-span-1"
            :style="{
              height: 45 + 'px',
              width: 45 + 'px',
              backgroundColor: '#' + colors.color_hex,
            }"
          ></button>
        </div>
      </div>
      <div class="flex justify-center mt-2">
        <span class="font-medium">{{ colors.color }}</span>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
//init pinia and use store
import { useCounterStore } from '@/stores/product';
import { storeToRefs } from 'pinia';

const store = useCounterStore();

//variable
const { selectedProduct, selectedColor } = storeToRefs(store);
//function
const { updateSelectedImage, updateSelectedColor, updateSelectedSize } = store;

//methods
function selectColor(selectItem: any) {
  updateSelectedColor(selectItem);
  updateSelectedImage(selectItem.image_url);
  updateSelectedSize(selectItem.data[0]);
}
</script>
