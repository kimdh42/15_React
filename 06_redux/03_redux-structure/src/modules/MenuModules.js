import {handleActions} from "redux-actions";
import { createActions } from 'redux-actions';


/** 초기값 */
const initialState = {};

/** 액션 */
const GET_MENULIST = 'menu/GET_MENULIST';

const GET_MENU = 'menu/GET_MENU';

export const { menu : { getMenulist, getMenu } } = createActions({
    
    [GET_MENULIST] : result => ({ menulist : result }),
    [GET_MENU] : result => ({ menu : result })

});

/** 리듀서 함수 */
const menuReducer = handleActions({
    
    [GET_MENULIST] : (state, { payload }) => payload,
    [GET_MENU] : (state, { payload }) => payload

}, initialState);

export default menuReducer;


// dispatch(함수전달) -> thunk 동작
//                      function()
//                      => 비동기 통신

// dispatch(액션전달) -> logger