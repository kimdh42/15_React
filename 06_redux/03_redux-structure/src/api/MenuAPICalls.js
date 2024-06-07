import { getMenulist } from '../modules/MenuModules';
import {request} from "./api"
import { getMenu } from '../modules/MenuModules';


export function callGetMenuListAPI () {
    
    return async (dispatch, getState) => {

        const result = await request('GET', '/menu');

        console.log('getMenuList result : ', result);

        /* API 호출을 통해 반환 받은 데이터를 Store에 저장하기 위해 다시 dispatch(action 객체) 호출 한다. */
        dispatch(getMenulist(result));
    }
}


export function callGetMenuAPI(id) {
    
    return async(dispatch, getState) => {
        
        const result = await request('GET', `/menu/${id}`)

        console.log('getMenu result : ', result);

        dispatch(getMenu(result));
    }
}