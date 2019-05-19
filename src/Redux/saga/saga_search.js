import { put, takeLatest, call } from 'redux-saga/effects'
import { ActionTypes } from '../ActionTypes'
import axios from 'axios'
axios.defaults.headers.get['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';
export  function* loadSearchItems(data){
    let search_text=data.payload.search_text
    let contents=yield call(()=>axios.get(`http://localhost:5000/posts?q=${search_text}&_page=1&_limit=10`))
    yield put({ type: ActionTypes.SUCCESS_SEARCH, payload: { contents:contents.data , total_count:parseInt(contents.headers['x-total-count'])}})
  
  }
  
export function* sagaSearch(){
    yield takeLatest(ActionTypes.SEARCH,loadSearchItems)
}
  