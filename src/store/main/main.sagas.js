import { put, call, takeLatest } from 'redux-saga/effects'

import { API } from '../../core/axios'
import { breweriesSuccess, breweriesError, BREWERIES_REQUEST } from './main.actions'

function* getBreweries() {
  try {
    const response = yield call(API.get, 'breweries')
    yield put(breweriesSuccess(response.data))
  } catch (error) {
    yield put(breweriesError(error))
    console.log(error)
  }
}


export function* watchGetBreweries() {
  yield takeLatest(BREWERIES_REQUEST, getBreweries);
}