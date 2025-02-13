<template>
  <div class='flex flex-col items-center p-2'>
    <img alt="gif" :src="formattedImg" class='size-[250px]'>
    <h1 class='font-poppins font-semibold text-3xl py-6 text-center'>{{ finalMessage }}</h1>
  </div>
</template>

<script setup>
import { defineProps, computed } from 'vue';
import { confetti } from "tsparticles-confetti";

const props = defineProps({
  finalMessage: {
    type: String,
    required: true,
  },
  finalImg: {
    type: String,
    required: true,
  },
  didHeSayYes: {
    type: Boolean,
    default: false,
  }
});

const run = () => {
  const defaults = {
    spread: 360,
    ticks: 100,
    gravity: 0,
    decay: 0.94,
    startVelocity: 30,
    shapes: ["heart"],
    colors: ["FFC0CB", "FF69B4", "FF1493", "C71585"]
  };

  confetti({
    ...defaults,
    particleCount: 200,
    scalar: 2
  });

  confetti({
    ...defaults,
    particleCount: 100,
    scalar: 3
  });

  confetti({
    ...defaults,
    particleCount: 50,
    scalar: 4
  });
};

if(props.didHeSayYes)run();

const formattedImg = computed(()=> require(`@/assets/${props.finalImg}`));
</script>