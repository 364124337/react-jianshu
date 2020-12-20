import axios from 'axios'
import { CHANGE_DETAIL } from './actionTypes'

const changeDetail = (data) => {
    return {
        type: CHANGE_DETAIL,
        data
    }
}

export const getDetail = (id) => {
    return (dispatch) => {
        axios.get('/api/detail.json?id='+id).then(res => {
            const data = res.data.data
            dispatch(changeDetail(data))
        })
    }
}