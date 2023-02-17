import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useCounterStore = defineStore('product', () => {
  const selectedProduct = ref();
  const selectedColor = ref();
  const selectedImage = ref();
  const selectedSize = ref();

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

  return {
    selectedProduct,
    selectedColor,
    selectedImage,
    selectedSize,
    updateSelectedProduct,
    updateSelectedColor,
    updateSelectedImage,
    updateSelectedSize,
  };
});
