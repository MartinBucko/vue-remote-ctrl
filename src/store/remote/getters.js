export function remote(ctrlName) {
  return state => state.ctrl[ctrlName]
}
