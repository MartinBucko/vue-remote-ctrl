<template>
  <q-page class="flex flex-center">
    <div class="row">
      <div class="col">
        <remote name="tv" />
      </div>
    </div>
  </q-page>
</template>

<script>
import Remote from '../components/Remote'

export default {
  name: 'PageIndex',
  components: {
    Remote,
  },
}
</script>
