import { Route, Switch } from 'react-router';
import './App.css';
import AuthenticationButton from './components/authentication-button';
import Profile from './components/profile';

function App() {
  return (
    <div className="App">
      <AuthenticationButton />
      <Switch>
        <Route exact path="/profile" component={Profile} />
      </Switch>
    </div>
  );
}

export default App;
