<template>
  <q-page class="row items-center justify-evenly">
    <q-img :src="image_file" />
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
    console.log('change');
  }
);
</script>
