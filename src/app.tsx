// npm i --save-dev @types/react-router-dom
// npm install react-router-dom --save
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart';

// Container
const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/cart" component={Cart} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default App;
