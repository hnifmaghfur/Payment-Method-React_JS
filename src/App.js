import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Match,
  Miss,
} from "react-router-dom";
import Axios from "axios";
import "./App.css";
import Home from "./Home";
import Profile from "./Profile";
import Confirmation from "./Confirmation";
import Topup from "./Topup";
import InputTransfer from "./InputTransfer";
import Transfer from "./Transfer";
import { HeaderNav, FooterNav, Navbar, History } from "./Components";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:8000/api/users/3")
      .then((res) => {
        setData(res.data.data[0]);
        // console.log(res.data.data[0]);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Router>
      <div className="container-fluid bg-index p-0 d-flex flex-column">
        <header>
          <HeaderNav data={data} />
        </header>
        <div className="h-100">
          <div className="row mx-0 px-4 py-4  h-100">
            <div className="col-3 px-3">
              <Navbar />
            </div>
            <div className="col-9 pl-lg-2">
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route exact path="/transfer">
                  <Transfer />
                </Route>
                <Route exact path="/topup">
                  <Topup />
                </Route>
                <Route exact path="/profile">
                  <Profile />
                </Route>
                <Route exact path="/history">
                  <History />
                </Route>
                <Route exact path="/confirmation">
                  <Confirmation />
                </Route>
                <Route exact path="/input_transfer">
                  <InputTransfer />
                </Route>
              </Switch>
            </div>
          </div>
        </div>
        <footer className="justify-content-end align-items-end">
          <FooterNav />
        </footer>
      </div>
    </Router>
  );
}

export default App;
