import {createStore, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers/rootReducer'
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

const persistConfig = {
  key: "root",
  storage: storage,
  stateReconciler: autoMergeLevel2, // 查看 'Merge Process' 部分的具体情况
};

const myPersistReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  myPersistReducer,
  compose(applyMiddleware(...[thunk]), //需要使用的中间件数组
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
  )

export const persistor = persistStore(store);

export default store
