import { UPDATE_NAME , SET_SHOE } from './actions';

const initialState = {
    name: "",
    lname: "",
    email: "",
    password: "",
    id: 0
  };
  const initialStateShoe = {
    title: ""
  };

function reducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_NAME:
            return {
                id: action.payload.id,
                name: action.payload.name,
                lname: action.payload.lname,
                email: action.payload.email,
                password: action.payload.password
            };
        default:
            return state;
    }
}

export default reducer;
