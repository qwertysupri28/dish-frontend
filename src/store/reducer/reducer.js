import { SET_DISH_DETAIL } from '../action/action'
  
export function dishDetail(state = { type: SET_DISH_DETAIL, modal: false, info: null }, action) {
    if (action.type === SET_DISH_DETAIL) {
        return {
        ...state,
        type: SET_DISH_DETAIL,
        modal: action.info.modal,
        info: action.info.info
        }
    } else {
        return state
    }
}