import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PortfolioScreen from "./screen/PortfolioScreen";
import ContactScreen from "./screen/ContactScreen";
import AboutmeScreen from "./screen/AboutmeScreen";

import Navbar from "./component/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <main>
      <Switch>
          <Route exact path="/" component={PortfolioScreen} />
          <Route exact path="/contact" component={ContactScreen} />
          <Route exact path="/about" component={AboutmeScreen} />
        </Switch>
      </main>

    </Router>
  );
}

export default App;
