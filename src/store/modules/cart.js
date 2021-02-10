export default {
  state() {
    return {
      cart: { items: [], total: 0, qty: 0 }
    };
  },
  mutations: {
    addProductToCart(state, payload) {
      const productData = payload.product;
      const productInCartIndex = state.cart.items.findIndex(
        ci => ci.productId === productData.id
      );

      if (productInCartIndex >= 0) {
        state.cart.items[productInCartIndex].qty++;
      } else {
        const newItem = {
          productId: productData.id,
          title: productData.title,
          image: productData.image,
          price: productData.price,
          qty: 1
        };
        state.cart.items.push(newItem);
      }
      state.cart.qty++;
      state.cart.total += productData.price;
    },

    removeProductFromCart(state, payload) {
      const prodId = payload.productId;
      const productInCartIndex = state.cart.items.findIndex(
        cartItem => cartItem.productId === prodId
      );
      const prodData = state.cart.items[productInCartIndex];
      state.cart.items.splice(productInCartIndex, 1);
      state.cart.qty -= prodData.qty;
      state.cart.total -= prodData.price * prodData.qty;
    }
  },
  actions: {
    addToCart() {},
    removeFromCart() {}
  }
};
