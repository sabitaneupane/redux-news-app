import { all } from 'redux-saga/effects';
import { actionWatcher } from './news-details';

export default function* rootSaga() {
  yield all([
    actionWatcher(),
  ]);
}
