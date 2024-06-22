import { Router, Route, Switch } from "wouter";
import Home from "./pages/Home";
import Posts from "./pages/Posts/index.jsx";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/posts" component={Posts} />
      </Switch>
    </Router>
  );
}

export default App;
