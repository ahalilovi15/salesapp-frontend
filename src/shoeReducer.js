import { SET_SHOE } from './actions';


  const initialStateShoe = {
    id: 0,
    title: "",
    description: "",
    rating: 0,
    price: 0,
    image: ""
  };



function shoeReducer(state = initialStateShoe, action) {
    switch (action.type) {
        case SET_SHOE:
            return {
                id: action.payload.id,
                title: action.payload.title,
                description: action.payload.description,
                rating: action.payload.rating,
                price: action.payload.price,
                image: action.payload.image

            };
        default:
            return state;
    }
}
export default shoeReducer;
