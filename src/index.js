import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Fitness from './App';
import * as serviceWorker from './serviceWorker';
import { createStore , applyMiddleware, compose} from 'redux';
import rootReducers from './store/reducers/rootReducers';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';                                        // store enhancer, thunk is middleware
import { reduxFirestore, getFirestore } from 'redux-firestore';          // store enhancer
import {reactReduxFirebase, getFirebase } from 'react-redux-firebase';  // store enhancer
import fbConfig from './config/fbConfig';

const rrfConfig = {
  userProfile: 'users', // firebase root where user profiles are stored
  attachAuthIsReady: true, // attaches auth is ready promise to store
  firebaseStateName: 'firebase' // should match the reducer name ('firebase' is default)
}

const store = createStore(rootReducers,
    compose(applyMiddleware(thunk.withExtraArgument({
          getFirebase, 
          getFirestore
        })),
      reduxFirestore(fbConfig), // redux bindings for firestore
      reactReduxFirebase(fbConfig, { useFirestoreForProfile: true, userProfile: 'users' }, rrfConfig), // redux binding for firebase
      
    )
  );

//   store.firebaseAuthIsReady.then(() => {
    ReactDOM.render(<Provider store={store}><Fitness /></Provider>, document.getElementById('root'));
    serviceWorker.unregister();
//   });

