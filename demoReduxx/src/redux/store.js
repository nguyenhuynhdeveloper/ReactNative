import { createStore , applyMiddleware  } from "redux"
import createSagaMiddleware from "redux-saga"
import mySaga from "../saga/sagas"
import reducer from "./reducer"
const sagaMiddleware = createSagaMiddleware()
export const store = createStore(reducer ,
    applyMiddleware(sagaMiddleware))
sagaMiddleware.run(mySaga)    