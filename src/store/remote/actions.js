const Paho = require('paho-mqtt')

let client = {}

export function init({ commit }, _client) {
  console.log('Sending CMS:', _client)
  client = _client
  commit('message', 'Started...')
}

export function sendCmd(contex, btn) {
  console.log('Sending CMS:', btn.cmd)
  const msg = new Paho.Message(btn.cmd)
  msg.destinationName = 'devices/remote'
  return client.send(msg)
}

export function message({ commit }, msg) {
  commit('message', msg)
}


export function disconnected({ commit }, msg) {
  commit('disconnected', msg)
}

