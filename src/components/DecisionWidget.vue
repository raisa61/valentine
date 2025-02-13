<template>
  <div class='flex flex-col items-center w-full'>
    <img alt="Vue logo" :src="formattedImg" class='size-[250px]'>
    <h1 class='font-poppins font-semibold text-3xl py-6'>🍓 {{ text }} 🍓</h1>
    <div class='flex gap-10'>
      <button class='bg-lightPink font-medium rounded-full p-4 font-poppins hover:bg-darkPink'
      @click="$emit('yes-button-clicked')">
        {{ buttonOne }} 🌸
      </button>
      <button class='bg-lightPink font-medium rounded-full p-4 font-poppins hover:bg-darkPink'
      @click="$emit('no-button-clicked')"
      >{{ buttonTwo }} 😈</button>
    </div>
  </div>
</template>

<script setup>
import { defineProps, computed } from 'vue';

const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  imgSrc: {
    type: String,
    required: true,
  },
  buttonOne: {
    type: String,
    required: true,
  },
  buttonTwo: {
    type: String,
    required: true,
  }
});

const formattedImg = computed(()=> require(`@/assets/${props.imgSrc}`));

</script>