export const state = () => ({
  name: 'Guest',
  overlay: false
})

export const mutations = {
  setName (state, payload) {
    state.name = payload.name
  },
  setOverlay (state, payload) {
    state.overlay = payload.overlay
  }
}
