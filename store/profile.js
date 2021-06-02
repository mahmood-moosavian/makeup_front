import Vue from 'vue'
const getDefaultState = () => {
  return {
    data: {},
  }
}
export const state = getDefaultState

export const getters = {
  getDisplayName(state) {
    return state.data || ''
  },
}

export const mutations = {
  SET_IDENTITY(state, payload) {
    Vue.set(state, 'data', payload)
  },
  RESET(state) {
    Object.assign(state, getDefaultState())
  },
}

export const actions = {
  fetchIdentity({ commit }) {
    console.log('fetchIdentity called')
    const cc = { goToLogin: false }
    return this.$auth
      ._get('/user', {
        cc,
      })
      .then((response) => {
        if (response) {
          commit('SET_IDENTITY', response)
        }
      })
  },
}
