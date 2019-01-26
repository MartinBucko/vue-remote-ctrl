import Vue from 'vue'
import Vuex from 'vuex'
import pathify from 'vuex-pathify'
import remote from './remote'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      remote,
    },
    plugins: [pathify.plugin], // activate plugin
  })

  return Store
}
