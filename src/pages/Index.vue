<template>
  <q-page class="flex flex-center">
    <div class="row">
      <div v-for="rm in ctrl"  class="col-sm q-pa-sm" :key="rm.name">
        <h2 class="q-display-1 text-center">{{ rm.name ? rm.name.toUpperCase() : 'Unknown' }}</h2>
        <remote :name="rm.name" />
      </div>
    </div>
  </q-page>
</template>

<script>
// eslint-disable-next-line
import { get, sync, call } from 'vuex-pathify'
// eslint-disable-next-line
import { mapState } from 'vuex'
import Remote from '../components/Remote'

export default {
  name: 'PageIndex',
  components: {
    Remote,
  },
  computed: {
    ctrl: get('remote/ctrl')
  }
}
</script>
