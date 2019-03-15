import axios from 'axios';
import { put, fork, all, takeEvery, call  } from 'redux-saga/effects';
import {
  startRetrieveData,
  changeData,
  startRetrieveTemplates,
  changeTemplates
} from './houseReducer';
import { ADDRESS, AREA, IMAGE, PRICE } from "../pages/View/components";

const getHouseApiData = () => {
  return axios.get((`http://demo4452328.mockable.io/properties`), {
  }).then(res => res)
    .catch(error => error    );
};

const getRadioButtons = () => {
  return [
    {
      "id": 1,
      "template": [
        {
          "component": IMAGE,
          "field": "images"
        },
        {
          "component": ADDRESS,
          "field": "full_address"
        },
        {
          "component": PRICE,
          "field": "price"
        },
        {
          "component": AREA,
          "field": "area"
        }
      ]
    },
    {
      "id": 2,
      "template": [
        {
          "component": ADDRESS,
          "field": "full_address"
        },
        {
          "component": IMAGE,
          "field": "images"
        },
        {
          "component": PRICE,
          "field": "price"
        },
        {
          "component": AREA,
          "field": "area"
        }
      ]
    },
    {
      "id": 3,
      "template": [
        {
          "component": ADDRESS,
          "field": "full_address"
        },
        {
          "component": IMAGE,
          "field": "images",
          "children": [
            {
              "component": PRICE,
              "field": "price"
            }
          ]
        },
        {
          "component": AREA,
          "field": "area"
        }
      ]
    }
  ]
};

function* dataIncomeSaga(){
  try {
    const {data, error} = yield call(getHouseApiData);
    if (error) {
      console.log(error);
    } else {
      yield put(changeData(data.data));
    }
  }catch(e){
    console.warn(e);
  }
}

function* templatesIncomeSaga(){
  try{
    const data = yield call(getRadioButtons);
    yield put(changeTemplates(data));
  }catch(e){
    console.warn(e);
  }
}

function* watchRetrieveTemplates(){
  yield takeEvery(startRetrieveTemplates, templatesIncomeSaga);
}

function* watchRetrieveData(){
  yield takeEvery(startRetrieveData, dataIncomeSaga);
}

export default function* rootSaga(){
  yield all([
    fork(watchRetrieveData),
    fork(watchRetrieveTemplates)
  ])
}