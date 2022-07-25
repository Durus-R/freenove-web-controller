<template>
  <q-layout view="lHh Lpr fFf">
    <q-header elevated>
      <q-toolbar>

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <q-btn color="black" :label="btn_text" @click="dark_mode()" style="margin-right:15px"/>

        <div>&copy; Ren&eacute; Regensbogen 2022</div>
      </q-toolbar>
    </q-header>



    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts" setup>
import {ref} from 'vue';
import { useQuasar } from 'quasar';

name: 'MainLayout';


    const $q = useQuasar()
    var btn_text = ref('Black');
    function dark_mode() {
     $q.dark.toggle();
     if (btn_text.value == 'Black') {
       btn_text.value = 'White'
     } else {
       btn_text.value = 'Black'
     }
     }





</script>
