import './App.css';
import { HashRouter, Route } from "react-router-dom";
import HomeNav from './components/HomeNav';
import Home from './routes/Home';
import Detail from './routes/Detail';


function App() {
  return (
    <div className="App">
      <HashRouter>
        <HomeNav></HomeNav>
        <Route path="/" exact={true} component={Home} />
        <Route path="/cat/:id" component={Detail} />
      </HashRouter>
    </div>
  );
}

export default App;
