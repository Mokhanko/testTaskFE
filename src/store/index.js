import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware, {END} from 'redux-saga'
import rootReducer from '../reducers'
import rootSaga from '../reducers/sagas'

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ :
  compose;

const configureStore = (initialState) => {
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );
  const temp = sagaMiddleware.run(rootSaga);
  temp.done.catch(error => {
    console.log('SAGAS ERROR', error);
  });
  store.close = () => store.dispatch(END);
  return store;
};

export default configureStore;