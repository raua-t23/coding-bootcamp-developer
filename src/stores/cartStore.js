import { createStore } from 'vuex';
import { inject } from 'vue';

const cartStore = createStore({
  state() {
    return {
      cart: [],
    };
  },
  getters: {
    count(state) {
      return state.cart.reduce((accumulator, current) => accumulator + current.count, 0);
    },
    countById: (state) => (productId) => {
      const index = state.cart.findIndex((product) => product.id === productId);

      return index === -1 ? 0 : state.cart[index].count;
    },
    total(state) {
      const data = inject('mockData');

      let total = 0.0;

      state.cart.forEach((product) => {
        const index = data.products.findIndex((_product) => _product.id === parseInt(product.id));

        if (index > -1) {
          total += data.products[index].price * product.count;
        }
      });

      return total;
    },
  },
  mutations: {
    add(state, productId) {
      const index = state.cart.findIndex((product) => product.id === productId);

      if (index === -1) {
        state.cart.push({
          id: productId,
          count: 1,
        });

        return;
      }

      state.cart[index].count++;
    },
    remove(state, productId) {
      const index = state.cart.findIndex((product) => product.id === productId);

      if (index === -1) {
        return;
      }

      if (state.cart[index].count === 1) {
        state.cart.splice(index, 1);

        return;
      }

      state.cart[index].count--;
    },
    clear(state) {
      state.cart = [];
    },
  },
});

export default cartStore;
