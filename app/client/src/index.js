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

import './styles/index.css';
import './styles/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//Auth
import Auth from './RequireAuth';


//components
import App from './components/App';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import BaseLayout from './components/layout/BaseLayout';
import Resources from './components/Resources'
import CodePen from "./components/Code"
import TypingTest from './components/typing-feature/TypingTest'
import Cards from './components/Cards'
import QuizApp from './components/QuizApp';
import LoginMessage from './components/LoginMessage'


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
        <BaseLayout>
          <Switch>
            <Route  exact path = '/' component={App}/>
            <Route  path = '/login' component={Login}/>
            <Route  path = '/register' component={Register}/>
            <Route  path = '/loginmessage' component={LoginMessage}/>
            <Route   exact path = '/home' render={() => (
              <Auth>
                <Home/>
              </Auth>

            )}/>

            <Route  path = '/code' component={CodePen}/>
            <Route  path = '/typing-test' component={TypingTest}/>
            <Route  path = '/resources' component={Resources}/>

            <Route exact path = '/cards' render={() => (
                <Auth>
                  <Cards/>
                </Auth>
                
              )}/>

            <Route  path = '/quiz' component={QuizApp}/>
          </Switch>
        </BaseLayout>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


