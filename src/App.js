import { Route, Switch } from 'react-router-dom';
import './App.css';
import AppBody from './components/AppBody';
import Header from './components/Header';
function App() {
  return (
    <div className='App'>
      <Header />
      <AppBody>
        <Switch>
          <Route exact path='/'>
            {/* Chat */}
          </Route>
        </Switch>
      </AppBody>
    </div>
  );
}

export default App;
