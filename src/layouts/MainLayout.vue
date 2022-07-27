<template>
  <q-layout view="lHh Lpr fFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title> Quasar App </q-toolbar-title>

        <q-btn
          :color="button0.color.value"
          :label="button0.label.value"
          :text-color="button0.textColor.value"
          @click="dark_mode()"
          style="margin-right: 15px; color: #ffffff"
        />

        <div>&copy; Ren&eacute; Regensbogen 2022</div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts" setup>
import { Ref, ref } from 'vue';
import { useQuasar, setCssVar } from 'quasar';

interface btn_config {
  label: Ref<string>;
  color: Ref<string>;
  textColor: Ref<string>;
  dark_mode: boolean;
}

const $q = useQuasar();

var button0: btn_config = {
  label: ref('Dark Mode'),
  color: ref('black'),
  textColor: ref('white'),
  dark_mode: false,
};

function dark_mode() {
  $q.dark.toggle();

  if (!button0.dark_mode) {
    button0.label.value = 'Bright Mode';
    button0.dark_mode = true;
    button0.color.value = 'yellow';
    button0.textColor.value = 'black';
    setCssVar('primary', '#1d1d1d');
  } else {
    button0.label.value = 'Dark Mode';
    button0.dark_mode = false;
    button0.color.value = 'black';
    button0.textColor.value = 'white';
    setCssVar('primary', '#e3760d');
  }
}
</script>
