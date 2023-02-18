import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useCounterStore = defineStore('product', () => {
  const selectedProduct = ref();
  const selectedColor = ref();
  const selectedImage = ref();
  const selectedSize = ref();
  const transferType = ref('receive');

  function updateSelectedProduct(item: any) {
    selectedProduct.value = item;
  }
  function updateSelectedColor(item: any) {
    selectedColor.value = item;
  }
  function updateSelectedImage(item: any) {
    selectedImage.value = item;
  }
  function updateSelectedSize(item: any) {
    selectedSize.value = item;
  }
  function updateTransferType(item: any) {
    transferType.value = item;
  }

  return {
    selectedProduct,
    selectedColor,
    selectedImage,
    selectedSize,
    transferType,
    updateSelectedProduct,
    updateSelectedColor,
    updateSelectedImage,
    updateSelectedSize,
    updateTransferType,
  };
});
