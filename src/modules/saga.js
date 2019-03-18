import axios from 'axios';
import {
  put,
  fork,
  all,
  takeEvery,
  call
} from 'redux-saga/effects';
import {
  startRetrieveData,
  changeData,
  startRetrieveTemplates,
  changeTemplates,
  changeDataLoading
} from './reducer';

const baseUrl = process.env.REACT_APP_API_URL;

const getHouseApiData = () => axios.get(`${baseUrl}/properties`);

const getRadioButtons = () => [
  {
    id: 1,
    template: [
      {
        component: 'IMAGE',
        field: 'images'
      },
      {
        component: 'ADDRESS',
        field: 'full_address'
      },
      {
        component: 'PRICE',
        field: 'price'
      },
      {
        component: 'AREA',
        field: 'area'
      }
    ]
  },
  {
    id: 2,
    template: [
      {
        component: 'ADDRESS',
        field: 'full_address'
      },
      {
        component: 'IMAGE',
        field: 'images'
      },
      {
        component: 'PRICE',
        field: 'price'
      },
      {
        component: 'AREA',
        field: 'area'
      }
    ]
  },
  {
    id: 3,
    template: [
      {
        component: 'ADDRESS',
        field: 'full_address'
      },
      {
        component: 'IMAGE',
        field: 'images',
        children: [
          {
            component: 'PRICE',
            field: 'price'
          }
        ]
      },
      {
        component: 'AREA',
        field: 'area'
      }
    ]
  }
];

function* dataIncomeSaga() {
  yield put(changeDataLoading(true));
  try {
    const res = yield call(getHouseApiData);
    yield put(changeData(res.data.data));
  } catch (e) {
    console.warn(e);
  } finally {
    yield put(changeDataLoading(false));
  }
}

function* templatesIncomeSaga() {
  try {
    const res = yield call(getRadioButtons);
    yield put(changeTemplates(res));
  } catch (e) {
    console.warn(e);
  }
}

function* watchRetrieveTemplates() {
  yield takeEvery(startRetrieveTemplates, templatesIncomeSaga);
}

function* watchRetrieveData() {
  yield takeEvery(startRetrieveData, dataIncomeSaga);
}

export default function* rootSaga() {
  yield all([
    fork(watchRetrieveData),
    fork(watchRetrieveTemplates)
  ]);
}
