import { all } from 'redux-saga/effects'

import { watchGetBreweries as watchGetBreweriesSaga } from './main/main.sagas'

export function* rootSaga() {
    yield all([watchGetBreweriesSaga()])
}