import './App.css';
import { BrowserRouter as Router, Route,Switch} from "react-router-dom";
import { Home, Login,Panel } from './views';
import { Provider } from 'react-redux';
import store from './store';
import { useEffect } from 'react';
import api from './services/api';
function App() {
  useEffect(()=>{
    let access = localStorage.getItem("access")
    if(access){
        api.defaults.headers.common['Authorization'] = "Bearer "+access;
    }
},[])
  return (
    <Provider store={store}>
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/login" >
            <Login/>
          </Route>
          <Route path="/panel">
          <Panel></Panel>
          </Route>
          <Route path="/" >
            <Home/>
          </Route>
        </Switch>
      </Router>
    </div>
    </Provider>
  );
}

export default App;
