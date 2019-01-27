<template>
  <div class="remote col text-center">
    <template v-for="(btn, index) in options.buttons">
      <br v-if="btn.cmd === 'br'" :key="index" />
      <q-btn
        :key="index"
        @click="sendCmd(btn)"
        v-bind="btn"
        v-if="!btn.hidden && btn.cmd !== 'br'"
      >
        <q-tooltip>{{ btn.cmd }}</q-tooltip>
        </q-btn>
    </template>
  </div>
</template>

<script>
// eslint-disable-next-line
import { get, sync, call } from 'vuex-pathify'

export default {
  name: 'Remote',
  props: {
    name: {
      type: String,
      required: true
    }
  },
  computed: {
    options() {
      return this.$store.state.remote
        ? this.$store.state.remote.ctrl[this.name] || []
        : []
    }
  },
  methods: {
    ...call('remote/*'),
  },
}
</script>

<style scoped>
hr {
  opacity: 0.3;
}
</style>
