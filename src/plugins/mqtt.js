// const io = require('socket.io')
const Paho = require('paho-mqtt')

// debugger


export default ({ Vue, store }) => {
  console.log('Plugin mqtt')

  const {
    // connector,
    server,
    port,
    path,
    clientId,
    username,
    password,
    channel
  } = store.state.settings

  // Create a client instance
  const client = new Paho.Client(
    server,
    port,
    path,
    clientId
  )

  // connect the client
  client.connect({
    userName: username,
    password,
    cleanSession: true,
    onSuccess: () => {
      console.log('MQTT Connected')
      client.subscribe(channel)
      store.dispatch('remote/init', client)
    },
    onFailure: (ctx, errorCode, errorMsg) => {
      console.log('MQTT onFailure')
      console.log(errorCode, errorMsg)
      store.dispatch('remote/disconnected', errorMsg)
    }
  })

  // called when the client loses its connection
  client.onConnectionLost = (responseObject) => {
    if (responseObject.errorCode !== 0) {
      console.log(`MQTT onConnectionLost:${responseObject.errorMessage}`)
      store.dispatch('remote/disconnected', responseObject.errorMessage)
    }
  }

  // called when a message arrives
  client.onMessageArrived = (message) => {
    console.log(`MQTT onMessageArrived:${message.payloadString}`)
    store.dispatch('remote/msg', message)
  }

  Vue.prototype.$mqtt = client
}
