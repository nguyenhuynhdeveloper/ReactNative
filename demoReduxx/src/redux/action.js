export var value = 0;
export  const TANG = "TANG"
export const GIAM = "GIAM"

/**
 * //-----------state-----------------------
const initialState = {
    email: '',
    score: 0,
    address: '',
    id: '',
}

//--------action ------------------
export const CAP_NHAT_EMAIL = 'CAP_NHAT_EMAIL'  //đây là action.type
export const CAP_NHAT_ID = 'CAP_NHAT_ID'
import axios from "axios";
const updateEmail = (email) => async dispatch => {
    try {
        const res = await axios.get(`http://localhost:3000`)
        dispatch({               // dispatch chỉ có tác dụng đưa vào action dưới dạng object . trong đó có 1 key bắt buộc là type thôi , còn các key khác tuỳ ý
            type: CAP_NHAT_EMAIL,
            email: res.data
        })
    }
    catch (error) {
    }
}
//// ----------------Tạo 1 cái hàm reducer để xử lý trạng thái + hành động--------------
export default function actionForReducer(state = initialState, action) 
{
    switch (action.type) {
        case CAP_NHAT_EMAIL:
            return {
                ...state,
                email: action.email
            }
        case CAP_NHAT_ID:
            return {
                ...state,
                id: action.id
            }
        default: return state
    }
}

//--------------- Kết hợp - thả tất cả reducer + middleWare vào trong store ------------
import { combineReducers } from "redux";

const reducers = combineReducers({
    personalInfo: actionForReducer

});
(state, action) => reducers(state, action);

// -------------Tạo 1 cái store--------------
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';


const middleware = [thunk];
export const store = createStore(
    reducers,
    applyMiddleware(...middleware)
)

// KHi sử dụng ở file khác thì chỉ cần 
import {useDispatch, useSelector} from 'react-redux' 
import { updateEmail } from '../redux/actions/updateAction' 

const info = useSelector((argState) => argState.personalInfo)  // info chính là giá trị lấy ra từ store
const dispatch = useDispatch();

onPress={() => dispatch(updateEmail(email))}
 */

