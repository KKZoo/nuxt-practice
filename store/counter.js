export const state = () =>({
    count: 0
})

export const mutations = {
    countUp: function(state, payload){
        state.count += payload
    },
    resetCount: function(state, payload){
        state.count = payload
    }
}

export const actions = {
    countUpAction: function(state, payload){
        state.commit('countUp', payload)
    },
    resetCountAction: function(state, payload){
        state.commit('resetCount', payload)
    }
}