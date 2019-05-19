import { put, takeLatest, call } from 'redux-saga/effects'
import { ActionTypes } from '../ActionTypes'
import axios from 'axios'
axios.defaults.headers.get['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';

export  function* loadMoreContents(data){
  let contents=yield call(()=>axios.get(`http://localhost:5000/posts?q=${data.payload.search_text}&_page=${data.payload.page}&_limit=10`))
  console.log(contents)
  yield put({ type: ActionTypes.SUCCESS_LOADMORE, payload: { contents:contents.data,page:data.payload.page}})

}
export function* sagaLoadMore(){
  yield takeLatest(ActionTypes.LOAD_MORE,loadMoreContents)
}
