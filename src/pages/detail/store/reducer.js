import { CHANGE_DETAIL } from './actionTypes'
import { fromJS } from 'immutable'

const defaultState = fromJS({
    title: 'test',
    content: 'test',
})

export default (state = defaultState, action) => {
    switch(action.type){
        case CHANGE_DETAIL:
            return state.merge({
                title: action.data.title,
                content: action.data.content
            })
        default:
            return state
    }
}