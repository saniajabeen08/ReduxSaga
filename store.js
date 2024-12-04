// import { createStore, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import createSagaMiddleware from 'redux-saga';
// import rootReducer from './redux/rootReducer';
// import rootSaga from './redux/combineSaga';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// const persistConfig = {
//     key: 'root',
//     storage,
//   };
//   const persistedReducer = persistReducer(persistConfig, rootReducer);
// const sagaMiddleware = createSagaMiddleware();
// const composeEnhancers = process.env.NODE_ENV === 'development'
//     ? composeWithDevTools
//     : (middleware) => middleware;
// const store = createStore(
//     persistedReducer,
//     composeEnhancers(applyMiddleware(sagaMiddleware))
// );
// sagaMiddleware.run(rootSaga);


// const persistor = persistStore(store);
// export { store, persistor };
// export default store; 



// For Login
import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import authReducer from './redux/reducer';
import rootSaga from './redux/saga';

const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({
  auth: authReducer,
});

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default store;

