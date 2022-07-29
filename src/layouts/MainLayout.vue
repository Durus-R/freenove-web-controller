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

        <div v-if="render_copyright">&copy; Ren&eacute; Regensbogen 2022</div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts" setup>
import { Ref, ref, watch } from 'vue';
import { useQuasar, setCssVar } from 'quasar';
import { get_color } from 'src/lib/helpers';

const render_copyright = ref(false);

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
    setCssVar('primary', get_color('dark_primary'));
  } else {
    button0.label.value = 'Dark Mode';
    button0.dark_mode = false;
    button0.color.value = 'black';
    button0.textColor.value = 'white';
    setCssVar('primary', get_color('light_primary'));
  }
}

watch(
  () => $q.screen.width,
  (val) => {
    if (val > 600) {
      render_copyright.value = true;
    } else {
      render_copyright.value = false;
    }
  }
);
</script>
