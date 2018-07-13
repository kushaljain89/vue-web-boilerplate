export default {
    openModal({commit}, payload) {
        commit('openModal', payload)
    },
    closeModal({commit}) {
        commit('closeModal')
    },
    showLoader({commit}) {
        commit('showLoader')
    },
    hideLoader({commit}) {
        commit('hideLoader')
    }
}
