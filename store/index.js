import Vuex from 'vuex'

const createStore = () => {
    return new Vuex.Store({
        state: function(){
            return{
                message: 'Hello Vuex'
            }
        },
        mutations: {
            updateMessage: function(state){
                state.message = 'Update Message'
            },
            payloadMessage: function(state, payload){
                state.message = payload
            }
        },
        actions: {
            payloadMessageAction(context, payload){
                context.commit('payloadMessage', payload)
            }
        }
    })
}

export default createStore