function lastCmd(state, cmd) {
  state.lastCmd = cmd || null
}

function message(state, msg) {
  state.connected = true
  state.messages.push(msg)
}

function disconnected(state, msg) {
  state.connected = false
  state.messages.push(msg)
}

export {
  lastCmd,
  message,
  disconnected
}
