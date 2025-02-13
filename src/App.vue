<template>
  <div class='bg-gradient-to-r from-greenOne via-greenTwo to-greenThree h-screen flex flex-col justify-center items-center w-full'>
    <DecisionWidget id="initial-widget" text='Let me tell you why I love you' button-one='Okay, Go on' button-two='Nah, Im fine'
    img-src='start.gif' @yes-button-clicked="hideInitial" @no-button-clicked="console.log('hi');"
    />
    <DecisionWidget :text='reasons[curr][1]' :img-src='reasons[curr][0]' v-if="curr < reasons.length && showReasons"
    button-one='Okay, Go on' button-two='Nah, Im fine' @yes-button-clicked="handleButtonClick"/>
  </div>
</template>

<script setup>
import DecisionWidget from './components/DecisionWidget.vue';
import { reasons } from './data';
import { ref } from 'vue';

const curr = ref(0);
const showReasons = ref(false);

const handleButtonClick = () => {
  curr.value++;
}

const hideInitial = () => {
  const initialWidget = document.getElementById('initial-widget');
  if(initialWidget) {
    initialWidget.remove();
    showReasons.value = true;
  }
}

console.log(reasons);

</script>
