import { Router, Route, Switch } from "wouter";
import Home from "./pages/Home";
import Posts from "./pages/Posts";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/posts" component={Posts} />
        {/* <Route path="/posts/:id" component={Post} /> Detalle de un posteo*/}
      </Switch>
    </Router>
  );
}

export default App;
