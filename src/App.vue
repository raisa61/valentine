<template>
  <div class='relative bg-gradient-to-r from-greenOne via-greenTwo
   to-greenThree h-screen flex flex-col justify-center items-center w-full'
   :class="{'bg-gradient-to-r from-pink-500/30 via-purple-500/50 to-blue-500/30' : finalDecision}"
   >

    <!-- initial widget -->
    <DecisionWidget id="initial-widget" :text="initialLabel" button-one="okay, go on" button-two="nah, i'm chilling"
    :img-src='initialImg' @yes-button-clicked="hideInitial" @no-button-clicked="getAngry"
    />

    <!-- reasons widget -->
    <DecisionWidget :text="initialReason" :img-src="initialGif" v-if="curr < reasons.length  && showReasons"
    button-one="next" button-two="stop" @yes-button-clicked="handleYesButtonClick" @no-button-clicked="handleNoButtonClick"/>

    <!-- ask out widget -->
    <DecisionWidget v-if="curr == reasons.length && !finalDecision" id="ask-widget" text="😉 so.... will you be my valentine? 😉" 
    button-one="omg yes" button-two="hell no" img-src="bite.gif" 
    @yes-button-clicked="finalYes" @no-button-clicked="finalNo"
    />

    <!-- final decision -->
    <EndWidget v-if='finalDecision' :final-img='endImg' :final-message='endText' :did-he-say-yes="heSaidYes"/>

    <p class='fixed bottom-8 right-8 font-cedarville text-xl text-strawberry font-semibold'>with love, <br> raisa</p>
  </div>
</template>

<script setup>
import DecisionWidget from './components/DecisionWidget.vue';
import EndWidget from './components/EndWidget.vue';
import { reasons } from './data';
import { ref } from 'vue';

const curr = ref(0);
const showReasons = ref(false);
const initialImg = ref('start.gif');
const initialLabel = ref("🍓 let me tell you why I love you 🍓");

const initialReason = ref(reasons[0][1]);
const initialGif = ref(reasons[0][0]);

const finalDecision = ref(false);
const heSaidYes = ref(false);

const endImg = ref('trashcan.gif');
const endText = ref('à la poubelle 👋🏼');

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
  if(curr.value < reasons.length -1) {
    curr.value++;
    initialReason.value = reasons[curr.value][1];
    initialGif.value = reasons[curr.value][0];
  }
  else {
    curr.value = reasons.length;
  }
}

const handleNoButtonClick = () => {
  initialReason.value = "🥱 go back to clicking the other button 🥱";
  initialGif.value = "waiting.gif";
}

const finalYes = () => {
  finalDecision.value = true;
  heSaidYes.value = true;
  endImg.value = 'rose.gif';
  endText.value = "yayyy here's a rose for you!! 🌹";
}

const finalNo = () => {
  finalDecision.value = true;
}
</script>
