import { all } from 'redux-saga/effects';
import { actionWatcher } from './news';

export default function* rootSaga() {
  yield all([
    actionWatcher(),
  ]);
}
