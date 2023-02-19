<template>
  <div class="grid grid-cols-1 md:grid-cols-1 my-2">
    <div
      :class="{ active: transferType == 'receive' }"
      @click="updateTransferType('receive')"
      class="grid grid-cols-5 md:grid-cols-5 border p-5 m-2 rounded-md"
    >
      <div class="flex justify-center text-3xl items-center row-span-2">
        <font-awesome-icon icon="fa-solid fa-inbox" />
      </div>
      <div class="col-span-4">
        <span class="text-xl font-semibold">บริการรับสินค้าหน้าร้าน</span>
      </div>
      <div class="col-span-4 col-start-2">
        <span>จองเริ่มต้นเพียง ฿3,000.00 เท่านั้น</span>
      </div>
    </div>
    <div
      :class="{ active: transferType == 'send' }"
      @click="updateTransferType('send')"
      class="grid grid-cols-5 md:grid-cols-5 border p-5 m-2 rounded-md"
    >
      <div class="flex justify-center text-3xl items-center row-span-2">
        <font-awesome-icon icon="fa-solid fa-truck" />
      </div>
      <div class="col-span-4">
        <span class="text-xl font-semibold">บริการจัดส่งถึงบ้าน</span>
      </div>
      <div class="col-span-4 col-start-2">
        <span>ชำระสินค้าในราคาเต็ม</span>
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
