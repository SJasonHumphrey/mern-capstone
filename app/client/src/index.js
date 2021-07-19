//react
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,
  Route, Switch
  } from 'react-router-dom';

//redux
import {createStore,applyMiddleware,compose} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

//styling
import './index.css';

//components
import App from './components/App';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import CodePen from "./components/Code"

//reducer
import reducer from './reducers'

//utilize local storage
const saveToLocalStorage = reduxGlobalState => {
    try{
      const seralizedState = JSON.stringify(reduxGlobalState);
      localStorage.setItem('state',seralizedState)

    }
    catch(e){
      console.log(e)
    }

}//eo saveToLocalStorage

const loadFromLocalStorage = () => {
  const serializedState = localStorage.getItem('state')

  if(serializedState == null){
    return undefined
  } else {
    return JSON.parse(serializedState)
  }

} //eo loadFromLocalStorage

const persistedState = loadFromLocalStorage();
const composedEnhancer = compose(applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

let store = createStore(reducer,persistedState,composedEnhancer);

store.subscribe(() => {
  saveToLocalStorage(store.getState());
})


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Switch>
          <Route  exact path = '/' component={App}/>
          <Route  path = '/login' component={Login}/>
          <Route  path = '/register' component={Register}/>
          <Route  path = '/home' component={Home}/>
          <Route  path = '/code' component={CodePen}/>
        </Switch>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


