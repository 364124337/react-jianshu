import axios from "axios"
import { CHANGE_LOGIN, LOGOUT } from './actionTypes'

const changeLogin = () => {
    return {
        type: CHANGE_LOGIN,
        value: true
    }
}

export const login = (account, password) => {
    return (dispatch) => {
        axios.get('/api/login.json?account='+account+'password='+password).then(res => {
            dispatch(changeLogin())
        })
    }
}

export const logout = () => {
    return {
        type: LOGOUT,
        value: false
    }
}