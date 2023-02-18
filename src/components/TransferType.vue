<template>
  <div class="grid grid-cols-1 md:grid-cols-1 my-2">
    <div class="flex justify-center my-2">
      <span class="text-2xl md:text-xl font-semibold"
        >คุณต้องการรับสินค้าด้วยวิธีใด</span
      >
    </div>

    <div
      :class="{ active: transferType == 'receive' }"
      @click="updateTransferType('receive')"
      class="grid grid-cols-5 md:grid-cols-5 border p-5 m-2 rounded-md"
    >
      <div>ICON</div>
      <div class="col-span-4">
        <span>คุณต้องการรับสินค้าด้วยวิธีใด</span>
      </div>
    </div>
    <div
      :class="{ active: transferType == 'send' }"
      @click="updateTransferType('send')"
      class="grid grid-cols-5 md:grid-cols-5 border p-5 m-2 rounded-md"
    >
      <div>ICON</div>
      <div class="col-span-4">
        <span>คุณต้องการรับสินค้าด้วยวิธีใด</span>
      </div>
      <div class="col-span-4 col-start-2">
        <span>คุณต้องการรับสินค้าด้วยวิธีใด</span>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useCounterStore } from '@/stores/product';
import { storeToRefs } from 'pinia';

const store = useCounterStore();

//variable
const { transferType } = storeToRefs(store);
//function
const { updateTransferType } = store;
</script>
