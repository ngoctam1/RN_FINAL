import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { fetchTasksSuccess, fetchTasksFailure, fetchUserSuccess, fetchUserFailure } from '../actions/taskActions';

function* fetchTasks() {
  try {
    const response = yield call(axios.get, 'https://66ff37092b9aac9c997e8a42.mockapi.io/tasks');
    yield put(fetchTasksSuccess(response.data));
  } catch (error) {
    yield put(fetchTasksFailure(error.message));
  }
}

function* fetchUser() {
  try {
    const response = yield call(axios.get, 'https://66ff37092b9aac9c997e8a42.mockapi.io/user/1');
    yield put(fetchUserSuccess(response.data));
  } catch (error) {
    yield put(fetchUserFailure(error.message));
  }
}

export function* watchTaskSaga() {
  yield takeEvery('FETCH_TASKS_REQUEST', fetchTasks);
  yield takeEvery('FETCH_USER_REQUEST', fetchUser);
}
