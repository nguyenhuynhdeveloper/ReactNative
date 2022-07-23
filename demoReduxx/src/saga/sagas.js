import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

function* fetchUser(action) {
const delay = (ms) => new Promise(res => res(setTimeout(console.log(abc), ms)) )

   try {
      // const user = yield call(Api);
      yield delay(3000)
      yield put({type: "TANG"});
    
   } catch (e) {
      yield put({type: "GIAM", message: e.message});
   }
}

function* mySaga() {
  yield takeEvery("USER_FETCH_REQUESTED", fetchUser);
}

export default mySaga;