import { combineReducers } from 'redux-immutable'
import * as headerReducer from '../common/header/store'
import * as homeReducer from '../pages/home/store'
import * as detailReducer from '../pages/detail/store'
import * as loginReducer from '../pages/login/store'

const reducer = combineReducers({
    header: headerReducer.reducer,
    home: homeReducer.reducer,
    detail: detailReducer.reducer,
    login: loginReducer.reducer
})

export default reducer