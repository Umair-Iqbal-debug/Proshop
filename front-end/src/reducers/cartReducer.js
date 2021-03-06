import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartConstants'

const initialState = { cartItems: [] }

export const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CART_ADD_ITEM:
      const existItem = state.cartItems.find(x => x.product === payload.product)

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map(x =>
            x.product === existItem.product ? payload : x
          ),
        }
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, payload],
        }
      }

    case CART_REMOVE_ITEM:
      return {
        cartItems: state.cartItems.filter(
          product => product.product !== payload
        ),
      }

    default:
      return state
  }
}

export default cartReducer
