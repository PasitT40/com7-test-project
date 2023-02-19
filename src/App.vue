<template>
  <Navbar />
  <div class="grid grid-cols-1 md:grid-cols-4">
    <div
      class="col-span-1 md:col-span-1 md:col-start-2 flex justify-end items-start"
    >
      <img
        :src="selectedImage"
        alt="Girl in a jacket"
        class="responsive sticky top-0"
      />
    </div>
    <div class="col-span-1 md:col-span-1 p-7 md:mt-10">
      <div class="my-5">
        <span class="text-4xl font-semibold">ซื้อ iPhobe 13</span>
      </div>
      <div class="my-10">
        <span class="text-3xl font-medium">รุ่น</span>
      </div>
      <SelectModel :res="res" />
      <div class="my-10">
        <span class="text-3xl font-medium">สี</span>
      </div>
      <SelectColors />
      <SelectSize />
      <TransferType />
      <div>
        <button type="button" class="btn rounded-md p-2" @click="() => open()">
          <span class="text-base text-semibold">ยืนยันการสั่งซื้อล่วงหน้า</span>
        </button>
      </div>
    </div>
    <ModalsContainer />
  </div>
</template>

<script lang="ts" setup>
import { useCounterStore } from '@/stores/product';

import { inject, onMounted, ref } from 'vue';

import { storeToRefs } from 'pinia';

import { ModalsContainer, useModal } from 'vue-final-modal';

import SelectModel from '@/components/SelectModel.vue';
import SelectColors from '@/components/SelectColors.vue';
import SelectSize from '@/components/SelectSize.vue';
import Navbar from '@/components/Navbar.vue';
import TransferType from '@/components/TransferType.vue';
import ModalConfirm from '@/components/modal/SimpleModal.vue';

const axios: any = inject('axios');
const store = useCounterStore();

const { open, close } = useModal({
  component: ModalConfirm,
  attrs: {
    title: 'Hello World!',
    onConfirm() {
      close();
    },
  },
  slots: {
    default: '<p>UseModal: The content of the modal</p>',
  },
});

//variable
const res = ref([]);
const { selectedImage, selectedSize } = storeToRefs(store);
const {
  updateSelectedProduct,
  updateSelectedImage,
  updateSelectedColor,
  updateSelectedSize,
} = store;

function submit() {
  console.log(selectedSize.value);
}

onMounted(async () => {
  await axios
    .get('https://interview.com7.in/api/pre-order')
    .then((response: { data: any }) => {
      let unFormated = response.data.data.main_product;

      unFormated.forEach((model: any) => {
        let lowestPrice = Infinity;
        let imgUrl = '';
        model.model.forEach((color: any) => {
          color.data.forEach((item: any) => {
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
        (a: any, b: any) => a.lowestPrice - b.lowestPrice
      );

      res.value = sortedArray.reverse();
      updateSelectedProduct(sortedArray[0]);
      updateSelectedImage(sortedArray[0].image_url);
      updateSelectedColor(sortedArray[0].model[0]);
      updateSelectedSize(sortedArray[0].model[0].data[0]);
    });
});
</script>

<style>
.responsive {
  width: 600px;
  height: auto;
}
.active {
  border: solid 3px green;
}
.btn {
  width: 100%;
  height: 100%;
  background-color: rgba(11, 194, 11, 0.911) !important;
  color: white;
}
</style>
