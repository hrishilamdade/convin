import actionTypes from "../constants/action-types";


const initialState = {
    allUsers: [{'name':"hrishi","age":23}],
    user: null
}

export const userReducer =   (state = initialState, action)=> {
    const { type, payload } = action;
  
    switch (type) {
      case actionTypes.SET_ALL_USERS:
        return {
          ...state,
          allUsers: payload,
        };
      case actionTypes.SET_USER:
        return {
          ...state,
          user: payload,
        };
      default:
        return state;
    }
  }