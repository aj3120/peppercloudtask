import {all } from 'redux-saga/effects';
import {sagaLoadMore} from './saga_loading'
import {sagaSearch} from './saga_search';
export function *watchAll() {
  yield all([
    sagaLoadMore(),
    sagaSearch()
  ]);
}