import ScenicSpot from '@/api/ScenicSpot'

const state = {
  scenicSpot: ''
}

const mutations = {
  SET_ScenicSpot (state, data) {
    state.scenicSpot = data
  }
}

const actions = {
  async getScenic ({ commit }) {
    try {
      const { data } = await ScenicSpot.getScenicSpot()
      // console.log(data)
      commit('SET_ScenicSpot', data)
    } catch (err) {
      console.error(err)
    }
  }
}

const getters = {
  scenicSpot: state => state.scenicSpot
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
