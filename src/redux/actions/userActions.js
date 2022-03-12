import UsersService from "../../services/users.service"
import actionTypes from "../constants/action-types"


export const setAllusers = ()=> (dispatch) => {
    return UsersService.getAllUsers().then( res=> {
        
        dispatch({
            type: actionTypes.SET_ALL_USERS,
            payload: res.data.data
        })
        return Promise.resolve()
    })
}

export const setUser = (user_id) => (dispatch) => {
    return UsersService.getUser(user_id).then(res=>{
        
        dispatch({
            type: actionTypes.SET_USER,
            payload: res.data.data
        })
        return Promise.resolve()
    })
}