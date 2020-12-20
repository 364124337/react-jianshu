import { SEARCH_FOCUS, SEARCH_BLUR, CHANGE_LIST, MOUSE_ENTER, PAGE_CHANGE, MOUSE_LEAVE } from './actionTypes'
import axios from 'axios'
import { fromJS } from 'immutable'

export const searchFocus = () => {
    return {
        type: SEARCH_FOCUS
    }
}

export const searchBlur = () => {
    return {
        type: SEARCH_BLUR,
    }
}

export const changeList = (data) => {
    return {
        type: CHANGE_LIST,
        data: fromJS(data),
        totalPage: Math.ceil(data.length / 10)
    }
}

export const getList = () => {
    return (dispatch) => {
        axios.get('/api/headerList.json').then(res => {
            let data = res.data
            dispatch(changeList(data.data))
        }).catch(err => {
            console.log(err)
        })
    }
}

export const mouseEnter = () => {
    return {
        type: MOUSE_ENTER
    }
}

export const pageChange = (page) => {
    return {
        type: PAGE_CHANGE,
        page
    }
}

export const mouseLeave = () => {
    return {
        type: MOUSE_LEAVE
    }
}