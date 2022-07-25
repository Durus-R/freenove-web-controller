<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <q-btn color="black" label="Black" @click="dark_mode()"/>

        <div>&copy; Ren&eacute; Regensbogen 2022</div>
      </q-toolbar>
    </q-header>



    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent} from 'vue';
import { useQuasar } from 'quasar';


export default defineComponent({
  name: 'MainLayout',

  components: {

  },

  setup () {

    const $q = useQuasar()
    function dark_mode() {
     $q.dark.toggle();}
    return {


        dark_mode


  }
}});
</script>
