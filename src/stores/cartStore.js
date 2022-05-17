import { createStore } from 'vuex';

const cartStore = createStore({
    state() {
        return {
            cart: [],
        };
    },
    mutations: {
        add(state, productId) {
            if (!state.cart.products.includes(productId)) {
                state.cart.push(productId);
            }
        },
        remove(state, productId) {
            const index = state.cart.findIndex(productId);

            if (index > -1) {
                state.cart.splice(index, 1);
            }
        },
        clear(state) {
            state.cart = [];
        },
    },
});

export default cartStore;
