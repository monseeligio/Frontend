import { createStore } from 'vuex';

// Create a new store instance.
const store = createStore({
    state() {
        return {
            pedidos: [{
                id: ' ',
                name: ' ',
                phone: ' ',
                email: ' ',
                description: ' ',
                toggle: '',
                flavours: [' ', ' '],
                ornaments: [' ']
            }],
            form: {
                name: '',
                phone: '',
                email: '',
                description: ''
            }
        }
    },
    mutations: {
        ADDPEDIDO(state, payload) {
            state.pedidos = [...state.pedidos, {
                id: 'pedido' + (state.pedidos.length + 1),
                name: payload.name,
                phone: payload.phone,
                email: payload.email,
                description: payload.description,
                toggle: '#pedido' + (state.pedidos.length + 1),
                flavours: payload.flavours,
                ornaments: payload.ornaments
            }];
        }
    }
})

export default store;