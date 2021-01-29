import "./App.css";
import Home from "./components/home";
import Header from "./components/header";
import Footer from "./components/footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from "./components/SearchPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>

        <Switch>
          <Route path="/search" component={SearchPage}></Route>
          <Route path="/" component={Home}></Route>
        </Switch>

        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
