<template>
  <div
    v-for="item in res"
    :key="item.name"
    class="grid grid-cols-2 md:grid-cols-2 p-7 my-5 border rounded-md"
    :class="{ active: selectedProduct.name == item.name }"
    @click="selectProduct(item)"
  >
    <div class="flex justify-start">
      <span class="font-medium">{{ item.name }}</span>
    </div>
    <div class="flex justify-end">
      <span class="font-medium">${{ item.lowestPrice }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
//init pinia and use store
import { useCounterStore } from '@/stores/product';
import { storeToRefs } from 'pinia';

const store = useCounterStore();

//variable
const { selectedProduct } = storeToRefs(store);
//function
const {
  updateSelectedProduct,
  updateSelectedImage,
  updateSelectedColor,
  updateSelectedSize,
} = store;

//init prop
interface Props {
  res: Product[];
}

interface Product {
  name: string;
  model: Model[];
  lowestPrice: number;
}

interface Model {
  color: string;
  color_hex: string;
  data: Data[];
}

interface Data {
  id: number;
  name: string;
  model_name: string;
  color: string;
  color_hex: string;
  image_url: string;
  size: string;
  price: number;
  price_deposit: number;
  images: string[];
  condition_html?: string | string | string;
  force_bundle: number;
  priority: number;
  footer_html?: any;
  preview_html?: ((null | string)[] | null)[];
  variant_product: any[];
  active: boolean;
}

const props = defineProps<Props>();

//methods
function selectProduct(selectItem: any) {
  updateSelectedProduct(selectItem);
  updateSelectedImage(selectItem.image_url);
  updateSelectedColor(selectItem.model[0]);
  updateSelectedSize(selectItem.model[0].data[0]);
}
</script>
