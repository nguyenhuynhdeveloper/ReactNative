// //// - Redux saga
// import { createStore , applyMiddleware , combineReducers } from "redux"
// import createSagaMiddleware from "redux-saga"

// import rootSaga from "../saga/sagas"
// import rootReducers from"./reducer"

// // Tạo sagaMiddleware
// const sagaMiddleware = createSagaMiddleware()

// export const store = createStore(rootReducers ,
//     applyMiddleware(sagaMiddleware))  // Nếu k có persist 

// sagaMiddleware.run(rootSaga)    


// -> redux saga + persist
import { createStore , applyMiddleware , combineReducers } from "redux"  // tạo kho , chấp nhận Middleware , kết hợp các reducers
import createSagaMiddleware from "redux-saga"   // Tạo cổng gác saga
import { persistStore, persistReducer } from 'redux-persist'   // gắn lưu dữ liệu vào AsyncStorage với Kho , Gắn lưu dữ liệu vào AsyncStorage với reducers 
import rootSaga from "../saga/sagas"   // File chứa các cổng saga
import rootReducers from"./reducer"    // File chứa reducer sử lý dữ liệu 

import AsyncStorage from "@react-native-async-storage/async-storage"   // AsyncStorage là bộ nhớ của máy . khi thoát app, tắt máy thì khi mở ra dữ liêu vẫn còn ,  redux -persist giúp đẩy dữ liệu từ store vào AsyncStorage

// Tạo persistedReducer để lưu trữ mà có lọc qua reducer
const persistConfig = {     // Cấu hình cho persist
    key: 'root',
    storage: AsyncStorage,
    blacklist : []   // Là 1 mảng chứa những dữ liệu trong kho sẽ không được lưu, các trường dữ liệu chính là tên của reducers
  }

const persistedReducer = persistReducer(persistConfig, rootReducers);   // Kết hợp cấu hình của persist với rootReducers 

// Tạo sagaMiddleware
const sagaMiddleware = createSagaMiddleware()   // Tạo cổng gác saga

// export const store = createStore(rootReducers ,
//     applyMiddleware(sagaMiddleware))  // Nếu k có persist 

const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));    // Tạo 1 kho với sự kết hợp của các Middleware + (các reducer đã được cấu hình với lưu dữ liệu vào AsyncStorage)
const persistor = persistStore(store);   // Nâng cấp cái kho  với chức năng luu dữ liệu vào AsyncStorage

export {store , persistor}

sagaMiddleware.run(rootSaga)      // Cho cái cổng saga chạy liên tục 