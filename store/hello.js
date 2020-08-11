export const state = () => ({
    message: 'Hello Vuex'
})

export const mutations = {
    updateMessage: function(state){
        state.message = 'Update Message'
    },
    payloadMessage: function(state, payload){
        state.message = payload
    }    
}

export const actions = {
    payloadMessageAction(context, payload){
        context.commit('payloadMessage', payload)
    }
}