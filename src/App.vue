<template>
  <div class="grid grid-cols-1 md:grid-cols-2">
    <div class="col-span-1 md:col-span-1 flex justify-center">
      <img :src="selectedImage" alt="Girl in a jacket" class="responsive" />
    </div>
    <div class="col-span-1 md:col-span-1">
      <SelectModel :res="res" />
      <SelectColors />
      <SelectSize />
    </div>
    <button type="button" class="border" @click="test()">
      Click to test submit
    </button>
  </div>
</template>

<script lang="ts" setup>
import { useCounterStore } from '@/stores/product';
import { inject, onMounted, ref } from 'vue';
import { storeToRefs } from 'pinia';
import SelectModel from '@/components/SelectModel.vue';
import SelectColors from '@/components/SelectColors.vue';
import SelectSize from '@/components/SelectSize.vue';
const axios: any = inject('axios');
const store = useCounterStore();

//variable
const res = ref();
const { selectedProduct, selectedImage, selectedColor, selectedSize } =
  storeToRefs(store);
const {
  updateSelectedProduct,
  updateSelectedImage,
  updateSelectedColor,
  updateSelectedSize,
} = store;

function test() {
  console.log(selectedSize.value);
}

onMounted(async () => {
  await axios
    .get('https://interview.com7.in/api/pre-order')
    .then((response: { data: any }) => {
      let unFormated = response.data.data.main_product;

      unFormated.forEach((model) => {
        let lowestPrice = Infinity;
        let imgUrl = '';
        model.model.forEach((color) => {
          color.data.forEach((item) => {
            color.image_url = item.image_url;
            if (item.price < lowestPrice) {
              lowestPrice = item.price;
              imgUrl = item.image_url;
            }
          });
        });
        model.lowestPrice = lowestPrice;
        model.image_url = imgUrl;
      });

      const sortedArray = unFormated.sort(
        (a, b) => a.lowestPrice - b.lowestPrice
      );
      console.log(sortedArray);

      res.value = sortedArray.reverse();
      updateSelectedProduct(res.value[0]);
      updateSelectedImage(res.value[0].image_url);
      updateSelectedColor(res.value[0].model[0]);
      updateSelectedSize(res.value[0].model[0].data[0]);
    });
});
</script>

<style>
.responsive {
  width: 100%;
  height: auto;
}
.active {
  border: solid 3px green;
}
</style>
