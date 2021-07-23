import { ADD_TO_CART } from './actions';


  const initialStateCart = {
    cart: []
  };



function cartReducer(state = initialStateCart, action) {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                cart: action.payload.cart

            };
        default:
            return state;
    }
}
export default cartReducer;
