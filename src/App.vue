<template>
  <div class='bg-gradient-to-r from-greenOne via-greenTwo to-greenThree h-screen flex flex-col justify-center items-center w-full'>
    <DecisionWidget id="initial-widget" :text="initialLabel" button-one='Okay, Go on' button-two='Nah, Im fine'
    :img-src='initialImg' @yes-button-clicked="hideInitial" @no-button-clicked="getAngry"
    />
    <DecisionWidget :text='reasons[curr][1]' :img-src='reasons[curr][0]' v-if="curr < reasons.length && showReasons"
    button-one='Okay, Go on' button-two='Nah, Im fine' @yes-button-clicked="handleYesButtonClick"/>
  </div>
</template>

<script setup>
import DecisionWidget from './components/DecisionWidget.vue';
import { reasons } from './data';
import { ref } from 'vue';

const curr = ref(0);
const showReasons = ref(false);
const initialImg = ref('start.gif');
const initialLabel = ref("🍓 let me tell you why I love you 🍓");

const getAngry = () => {
  initialImg.value = "angry.gif";
  initialLabel.value = "😡 I SAID, LET ME TELL YOU WHY I LOVE YOU 😡";
  document.querySelector('#initial-widget .no-btn').disabled = true;
}

const hideInitial = () => {
  const initialWidget = document.getElementById('initial-widget');
  if(initialWidget) {
    initialWidget.remove();
    showReasons.value = true;
  }
}

const handleYesButtonClick = () => {
  curr.value++;
}
</script>
