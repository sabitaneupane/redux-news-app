import { put, takeLatest, call } from 'redux-saga/effects';
import { getNews } from "../api";
import { receive_news, receive_error } from "../actions";

function* fetchNews() {
  try {
    const json = yield call(getNews);
    yield put(receive_news(json));
  } catch (error) {
    yield put(receive_error());
  }
}

export function* actionWatcher() {
  yield takeLatest('FETCH_NEWS', fetchNews)
}
