import axios from 'axios';
import { put, fork, all, takeEvery, call  } from 'redux-saga/effects';
import { startRetrieveData, changeData } from './houseReducer';

const getHouseApiData = () => {
  return axios.get((`http://demo4452328.mockable.io/properties`), {
  }).then(res => res)
    .catch(error => error    );
};

function* dataIncomeSaga(){
  try{
    const { data, error } = yield call(getHouseApiData);
    if(error){
      console.log(error);
    }else{
      yield put(changeData(data));
    }
  }finally{
    //yield put(changeDataLoading(false));
  }
}

function* watchRetrieveData(){
  yield takeEvery(startRetrieveData, dataIncomeSaga);
}


export default function* rootSaga(){
  yield all([
    fork(watchRetrieveData)
  ])
}