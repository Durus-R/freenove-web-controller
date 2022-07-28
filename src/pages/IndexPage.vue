<template>
  <q-page class="fit row items-start justify-center">
    <div id='camera_window' style="overflow: auto; min-height: 600px; max-height: 600px;  min-width: 800px; max-width: 800px;">
      <q-img :src="image_file" />
    </div>
    <div id="led_control" style="overflow: auto; min-height: 600px; max-height: 600px;  min-width: 400px; max-width: 400px;"></div>
    <div id="sensor_values" style="overflow: auto; min-width: 200px; max-width: 200px;"></div>
    <div id="motor_control" class="offset-1" style="overflow: auto; min-height: 400px; max-height: 400px;  min-width: 400px; max-width: 400px;"></div>
    <div id="servo_control" style="overflow: auto; min-height: 400px; max-height: 400px;  min-width: 400px; max-width: 400px;"></div>
    <div id="misc" style="overflow: auto;"></div>

  </q-page>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';
import { useQuasar } from 'quasar';
const image_file = ref('freenove_orange.png');

const $q = useQuasar();

watch(
  () => $q.dark.isActive,
  (val) => {
    if (val) {
      image_file.value = 'freenove_blue.png';
    } else {
      image_file.value = 'freenove_orange.png';
    }
  }
);
</script>
