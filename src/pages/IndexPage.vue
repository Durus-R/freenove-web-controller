<template>
  <q-page class="fit row items-start justify-center">
    <div
      id="camera_window"
      style="
        overflow: auto;
        min-height: 600px;
        max-height: 600px;
        min-width: 800px;
        max-width: 800px;
      "
    >
      <q-img :src="image_file" />
    </div>
    <div
      id="led_control"
      style="
        overflow: auto;
        min-height: 600px;
        max-height: 600px;
        min-width: 300px;
        max-width: 300px;
      "
    >
      <div class="q-gutter-md">
        <q-btn-dropdown :color="dropdown_color" :label="dropdown_title">
          <q-list>
        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label>Manual</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label>Mode 1</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label>Mode 2</q-item-label>
          </q-item-section>
          </q-item>
        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label>Mode 3</q-item-label>
          </q-item-section>
           </q-item>
           </q-list>
        </q-btn-dropdown>
        <q-radio label="Led1" val="Led1" v-model="led_selection" />
        <q-radio label="Led2" val="Led2" v-model="led_selection" />
        <q-radio label="Mode 1" val="Led_Mode1" v-model="led_selection" />
        <q-radio label="Led3" val="Led3" v-model="led_selection" />
        <q-radio label="Led4" val="Led4" v-model="led_selection" />
        <q-radio label="Mode 2" val="Led_Mode2" v-model="led_selection" />
        <q-radio label="Led5" val="Led5" v-model="led_selection" />
        <q-radio label="Led6" val="Led6" v-model="led_selection" />
        <q-radio label="Mode 3" val="Led_Mode3" v-model="led_selection" />
        <q-radio label="Led7" val="Led7" v-model="led_selection" />
        <q-radio label="Led8" val="Led8" v-model="led_selection" />
        <q-radio label="Mode 4" val="Led_Mode4" v-model="led_selection" />
      </div>
    </div>
    <div
      id="sensor_values"
      style="overflow: auto; min-width: 200px; max-width: 200px"
    ></div>
    <div
      id="motor_control"
      class="offset-1"
      style="
        overflow: auto;
        min-height: 400px;
        max-height: 400px;
        min-width: 400px;
        max-width: 400px;
      "
    ></div>
    <div
      id="servo_control"
      style="
        overflow: auto;
        min-height: 400px;
        max-height: 400px;
        min-width: 400px;
        max-width: 400px;
      "
    ></div>
    <div id="misc" style="overflow: auto"></div>
  </q-page>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';
import { getCssVar, useQuasar } from 'quasar';

function get_color(index : string) {
  if((getCssVar(index)) === null)
    return '#e3760d';
  else return getCssVar(index) as string;

}

const image_file = ref('freenove_orange.png');
const led_selection = ref('Led1');
const dropdown_title = ref('Manual');
const dropdown_color = ref(get_color('primary'));

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

function onItemClick(){
  dropdown_title.value='something';
}
</script>
