import axios from "axios"
import { Dispatch } from "react"
import { UserACtion, UserActionTypes } from "../../types/user"



export const fetchUsers = () => {
    return async (dispatch: Dispatch<UserACtion>) => {
        try {
            dispatch({type: UserActionTypes.FETCH_USERS})
            const response = await axios.get('https://jsonplaceholder.typicode.com/users')
            dispatch({type: UserActionTypes.FETCH_USERS_SUCCESS, payload: response.data})
        } catch (e: any) {
            dispatch({type: UserActionTypes.FETCH_USERS_ERROR, payload: e.message})
        }
    }
}