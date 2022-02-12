export const SET_DISH_DETAIL = 'SET_DISH_DETAIL';

export function setDishDetail(info) {
    return{
        type: SET_DISH_DETAIL,
        info
    }
}