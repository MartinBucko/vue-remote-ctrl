<template>
  <div class="remote">
    <template v-for="btn in options.buttons">
      <q-btn
        :key="btn.cmd"
        :v-if="!btn.hidden"
        @click="sendCmd(btn)"
        :color="btn.color || ''"
        :icon="btn.icon"
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
      return this.$store.state.remote ? this.$store.state.remote.ctrl[this.name] || [] : []
    }
  },
  methods: {
    ...call('remote/*')
  },
}
</script>
